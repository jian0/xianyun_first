<template>
  <!-- 评论列表 -->
  <div class="cmt-list">
    <div class="cmt-item">
      <div class="cmt-info">
        <img :src="`${$axios.defaults.baseURL}${data.account.defaultAvatar}`" alt />
        {{data.account.nickname}}
        <i>{{data.created_at | formatDate}}</i>
        <span>{{data.level}}</span>
      </div>
      <commentsItem v-if="data.parent" :data="data.parent"></commentsItem>

      <div class="cmt-content">
        <div class="cmt-new">
          <div class="cmt-message">
            <p>{{data.content}}</p>
            <div class="cmt-pic" v-if="data.pics">
              <img
                v-for="(item,index) in data.pics"
                :key="index"
                :src="`${$axios.defaults.baseURL}${item.url}`"
                alt
              />
            </div>
          </div>
          <div class="cmt-ctrl">
            <a href="javascript:;" class="active" @click="handleClick(data)">回复</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "commentsItem",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  filters: {
    formatDate: function(value) {
      return moment(value).format("YYYY-MM-DD hh:mm:ss");
    }
  },
  methods: {
    handleClick(data) {
      // 保存数据到store
      this.$store.commit('post/getFollowInfo',data)
    }
  }
};
</script>

<style scoped lang='less'>
.cmt-list {
  border: 1px solid #ddd;
}
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
    .cmt-pic {
      img {
        margin-right: 5px;
        width: 80px;
        height: 80px;
      }
    }
  }

  .cmt-content {
    .cmt-ctrl {
      height: 20px;
      line-height: 20px;
      text-align: right;
      font-size: 12px;
      color: #1e50a2;
      // opacity: 0;
    }

    &:hover {
      .cmt-new > .active {
        opacity: 1;
      }
    }
  }
}
</style>