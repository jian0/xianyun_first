<template>
  <div class="price">
    <!-- 查询价格 -->
    <!-- 统一一下都没写v-model -->
    <el-row :gutter="15" class="check">
      <!-- 远程搜索（地址） -->
      <el-col :span="5">
        <el-autocomplete
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete
      ></el-col>
      <el-col :span="9">
        <!-- 选择日期范围 -->
        <!-- range-separator选择时间的分隔符 -->
        <!-- 无效日期需要禁止掉 -->
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        >
        </el-date-picker>
      </el-col>
      <!-- 人数 -->
      <el-col :span="6" >
        <div @click="flag=!flag"><el-input placeholder="人数未定" suffix-icon="el-icon-user" readonly></el-input></div>
      </el-col>
      <!-- 显示选择多少成人和儿童 -->
      <div class="pepole" v-show="flag">
        <div class="top">
          <el-row :gutter="10">
            <el-col :span="6">
              每间
            </el-col>
            <el-col :span="9">
              <el-select size="small">
                <el-option
                  v-for="(e, i) in [1, 2, 3, 4, 5, 6, 7]"
                  :key="i"
                  :label="e + '成人'"
                  :value="e"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="9">
              <el-select size="small">
                <el-option
                  v-for="(e, i) in [0, 1, 2, 3, 4]"
                  :key="i"
                  :label="e + '儿童'"
                  :value="e"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
        <el-row type="flex" justify="end" align="middle"
          ><el-button type="primary" size="small">确认</el-button></el-row
        >
      </div>
      <el-button type="primary">查看价格</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        flag:false,
    };
  },
  methods: {
    methods: {
      querySearchAsync(value, cb) {
        // cb（[{内部一定要有value属性才能展示}]）
      },
      // 远程搜索选择后做什么
      handleSelect() {}
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
  .pepole {
    position: absolute;
    width: 326px;
    height: 128px;
    right: 90px;
    top: 48px;
    background-color: #fff;
    box-shadow: 1px 1px 2px 2px rgba(90, 90, 90, 0.5);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    z-index: 2;
    > .top {
      border-bottom: 1px solid #ccc;
      height: 65px;
    }
    > .el-row {
      height: 65px;
    }
  }
}
</style>
