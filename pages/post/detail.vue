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
          <div class="post-content" v-html="detailData.content">
            <!-- <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。</p>
            <p>
              <img
                src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
              <span>图：塞班岛。 by第5季旅游</span>
            </p>
            <h2>一、怎样用6000块玩转塞班？</h2>
            <p>大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。</p>
            <p>
              <br />
            </p>
            <h3>1.怎样订机票+酒店性价比最高？</h3>
            <p>
              机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了
              <img
                src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png"
                alt
              />
            </p>
            <br />
            <p>
              <img
                src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </p>
            <br />
            <p>怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。</p>
            <p>在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。</p>
            <p>怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>-->
          </div>
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
          <div class="comments cmt">
            <h4 class="cmt-title">评论</h4>
            <!-- tag标签 -->
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
              style="color:#909399"
            >回复 {{tag}}</el-tag>
            <!-- 输入框 -->
            <el-input type="textarea" :rows="2" placeholder="说点什么吧..." v-model="textarea"></el-input>
            <el-row type="flex" justify="space-between">
              <!-- 上传图片 -->
              <el-upload action="#" list-type="picture-card" :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
              <!-- 提交按钮 -->
              <el-button type="primary">提交</el-button>
            </el-row>
            <!-- 评论列表 -->
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
          </div>
        </div>
        <!-- 分页 -->
        <el-row type="flex" justify="center" class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </el-row>
      </el-col>
      <!-- 侧边栏 -->
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

          <!-- <div class="recommend-list">
            <nuxt-link to="#" class="recommend-item">
              <el-row type="flex">
                <el-row type="flex" class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/fd4f2f916cf247f7b5221052eeb9c159.jpg"
                    alt
                  />
                </el-row>

                <div class="post-text">
                  奇奇怪怪
                  <p>2020-02-20 11:15 阅读 1</p>
                </div>
              </el-row>
            </nuxt-link>
          </div>
          <div class="recommend-list">
            <nuxt-link to="#" class="recommend-item">
              <el-row type="flex">
                <el-row type="flex" class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/fd4f2f916cf247f7b5221052eeb9c159.jpg"
                    alt
                  />
                </el-row>

                <div class="post-text">
                  奇奇怪怪
                  <p>2020-02-20 11:15 阅读 1</p>
                </div>
              </el-row>
            </nuxt-link>
          </div>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 5,
      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false,
      dynamicTags: ["@地球发动机"],
      detailData: [],
      asideData: []
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 关闭tag标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
      //   console.log(this.detailData[0].title);
      // console.log(this.detailData.city.created_at);
    });

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
  .cmt {
    .cmt-title {
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  .el-textarea {
    margin-bottom: 10px;
  }
  /deep/.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    .avatar-uploader-icon {
      width: 100px;
      height: 100px;
      line-height: 100px;
    }
  }
  .el-button {
    height: 40px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  /deep/.el-upload {
    border: 1px dashed #c0ccda;
    border-radius: 6px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  //   tag标签
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  //   评论列表
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

  //   侧边栏
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
}
// .el-row {
//   margin-bottom: 20px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// }
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