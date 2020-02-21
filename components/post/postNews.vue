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
            <el-button type="primary" class="button" @click="$router.push('/post/create')">
              <i class="el-icon-edit"></i>写游记
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main v-for="(item,index) in data" :key="index">
        <!-- 新闻信息 -->
        <!-- 三张图的展示 -->
        <div class="san" v-if="item.images.length >= 3" >
          <h3 class="item" @click="jumpDetails(item)">
            <nuxt-link to="#" >{{item.title}}</nuxt-link>
          </h3>
          <p
            class="comment"
          >{{item.summary}}</p>
          <img v-for='(value,index) in item.images' :key="index"
            :src='value'
            alt
          />
          <!-- <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
          <img
            src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          /> -->
          <!-- 新闻底部小信息 -->
          <div class="foot">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="12">
                <div class="adress">
                  <i class="el-icon-location-outline">{{item.cityName}}</i>
                  <span>
                    <i>by</i>
                    <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                    {{item.account.nickname}}
                  </span>
                  <i class="el-icon-view">{{item.watch}}</i>
                </div>
              </el-col>
              <el-col :span="2">
                <span class="zan">{{item.like}} 赞</span>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 一张图的展示 -->
        <div class="yi" v-if='item.images.length <= 2 && item.images.length >= 1'>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="img">
                <img v-for='(value,index) in item.images' :key="index"
                  :src='value'
                  alt
                />
              </div>
            </el-col>
            <el-col :span="16">
              <div class="text">
                <h3 @click="jumpDetails(item)">
                  <nuxt-link to="#">{{item.title}}</nuxt-link>
                </h3>
                <p>{{item.summary}}</p>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="14">
                    <div class="adress">
                      <i class="el-icon-location-outline">{{item.cityName}}</i>
                      <span>
                       <i>by</i>
                        <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                        {{item.account.nickname}}
                      </span>
                      <i class="el-icon-view">{{item.watch}}</i>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <span class="zan">{{item.like}} 赞</span>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 无图的展示 -->
          <div class="noImg" v-if='item.images.length === 0'>
            <div class="title" @click="jumpDetails(item)">{{item.title}}</div>
            <div class="concent">{{item.summary}}</div>
             <!-- 底部表示展示 -->
             <div class="foot">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="12">
                <div class="adress">
                  <i class="el-icon-location-outline">{{item.cityName}}</i>
                  <span>
                    <i>by</i>
                    <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                     {{item.account.nickname}}
                  </span>
                  <i class="el-icon-view">{{item.watch}}</i>
                </div>
              </el-col>
              <el-col :span="2">
                <span class="zan">{{item.like}} 赞</span>
              </el-col>
            </el-row>
          </div>
          </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props : ['data'],
   methods: {
     jumpDetails(data){
       console.log(data)
        this.$router.push( {
           path: "/post/detail",
           query : {
             id : data.id
           }
        })
        this.$message.success('获取文章详情成功！')
     }
   }
};
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
.noImg {
  .title {
     font-size: 16px;
     margin-bottom: 22px;
     color: #000;
     border-bottom: none;
     &:hover{
       cursor: pointer;
       color: orange;
     }
  }
  .concent {
     color: #ccc;
     font-size: 14px;
     margin-bottom: 60px;
  }
}
</style>