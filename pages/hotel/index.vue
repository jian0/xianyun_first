<template>
  <div class="hotel">
    <div class="main">
      <!-- destoryed时候要把数据清空掉 -->
      <!-- 面包屑 -->
      <div>
        <el-breadcrumb separator-class="el-icon-loading">
          <el-breadcrumb-item>酒店</el-breadcrumb-item>
          <el-breadcrumb-item
            >{{ $route.query.cityName || "" }}酒店预订</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>

      <!-- 搜索价格-->
      <SearchPrice />

      <!-- 地方和地图 -->
      <AreaMap />

      <!-- 类型展示 -->
      <HotelType />

      <!-- 酒店展示 -->
      <HotelShow />
    </div>
  </div>
</template>

<script>
import SearchPrice from "@/components/hotel/searchPrice";
import AreaMap from "@/components/hotel/areaMap";
import HotelType from "@/components/hotel/hotelType";
import HotelShow from "@/components/hotel/hotelShow";
export default {
  components: {
    SearchPrice,
    AreaMap,
    HotelType,
    HotelShow
  },
  mounted() {
    // console.log(this.$route.query)
    //第一次进入这个路径时候加载的数据
    this.init();
  },
  watch: {
    $route(){
      //路径参数变化时候也要获取到相应数据
      setTimeout(() => {
          if (this.$route.query.cityName) {
        this.$axios({
          url: "/cities",
          params: { name: this.$route.query.cityName }
        }).then(res => {
          // console.log(res);
          let id  = res.data.data[0].id;
          this.$store.commit('hotel/setOneCity',res.data.data[0]);
          this.$store.commit('hotel/setCityId',id);
          this.$axios({
            url: "/hotels",
            params: { city:  this.$store.state.hotel.cityId  }
          }).then(res => {
            // console.log(res)
          this.$store.commit('hotel/setHotelList',res.data);
          });
        });
      }
        }, 0);
    }
  },
  methods: {
    init() {
      
      // console.log(this.$route.query)
        setTimeout(() => {
          if (this.$route.query.cityName) {
        this.$axios({
          url: "/cities",
          params: { name: this.$route.query.cityName }
        }).then(res => {
          // console.log(res);
          let id  = res.data.data[0].id;
          this.$store.commit('hotel/setOneCity',res.data.data[0]);
          this.$store.commit('hotel/setCityId',id);
          this.$axios({
            url: "/hotels",
            params: { city: id }
          }).then(res => {
            // console.log(res)
          this.$store.commit('hotel/setHotelList',res.data);
          });
        });
      }
        }, 0);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  .el-breadcrumb {
    margin: 25px 0;
  }
}
/deep/.el-icon-user {
  font-size: 20px;
}
</style>
