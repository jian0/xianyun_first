<template>
  <div class="info-row">
    <div class="map-view">
      <div id="container" class="map-box"></div>
      <div class="poi-list">
        <el-tabs v-model="editableTabs" type="border-card" @tab-click="handleSearch">
          <el-tab-pane label="风景" name="1">
            <div class="poi-list-ol" id="panel">
              <ul>
                <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="交通" name="2">
            <div class="poi-list-ol" id="traffic">
              <ul>
                <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mapData"],
  data() {
    return {
      centerInfo: [],
      editableTabs: "1",
      list: []
    };
  },
  mounted() {
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=bc7c9d8e6c159ef8d8b2fff39da2110a&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    window.onLoad = () => {
      var map = new AMap.Map("container");
      AMap.service(["AMap.PlaceSearch"], () => {
        //构造地点查询类

        var placeSearch = new AMap.PlaceSearch({
          type: "风景|交通设施服务", // 兴趣点类别
          pageSize: 10, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: this.mapData[0].name, // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          //  panel: 'panel', // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });

        var cpoint = [
          this.mapData[0].location.longitude,
          this.mapData[0].location.latitude
        ]; //中心点坐标
        console.log(cpoint);
        placeSearch.searchNearBy("", cpoint, 2000, (status, result) => {
          console.log(result);
          this.list = result.poiList.pois;
          console.log(this.list);
        });
      });
    };
  },
  methods: {
    handleSearch(tab, event) {
      // if (tab.index == 0) {
      //   let scenry = this.list.filter(v => {
      //     return (v.type = "风景名胜");
      //   });
      //   this.list = scenry;
      // }
      if (tab.index == 1) {
        let trafic = this.list.filter(v => {
          return (v.type = "交通设施服务");
        });
        this.list= trafic ;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.info-row {
  margin: 40px 0;
}
.map-view {
  display: flex;
  flex: 1;
  height: 360px;
  .map-box {
    width: 65%;
    height: 100%;
  }
  .poi-list {
    padding-left: 20px;
    width: 35%;
    /deep/.el-tabs--border-card > .el-tabs__content {
      padding: 10px;
      padding-right: 0px;
    }
    .poi-list-ol {
      height: 300px;
      overflow: auto;
      font-size: 14px;
      color: #666;
      /deep/.amap_lib_placeSearch {
        border: 0;
        /deep/.amap_lib_placeSearch_page {
          background: #fff;
        }
        /deep/.pageLink {
          border-radius: 20%;
        }
      }
    }
    ul li {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>
