<template>
  <div class="input">
    <el-input placeholder="请输入想去的地方，比如：'广州'" v-model="input" @change="handleEnter"></el-input>
    <i class="el-icon-search search"></i>

    <span class="referr">
      推荐 &nbsp;
      <nuxt-link to="#">广州</nuxt-link>
      <nuxt-link to="#">上海</nuxt-link>
      <nuxt-link to="#">北京</nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入的数据
      input: "",
      // 储存城市id
      cityId: 0,
      // 储存文章数据列表
      textList: []
    };
  },
  mounted() {},
  methods: {
    // 输入框change事件搜索文章列表
    handleEnter() {
     if (!this.input) return;
      this.$axios({
        url: "/cities",
        params: {
          name: this.input
        }
      }).then(res => {
        // console.log(res);
        this.cityId = res.data.data[0].id;
        // console.log(this.cityId)
      });

       setTimeout(()=>{
          this.$store.dispatch("post/getTextList", this.cityId).then(res => {
        //  console.log(res)
        this.textList = res.data.data;
        this.$message.success("获取城市文章列表完成");
        this.$emit("getData", this.textList);
      });
       },300)
    }
  }
};
</script>

<style scoped lang='less'>
.el-input {
  height: 40px;
  line-height: 40px;
  border: 3px solid orange;
}
.el-input__inner {
  width: 100%;
  border-left: none;
}
.el-icon-search {
  font-size: 40px;
  height: 40px;
}
// 推荐
.referr {
  display: inline-block;
  margin: 10px 0 0 0;
  color: #666;
  font-size: 12px;
}
.search {
  position: absolute;
  top: 10px;
  right: 0;
  color: orange;
  font-size: 30px;
  font-weight: 700;
}
</style>