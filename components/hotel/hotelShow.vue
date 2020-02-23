<template>
  <div class="hotelShow">
    <!-- 酒店介绍 -->
    <!-- 如果没有获取到数据就显示着没有数据 -->
    <div class="hotel" v-for="(e,i) in $store.state.hotel.hotelList.data" :key="i">
      <el-row type="flex" :gutter="10" class="hotel-bottom">
        <el-col :span="8">
          <a class="pic" @click="tiaozhuan(e)"><img :src="e.photos" alt=""/></a>
        </el-col>
        <el-col :span="10" class="title">
          <h2 @click="tiaozhuan(e)"><a>{{e.name}}</a></h2>
          <p style="color:#888;">
            {{e.alias}}
          </p>
          <el-row type="flex">
            <el-col :span="10">
              <el-rate
                v-model="e.stars"
                disabled
                show-score
                text-color="#ff9900"
                :score-template="e.stars + '分'"
              >
              </el-rate>
            </el-col>
            <el-col :span="7"> <span class="yellow">{{e.common_remarks}} </span>条评价 </el-col>
            <el-col :span="7"> <span class="yellow">{{e.very_good_remarks}} </span>篇周游记 </el-col>
          </el-row>
          <i class="el-icon-location"></i
          ><span style="font-size:14px">位于: {{e.address}}</span>
        </el-col>
        <el-col :span="6">
          <ul class="togo">
            <li v-for="(e,i) in e.products" :key="i">
              <a
                href="https://hotels.ctrip.com/hotel/694679.html"
                target="_blank"
              >
                <el-row type="flex" justify="space-between">
                  {{e.name}}
                  <span
                    ><i class="yellow">¥{{e.price}}</i>起 <i class="el-icon-right"></i
                  ></span>
                </el-row>
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>

    <!-- 分页器 -->
    <div class="page">
      <el-row type="flex" justify="end">
        <el-pagination
          layout="prev, pager, next"
          :total="totalpage"
          prev-text="<　上一页"
          next-text="下一页　>"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-size="10"
        >
        </el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            page:1,
            totalpage:1,
        }
    },
    mounted () {
        setTimeout(() => {
          this.$axios({
            url: "/hotels",
            params: { city:this.$store.state.hotel.cityId }
          }).then(res => {
            // console.log(res)
            this.totalpage=res.data.total
          });
        }, 0);
    },
    methods: {
      //页面改变时候触发
      handleCurrentChange(value){
        // console.log(value)
        this.page=value;
        this.$router.push({path:'/hotel',query:{page:this.page}})
        //后面还有其他参数要传的，现在先定死
        this.$axios({
          url:'/hotels',
          params:{
            city:this.$store.state.hotel.cityId,
            _start:this.$store.state.hotel.hotelList.nextStart,
          }
        }).then(res=>{
          // console.log(res);
          // this.totalpage= this.$store.state.hotelList.total;
          this.$store.commit('hotel/setHotelList',res.data)
        })
      },
      tiaozhuan(e){
      this.$router.replace('hotel/hotelDetail/?id='+e.id)
    }
    }
};
</script>

<style lang="less" scoped>
.hotel {
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;
  .hotel-bottom {
    margin-bottom: 25px;
    .pic {
      display: block;
      width: 320px;
      height: 210px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .title {
      h2 {
        font-weight: normal;
      }
      .el-row {
        margin: 15px 0;
        /deep/.el-rate__icon {
          font-size: 22px;
          margin: 0;
        }
      }
    }
    .togo {
      height: 100%;
      width: 100%;
      padding: 30px 0px 30px 20px;
      box-sizing: border-box;
      li {
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        color: #606266;
        &:hover {
          background-color: #f5f7fa;
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0 10px;
          box-sizing: border-box;
        }
      }
    }
  }
}
.yellow {
  color: #ff9900;
}
.page {
  margin-bottom: 20px;
  /deep/.btn-prev,
  /deep/.btn-next {
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    span {
      line-height: 27px;
    }
    &:hover {
      background-color: #ecf5ff;
      border: 1px solid #c6e2ff;
    }
  }
  /deep/.el-pager {
    font-weight: normal;
  }
}
a{
  cursor: pointer;
}
</style>
