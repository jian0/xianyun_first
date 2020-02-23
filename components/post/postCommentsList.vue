<template>
  <div class="cmt-list">
    <div class="cmt-item">
      <div class="cmt-info">
        <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
        地球发动机
        <i>2020-02-20 9:14</i>
        <span>1</span>
      </div>
      <div class="cmt-content">
        <div class="cmt-new">
          <div class="cmt-message">first</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentsData: [] //评论列表
    };
  },
  mounted() {
    let id = 4;
    // 获取评论列表
    this.$axios({
      url: "/posts/comments",
      params: {
        post: id,
        _limit: this.indexPage,
        _start: 0
      }
    }).then(res => {
      console.log(res);
      this.commentsData = res.data.data;
    });
  }
};
</script>

<style scoped lang='less'>
.cmt-list {
  border: 1px solid #ddd;
  .cmt-item {
    border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
    .cmt-info {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666;
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
      i {
        color: #999;
      }
      span {
        float: right;
      }
    }
    .cmt-message {
      margin-top: 10px;
    }
  }
}
</style>