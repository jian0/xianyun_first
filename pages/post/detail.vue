<template>
  <div class="app">
    <el-row :gutter="20">
      <el-col class="main">
        <div class="grid-content bg-purple">
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
            <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 大标题 -->
          <h1>{{detailData.title}}</h1>
          <hr />
          <!-- 文章信息   {{detailData.city.created_at}}-->
          <div class="post-info">
            <span>攻略：2019-05-22 10:57</span>
            <span>阅读：{{detailData.watch}}</span>
          </div>
          <!-- 文章内容 -->
          <div class="post-content" v-html="detailData.content"></div>
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
          <!-- 评论文章  -->
          <postComments></postComments>

          <!-- 评论列表 -->
          <postCommentsList></postCommentsList>
        </div>
        <!-- 分页 -->
        <el-row type="flex" justify="center" class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          ></el-pagination>
        </el-row>
      </el-col>
      <!-- 侧边栏 -->
      <postDetailAside></postDetailAside>
    </el-row>
  </div>
</template>

<script>
import postComments from "@/components/post/postComments";
import postCommentsList from "@/components/post/postCommentsList";
import postDetailAside from "@/components/post/postDetailAside";
export default {
  components: {
    postComments,
    postCommentsList,
    postDetailAside
  },
  data() {
    return {
      currentPage: 1,
      indexPage: 5,
      //   文章详情数据
      detailData: [],
      //   侧边栏数据
      // asideData: [],
      commentsData: [] //评论列表
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.indexPage = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 点击分享按钮时触发
    open() {
      this.$message({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    }
  },
  mounted() {
    let id = 4;
    // 获取文章详情信息
    this.$axios({
      url: "/posts",
      id: id
    }).then(res => {
      //   console.log(res);
      this.detailData = res.data.data[0];
      // console.log(this.detailData[0].title);
      // console.log(this.detailData.city.created_at);
    });
  }
};
</script>

<style scoped lang='less'>
.app {
  padding-top: 20px;
  width: 1000px;
  margin: 0 auto;
  .main {
    width: 700px;
    margin-right: 25px;
  }
  h1 {
    margin: 20px 0;
  }
  .post-info {
    text-align: right;
    padding: 20px 0;
    span {
      margin-left: 20px;
      color: #999;
    }
  }
  /deep/.post-content {
    img {
      max-width: 700px !important;
    }
  }
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
  .page {
    margin: 10px 0;
  }
  p {
    margin-bottom: 10px;
  }
  /deep/.recommend-item .el-row--flex {
    height: 80px;
  }
  .el-row--flex.is-justify-space-between {
    margin-bottom: 20px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>