<template>
  <div class="new">
    <el-container>
      <!-- 标题部分 -->
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="4">
            <h2 class="title">推荐攻略</h2>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" class="button">
              <i class="el-icon-edit"></i>写游记
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- 新闻信息 -->
        <!-- 三张图的展示 -->
        <div class="san">
          <h3 class="item">
            <nuxt-link to="#">塞班贵？一定是你的打开方式不对！6000块玩转塞班</nuxt-link>
          </h3>
          <p
            class="comment"
          >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？</p>
          <img
            src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          />
          <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
          <img
            src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          />
          <!-- 新闻底部小信息 -->
          <div class="foot">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="12">
                <div class="adress">
                  <i class="el-icon-location-outline">北京市</i>
                  <span>
                    <i>by</i>
                    <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                    地球发动机
                  </span>
                  <i class="el-icon-view">13892</i>
                </div>
              </el-col>
              <el-col :span="2">
                <span class="zan">79 赞</span>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 一张图的展示 -->
        <div class="yi">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="img">
                <img
                  src="https://p3-q.mafengwo.net/s13/M00/41/C4/wKgEaVyaOs2AA9IKAAj8Lg2YzaU64.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                  alt
                />
              </div>
            </el-col>
            <el-col :span="16">
              <div class="text">
                <h3>
                  <nuxt-link to="#">远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略</nuxt-link>
                </h3>
                <p>想象一下一个距离 北京 只有2.5小时飞行距离的城市：身处 亚洲 却能感受到十足的欧陆风情——欧式建筑和街道，金发碧眼的路人，正宗的西餐外加只有国内一半售价的帝王蟹可以敞开吃——更难能可贵的是，这里对国人（实质）免签，有直飞航班，低廉的物价，且尚未有太多的游客涉足还保留着原汁原味的传统风情！</p>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="14">
                    <div class="adress">
                      <i class="el-icon-location-outline">青岛市</i>
                      <span>
                       <i>by</i>
                        <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                        地球发动机
                      </span>
                      <i class="el-icon-view">13892</i>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <span class="zan">20 赞</span>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.row-bg {
  width: 100%;
  .el-header {
    border-bottom: 1px solid #f3f3f3;
    padding: 0;
  }
  .title {
    margin-top: 9px;
    font-size: 20px;
    color: orange;
    width: 80px;
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid orange;
  }
  .button {
    margin-top: 10px;
    height: 45px;
    .el-icon-edit {
      margin-right: 10px;
    }
  }
}
.el-main {
  padding: 20px 0;
}
.san {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  .item {
    font-weight: normal;
    font-size: 20px;
    &:hover {
      color: orange;
    }
  }
  .comment {
    margin: 20px 0;
    color: #666;
    font-size: 16px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  img {
    width: 32.88%;
    height: 150px;
  }
}
.adress {
  margin: 10px 0;
  font-size: 13px;
  color: #666;
  img {
    height: 16px;
    width: 16px;
    margin: 0 5px;
    vertical-align: bottom;
  }
  i {
    margin-right: 8px;
  }
  span {
      color:orange;
      i {
          color: #666;
      }
  }
}
.zan {
  display: inline-block;
  margin-top: 5px;
  color: orange;
  font-size: 17px;
}
.row-bg {
  .img > img {
    width: 130%;
  }
}
.yi {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    .text {
    h3 {
        font-weight: normal;
        font-size: 18px;
        &:hover{
            color: orange;
        }
    }
    p {
    color: #666;
    font-size: 15px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    }
}
}
</style>