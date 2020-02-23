<template>
  <!-- 文章操作 -->
  <div class="post-ctrl">
    <el-row type="flex" justify="center">
      <el-col class="post-item">
        <i class="el-icon-edit-outline icon"></i>
        <p>评论</p>
      </el-col>
      <el-col class="post-item">
        <div class="post-item" @click="open">
          <i class="el-icon-share icon"></i>
          <p>分享</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击分享按钮时触发
    open() {
      this.$message({
        showClose: true,
        message: "分享功能暂时没有开放哦",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped lang='less'>
.post-ctrl {
  padding: 50px 0 30px;
  .post-item {
    margin: 0 20px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    p {
      margin-top: 5px;
      font-size: 14px;
      color: #999;
    }
  }
  .icon {
    display: block;
    font-size: 28px;
    color: orange;
  }
}
</style>