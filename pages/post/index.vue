<template>
  <div class="main">
    <el-row type="flex" class="row-bg" justify="space-between">
      <!-- 左侧边导航栏 -->
      <el-col :span="6">
        <div class="navs">
          <!-- 上方菜单栏 -->
          <PostMenu></PostMenu>
          <!-- 推荐城市 -->
          <div class="goodCity">
            <p>推荐城市</p>
            <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
          </div>
        </div>
      </el-col>
      <!-- 右侧文章列表 -->
      <el-col :span="17">
        <div class="article">
          <!-- 右侧输入框 -->
          <PostInput></PostInput>

          <!-- 右侧新闻模块 -->
          <PostNews></PostNews>

          <!-- 引入分页组件 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleIndexChange"
            :current-page="pageIndex"
            :page-sizes="[3, 5, 8, 10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 左侧菜单组件
import PostMenu from "@/components/post/postMenu";
// 右侧文本框组件
import PostInput from "@/components/post/postInput";
// 右侧新闻列表组件
import PostNews from "@/components/post/postNews";
export default {
  data () {
    return {
      // 储存分页的当前页面和每页显示页数
      pageIndex : 1,
      pageSize : 3,
      // 储存分页总数量
      total : 10
    }
  },
  components: {
    PostMenu,
    PostInput,
    PostNews
  },
  methods :{
    // 每页显示多少条
     handleSizeChange(val){
       this.pageSize = val;
     },
     handleIndexChange(val){
      this.pageIndex = val;
     }

  },
  mounted() {}
};
</script>

<style scoped lang='less'>
.main {
  width: 1000px;
  margin: 20px auto;
  // 左侧布局
  .navs {
    //height: 500px;
    width: 100%;
    .goodCity {
      margin-top: 20px;
      p {
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
      }
      img {
        width: 100%;
      }
    }
  }
  // 右侧布局
  .article {
    width: 100%;
  }
}
// 分页组件
.el-pagination {
  text-align: center;
}
</style>