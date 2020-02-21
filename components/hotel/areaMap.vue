<template>
  <div class="areamap">
    <!-- 区域和地图 -->
    <div class="area_map">
      <el-row type="flex" justify="space-between">
        <!-- 区域 -->
        <el-col class="area" :span="14">
          <el-row>
            <el-col :span="3">区域：</el-col>
            <el-col :span="21">
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <a href="#">人明光城</a>
              <p><span class="el-icon-d-arrow-right"></span>等29个区域</p>
            </el-col>
            <!-- 需要用到文字提示组件 -->
            <el-col :span="3"
              >均价 <span class="el-icon-question"> </span> ：</el-col
            >
            <el-col :span="21">
              <el-row type="flex" justify="space-between">
                <div class="cheap">
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  ¥332
                </div>
                <div class="middle">
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  ¥521
                </div>
                <div class="expensive">
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  <i class="iconfont iconhuangguan yellow"></i>
                  ¥768
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
      cityName: ""
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

          // data是具体的定位信息
          var marker = new AMap.Marker({
            position: new AMap.LngLat(data.position.lng, data.position.lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: data.formattedAddress
          });
          //再让地图刷新一次
          var map = new AMap.Map("container", {
            resizeEnable: true,
            zoom: 13,
            center: [data.position.lng, data.position.lat]
          });
          // 将创建的点标记添加到已有的地图实例：
          map.add(marker);
          // map.remove(marker)
        }
        function onError(data) {
          // 定位出错
          console.log(data);
        }
      });
    };
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
</style>
