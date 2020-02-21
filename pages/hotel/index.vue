<template>
  <div class="hotel">
    <div class="main">
      <!-- destoryed时候要把数据清空掉 -->
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-loading">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>广州市酒店预订</el-breadcrumb-item>
      </el-breadcrumb>

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
import SearchPrice from "@/components/hotel/searchPrice"
import AreaMap from "@/components/hotel/areaMap"
import HotelType from "@/components/hotel/hotelType"
import HotelShow from '@/components/hotel/hotelShow'
export default {
components:{
SearchPrice,AreaMap,HotelType,HotelShow
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
