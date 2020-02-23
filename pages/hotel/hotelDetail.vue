<template>
  <div class="container">
    <div class="top-info">
      <HotelInfoHead :data="hotelData"></HotelInfoHead>
      <div class="hotel-introduce">
        <HotelHeadTitle :titleData='hotelData'></HotelHeadTitle>
        <div class="intro-img">
          <el-row type="flex" justify="space-between">
            <el-col :span="16">
              <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg" height="360" alt />
            </el-col>
            <el-col :span="8" class="right-img" height="360">
              <el-row type="flex" justify="space-between">
                <el-col :span="12" class>
                  <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
                </el-col>
                <el-col :span="12">
                  <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg" alt />
                </el-col>
              </el-row>
              <el-row type="flex" justify="space-between">
                <el-col :span="12">
                  <img src="http://157.122.54.189:9093/images/hotel-pics/3.jpeg" alt />
                </el-col>
                <el-col :span="12">
                  <img src="http://157.122.54.189:9093/images/hotel-pics/4.jpeg" alt />
                </el-col>
              </el-row>
              <el-row type="flex" justify="space-between">
                <el-col :span="12">
                  <img src="http://157.122.54.189:9093/images/hotel-pics/5.jpeg" alt />
                </el-col>
                <el-col :span="12">
                  <img src="http://157.122.54.189:9093/images/hotel-pics/6.jpeg" alt />
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <!-- 酒店价格来源 -->
        <HotelInfoIntro :hotelInfoData='hotelData'></HotelInfoIntro>
        <HotelMap :mapData='hotelData'></HotelMap>
        <RoomInfo :roomInfo='hotelData'></RoomInfo>
      </div>
      <HotelComment :commentData='hotelData'></HotelComment>
    </div>
  </div>
</template>


<script>
import HotelInfoIntro from "@/components/hotel/HotelInfoIntro";
import HotelInfoHead from "@/components/hotel/hotelInfoHead";
import HotelHeadTitle from "@/components/hotel/hotelHeadTitle";
import HotelMap from "@/components/hotel/map";
import RoomInfo from "@/components/hotel/roomInfo";
import HotelComment from "@/components/hotel/hotelComment";
export default {
  data() {
    return {
      hotelData:{}
    };
  },
  components: {
    HotelInfoIntro,
    HotelInfoHead,
    HotelHeadTitle,
    HotelMap,
    RoomInfo,
    HotelComment
  },
  mounted() {
    this.$router.push({
      path: "/hotel/hotelDetail",
      query: { id: 185 }
    });
    console.log(this.$route.query.id);
    this.$axios({
      method: "get",
      url: "/hotels?id=" + this.$route.query.id
    }).then(res => {
      // console.log(res);
      this.hotelData = res.data.data;
      console.log(this.hotelData)
    });
  }
};
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  margin: 20px auto;
  margin-top: 15px;
}
.intro-img {
  margin-top: 20px;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
  /deep/ .right-img {
    margin-right: -10px;
    margin-left: -10px;
    img {
      padding: 0 10px 10px;
      // margin-bottom: 10px;
      width: 150px;
      height: 111px;
    }
  }
}
</style>