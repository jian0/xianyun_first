<template>
  <div class="create">
    <el-row type="flex" class="row-bg" justify="space-around">
      <!-- 左侧富文本框 -->
      <el-col :span="17">
        <h2 class="title">发布新攻略</h2>
        <p class="explan">分享你的个人游记，让更多人看到哦！</p>
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        <!-- 富文本框 -->
        <div class="editor">
          <client-only>
            <vue-editor v-model="inputText"></vue-editor>
          </client-only>
        </div>
        <!-- 带建议的输入框 -->
        <el-row type="flex" class="advise">
          <el-col :span="3">
            <span>选择城市</span>
          </el-col>
          <el-col :span="12">
            <div class="city">
              <el-autocomplete
                class="inline-input"
                v-model="cityName"
                :fetch-suggestions="querySearch"
                placeholder="请输入城市"
                @select="handleSelect"
                @blur="handleBlur"
              ></el-autocomplete>
            </div>
          </el-col>
        </el-row>

        <!-- 发布按钮 -->
        <div class="btn">
          <el-button type="primary">发布</el-button>
          <i>或者</i>
          <span>保存到草稿</span>
        </div>
      </el-col>
      <!-- 右侧草稿箱 -->
      <el-col :span="4">
        <div class="drafts">
          <p>草稿箱(1)</p>
          <i class="el-icon-edit"></i>
          <span class="time">2019-10-20</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 富文本框绑定的数据
      inputText: "",
      //发布文章参数
      form: {
        title: "",
        city: "",
        content: ""
      },
      // 建议输入的城市
      cityName: "",
      // 储存城市数据
      cityDataList: []
    };
  },
  methods: {
    // 建议输入框
    querySearch(value, callback) {
      if (!value) {
        this.cityDataList = [];
        callback([]);
        return;
      }
      this.$axios({
        url: "/cities",
        params: {
          name: value
        }
      }).then(res => {
        let newList = res.data.data.map(v => {
          v.value = v.name.replace("市", "");
          return v;
        });
        callback(newList);
        this.cityDataList = newList;
      });
    },
    // 建议输入框点击
    handleSelect(data) {
      this.form.city = data.id;
    },
    // 建议输入框失焦点触发
    handleBlur() {
      this.form.city = this.cityDataList[0].id;
      this.cityName = this.cityDataList[0].value;
      console.log(this.form.city);
    }
  }
};
</script>

<style scoped lang='less'>
.create {
  width: 1000px;
  margin: 0 auto;
  .title {
    padding: 26px 0;
    font-weight: normal;
    font-size: 22px;
  }
  .explan {
    margin-top: -6px;
    color: #ccc;
    font-size: 14px;
  }
  /deep/.el-input__inner {
    margin: 20px 0;
  }
  /deep/.ql-editor {
    height: 400px;
  }
  .advise span {
    display: inline-block;
    color: #666;
    font-size: 15px;
    padding-top: 8px;
    margin: 20px 0;
  }
  .btn {
    margin: 20px 0;
    i {
      margin: 20px 12px;
      color: #666;
      font-size: 14px;
    }
    span {
      font-size: 15px;
      color: orange;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
.drafts {
  margin: 30px 0;
  padding-left: 12px;
  border: 1px solid #ccc;
  p {
    font-size: 15px;
    color: #666;
    margin: 15px 0;
  }
  /deep/i {
    display: block;
    font-size: 18px;
    margin-bottom: 12px;
    &:hover {
      cursor: pointer;
      color: orange;
    }
  }
  .time {
    font-size: 15px;
    color: #666;
    display: block;
    margin-bottom: 22px;
  }
}
</style>