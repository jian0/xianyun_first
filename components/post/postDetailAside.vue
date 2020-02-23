<template>
  <el-col class="aside">
    <div class="grid-content bg-purple">
      <h4 class="aside-title">相关攻略</h4>
      <div class="recommend-list" v-for="(item,index) in asideData" :key="index">
        <nuxt-link to="#" class="recommend-item">
          <el-row type="flex">
            <el-row
              type="flex"
              class="post-img"
              v-for="(img,imgindex) in asideData.images"
              :key="imgindex"
            >
              <img :src="img" alt />
            </el-row>

            <div class="post-text">
              {{item.title}}
              <p>2020-02-20 11:15 阅读 1</p>
            </div>
          </el-row>
        </nuxt-link>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      asideData: [] //   侧边栏数据
    };
  },
  mounted() {
    let id = 4;

    // 获取侧边栏详情
    this.$axios({
      url: "/posts/recommend",
      id: id
    }).then(res => {
      //   console.log(res);
      this.asideData = res.data.data;
    });
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