<template>
  <!-- 攻略详情侧边栏 -->
  <el-col class="aside">
    <div class="grid-content bg-purple">
      <h4 class="aside-title">相关攻略</h4>
      <div class="recommend-list" v-for="(item,index) in asideData" :key="index">
        <nuxt-link :to="`/post/detail?id=${item.id}`" class="recommend-item" @click="handleClick">
          <el-row type="flex">
            <div class="post-text">
              <div type="flex" class="post-img" v-if="asideData.images">
                <img :src="`${item.images[0]}`" alt />
              </div>
              {{item.title}}
              <p>{{item.created_at | formatDate}} 阅读 {{item.watch}}</p>
            </div>
          </el-row>
        </nuxt-link>
      </div>
    </div>
  </el-col>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      asideData: [] //   侧边栏数据
    };
  },
  filters: {
    formatDate: function(value) {
      return moment(value).format("YYYY-MM-DD hh:mm:ss");
    }
  },
  mounted() {
    let id = this.$route.query.id;
    // 获取侧边栏详情
    this.$axios({
      url: "/posts/recommend",
      id: id
    }).then(res => {
      console.log(res);
      this.asideData = res.data.data;
    });
  },
  methods: {
    handleClick() {
      let id = this.$route.query.id;
      console.log(id);

      this.$emit("handleJump");
      this.$router.push("/post/detail?id=" + id);
    }
  }
};
</script>

<style scoped lang='less'>
.aside {
  width: 280px;
  .aside-title {
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .recommend-item {
    height: 80px;
    display: block;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    .post-img {
      width: 100px;
      height: 80px;
      flex-shrink: 0;
      background: #ddd;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .post-text {
      position: relative;
      flex: 1;
      p {
        position: absolute;
        margin-bottom: 0;
        bottom: 0;
        left: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>