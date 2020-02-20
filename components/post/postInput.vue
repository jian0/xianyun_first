<template>
  <div class="input">
       <el-input
    placeholder="请输入想去的地方，比如：'广州'"
    suffix-icon="el-icon-search"
    v-model="input">
     </el-input>

    <span class="referr">推荐 &nbsp;
        <nuxt-link to='#'>广州</nuxt-link>
        <nuxt-link to='#'>上海</nuxt-link>
        <nuxt-link to='#'>北京</nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  data () {
      return {
          input : ''
      }
  }
}
</script>

<style scoped lang='less'>
  .el-input{
      height: 40px;
      line-height: 40px;
      border: 3px solid orange;
  }
   .el-input__inner {
       width: 100%;
          border-left: none;
      }
    .el-icon-search{
        font-size: 40px;
        height: 40px;
    }
    // 推荐
    .referr{
      display: inline-block;
        margin: 10px 0 0 0;
      color: #666;
      font-size: 12px;
    }
</style>