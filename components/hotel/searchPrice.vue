<template>
  <div class="price">
    <!-- 查询价格 -->
    <!-- 统一一下都没写v-model -->
    <el-row :gutter="15" class="check">
      <!-- 远程搜索（地址） -->
      <el-col :span="5">
        <el-autocomplete
          v-model="searcharea"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
          @blur="selectarea"
        ></el-autocomplete
      ></el-col>
      <el-col :span="9">
        <!-- 选择日期范围 -->
        <!-- range-separator选择时间的分隔符 -->
        <!-- 无效日期需要禁止掉 -->
        <el-date-picker
          v-model="times"
          type="daterange"
          range-separator="至"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
          @change="gettimes"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="6" class="person">
        <el-popover
          placement="buttom"
          width="300"
          trigger="click"
          v-model="hid"
        >
          <!-- 显示选择多少成人和儿童 -->

          <div class="top">
            <el-row :gutter="10">
              <el-col :span="6">
                每间
              </el-col>
              <el-col :span="9">
                <el-select size="small" v-model="adult_num" @change="getadult">
                  <el-option v-for="(e, i) in 7" :key="i" :label="e" :value="e">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="9">
                <el-select size="small" v-model="child_num" @change="getchild">
                  <el-option
                    v-for="(e, i) in [0, 1, 2, 3, 4]"
                    :key="i"
                    :label="e"
                    :value="e"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <el-row type="flex" justify="end" align="middle" class="sure-btn"
            ><el-button type="primary" size="small" @click="sure"
              >确认</el-button
            ></el-row
          >

          <!-- 人数 -->
          <el-input
            v-model="person_num"
            placeholder="人数未定"
            suffix-icon="el-icon-user"
            readonly
            slot="reference"
          ></el-input>
        </el-popover>
      </el-col>

      <el-button type="primary">查看价格</el-button>
    </el-row>
  </div>
</template>

<script>
import Moment from "moment";
export default {
  data() {
    return {
      searcharea: "",
      startTime: "",
      endTime: "",
      allperson_num: "",
      person_num: "",
      adult_num: 2,
      child_num: 0,
      times: "",
      //searchareaList为了方便判断搜索时候是否为空
      searchareaList: [],
      //不能选择之前的时间
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24;
        }
      },
      hid: false
    };
  },
  mounted() {
    this.searcharea = this.$route.query.cityName;
  },
  methods: {
    //远程搜索的展示
    querySearchAsync(value, cb) {
      // cb（[{内部一定要有value属性才能展示}]）
      if (!value) {
        cb([]);
        return;
      }
      this.$axios({
        url: "/cities",
        params: {
          name: this.searcharea
        }
      }).then(res => {
        // console.log(res);
        //如果没有数据就不能执行下面的步骤
        if(res.data.data.length==0) {
          cb([]);
          return;
        }
        let searchareaList = res.data.data;
        searchareaList.forEach(e => {
          e.value = e.name;
        });
        this.searchareaList = searchareaList;
        cb(searchareaList);
      });
    },
    // 远程搜索选择后做什么
    handleSelect(value) {
      // console.log(value);
      //仅仅是页面路径改变了，但是组件还是复用了
      this.$router.push({ path: "/hotel", query: { cityName: value.name } });
    },
    //默认选择第一个
    selectarea() {
      if (this.searcharea && this.searchareaList) {
        this.$router.push({
          path: "/hotel",
          query: { cityName: this.searchareaList[0].name }
        });
        this.searcharea = this.searchareaList[0].name;
      }
    },
    //获取选择的时间
    gettimes() {
      this.startTime = Moment(this.times[0]).format("YYYY-MM-DD");
      this.endTime = Moment(this.times[1]).format("YYYY-MM-DD");
    },
    //获取成人数量
    getadult(value) {
      this.adult_num = value;
    },
    getchild(value) {
      this.child_num = value;
    },
    //确认多少人的
    sure() {
      this.hid = false;
      if(this.child_num) {
        this.person_num =
        this.adult_num + " 成人" + "   " + this.child_num + " 儿童";
      }else {
        this.person_num =this.adult_num + " 成人"
      }
      this.allperson_num = this.child_num + this.adult_num;
      console.log(this.allperson_num);
    }
  }
};
</script>

<style lang="less" scpoed>
.check {
  height: 65px;
  position: relative;
  .el-date-editor {
    width: 100%;
  }
  /deep/.el-popover {
    top: 48px;
  }
  .person {
    .top {
      position: relative;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
      &::before {
        position: absolute;
        display: block;
        content: "成人";
        z-index: 2001;
        font-size: 14px;
        top: 6px;
        right: 166px;
      }
      &::after {
        position: absolute;
        display: block;
        content: "儿童";
        z-index: 2000;
        font-size: 14px;
        top: 6px;
        right: 50px;
      }
    }
    .sure-btn {
      padding-top: 10px;
    }
  }
}
</style>
