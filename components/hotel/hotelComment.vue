<template>
  <div class="container">
    <div class="comment-row" v-for="(item,index) in commentData"
    :key="index">
      <h4 classs="comments-hd">0条真实用户评论</h4>
      <el-row class="scores-row" type="flex">
        <el-col :span="4">
          <p>总评数：{{item.all_remarks}}</p>
          <p>好评数：{{item.good_remarks}}</p>
          <p>差评数：{{item.bad_remarks}}</p>
        </el-col>
        <el-col :span="5" class="recomment-score">
          <div class="comment-star">
            <el-rate
              v-model="item.stars"
              disabled
              show-score
              text-color="#ff9900"
             :score-template="`${item.stars}`"
            ></el-rate>
          </div>
          <div class="stamp x-large height-light">推荐</div>
        </el-col>
        <el-col :span="3">
          <div class="rate-box">
            <div class="circle-rate">
              <el-progress
                type="circle"
                :percentage="item.scores.environment*10"
                class="progress"
                :stroke-width="3"
                color="#ff9900"
                :width="70"
                :show-text='false'
              ></el-progress>
              <span class="text">
                <span>环境</span>
                <span>{{item.scores.environment}}</span>
              </span>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="rate-box">
            <div class="circle-rate">
              <el-progress
                type="circle"
                :percentage="item.scores.product*10"
                class="progress"
                :stroke-width="3"
                color="#ff9900"
                :width="70"
                :show-text='false'
              ></el-progress>
              <span class="text">
                <span>产品</span>
                <span>{{item.scores.product}}</span>
              </span>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="rate-box">
            <div class="circle-rate">
              <el-progress
                type="circle"
                :percentage="item.scores.service*10"
                class="progress"
                :stroke-width="3"
                color="#ff9900"
                :width="70"
                :show-text='false'
              ></el-progress>
              <span class="text">
                <span>服务</span>
                <span>{{item.scores.service}}</span>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props:['commentData'],
  data() {
    return {
  
    };
  },
  methods:{
   
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1000px;
  margin: 20px auto;
  margin-top: 15px;
  .scores-row {
    color: #666;
    padding: 20px 0;
    .recomment-score {
      position: relative;
      display: flex;
      align-content: center;
      .comment-star {
        margin-top: 20px;
      }
      .stamp {
        position: absolute;
        left: 20px;
        text-align: center;
        line-height: 70px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid #fa3;
        opacity: 0.25;
        transform: rotate(-30deg);
      }
      .height-light {
        color: #f90;
      }
      .x-large {
        font-size: x-large;
      }
    }
    .rate-box {
      width: 70px;
      .circle-rate {
        position: relative;
        // .progress {
        //   position: absolute;
        //   left: 20px;
        //   text-align: center;
        // }
        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>