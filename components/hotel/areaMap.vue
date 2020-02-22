<template>
  <div class="areamap">
    <!-- 区域和地图 -->
    <div class="area_map">
      <el-row type="flex" justify="space-between">
        <!-- 区域 -->
        <el-col class="area" :span="14">
          <el-row>
            <el-col :span="3">区域：</el-col>
            <el-col :span="21" >
              <div class="showarea" :class="{'active':showflag}">
                <a href="#" v-for="(e,i) in $store.state.hotel.oneCity.scenics" :key="i">{{e.name}}</a>
              </div>
              <p @click="showflag=!showflag"><span class="el-icon-d-arrow-right" :class="{'zhuan':showflag}" ></span>等{{$store.state.hotel.oneCity.scenics.length}}个区域</p>
            </el-col>
            <!-- 需要用到文字提示组件 -->
            <el-col :span="3"
              >均价 <el-tooltip content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top">
                <span class="el-icon-question"> </span>
              </el-tooltip> ：
              </el-col>
            <el-col :span="21">
              <el-row type="flex" justify="space-between">
                <div class="cheap">
                  <i class="iconfont iconhuangguan yellow" v-for="e in 3" :key="e"></i>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。(经济型/舒适性)" placement="bottom">
                    <span>¥332</span>
                  </el-tooltip>
                  
                </div>
                <div class="middle">
                  <i class="iconfont iconhuangguan yellow" v-for="e in 4" :key="e"></i>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。(高档型)" placement="bottom">
                    <span>¥521</span>
                  </el-tooltip>
                </div>
                <div class="expensive">
                  <i class="iconfont iconhuangguan yellow" v-for="e in 5" :key="e"></i>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。(顶呱呱型)" placement="bottom">
                    <span>¥332</span>
                  </el-tooltip>
                </div>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <!-- 地图 -->
        <!-- 设置完静态再添加进来 -->
        <el-col class="map" :span="10">
          <div id="container"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
      showflag:false,
    };
  },
  mounted() {
    let _this = this;
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=6fbcfb88e7e1381d320ef0bfe2a3c49b&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        resizeEnable: true
      });

      AMap.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          // enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          //实现跳转到定位城市的路径
          _this.cityName = data.addressComponent.city;
          _this.$alert("定位成功 : " + _this.cityName, "提示", {
            confirmButtonText: "确定",
            type: "success"
          });
          _this.$router.push({
            path: "/hotel",
            query: { cityName: _this.cityName }
          });
          //模糊定位
          // AMap.plugin("AMap.CitySearch", function() {
          //   var citySearch = new AMap.CitySearch();
          //   citySearch.getLocalCity(function(status, result) {
          //     if (status === "complete" && result.info === "OK") {
          //       // 查询成功，result即为当前所在城市信息
          //       // console.log(result)
          //       _this.cityName = result.city;
          //       _this.$alert("定位成功 : " + _this.cityName, "提示", {
          //         confirmButtonText: "确定",
          //         type: "success"
          //       });
          //       _this.$router.push({
          //         path: "/hotel",
          //         query: { cityName: _this.cityName }
          //       });
          //     }
          //   });
          // });

          _this.showhotel();
        }
        function onError(data) {
          // 定位出错
          console.log(data);
        }
      });
    };
    
  },
  watch: {
    $route(){
      // console.log(this.$route.query)
       var map = new AMap.Map("container", {
            resizeEnable: true,
            
        });
        this.showhotel();

    }
  },
  methods: {
    showhotel(){
          var markerList= [];
          var marker;
          var center_lng=0;
          var center_lat=0;
          var content;
          var all_length = this.$store.state.hotel.hotelList.data.length
          this.$store.state.hotel.hotelList.data.forEach((e,i)=>{
            center_lng += e.location.longitude;
            center_lat += e.location.latitude;
            // console.log(center_lng)
              marker = new AMap.Marker({
              position: new AMap.LngLat(e.location.longitude, e.location.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
              title: e.name,
              content:`<div style='position: relative;'><img src='//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png' style='width:30px'><span style='position: absolute;top:3px;left:9px;color:#fff;font-size=16px'>${i+1}</span></div>`
            });
            markerList.push(marker)
          });
          // 再让地图刷新一次
          var map = new AMap.Map("container", {
            resizeEnable: true,
            zoom:10,
            //居中到中间
            center: [center_lng/all_length, center_lat/all_length],
          });
          // // 将创建的点标记添加到已有的地图实例：
          map.add(markerList);
          // map.remove(marker)
    }
  }
};
</script>

<style lang="less" scoped>
.area_map {
  height: 260px;
  color: #666;
  font-size: 15px;
  .area {
    height: 260px;
    padding-right: 15px;
    a {
      display: inline-block;
      margin-right: 10px;
      font-family: "simsun";
      margin-bottom: 5px;
    }
    p {
      font-family: "simsun";
      margin: 5px 0 10px 0;
      &:hover {
        cursor: pointer;
      }
      > span {
        transform: rotate(90deg);
        color: pink;
      }
    }
  }
  .map {
    width: 420px;
    height: 260px;
  }
}
.yellow {
  color: #ff9900;
}
#container {
  width: 100%;
  height: 100%;
}
.showarea{
  height: 43px;
  overflow: hidden;
}
.active{
  height: 200px;
  overflow: scroll;
}
.zhuan{
  transform: rotate(270deg)!important;
}
</style>
