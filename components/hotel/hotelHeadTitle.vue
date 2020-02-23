<template>
   <div class="hotel-head" >
     <div v-for="(item,index) in titleData" :key="index">
          <div class="main-title">
            <h4>{{item.name}}</h4>
          </div>
          <div class="en-title">
            <span>{{item.alias}}</span>
          </div>
          <div class="location">
            <i class="iconfont iconlocation"></i>
            <span>{{item.address}}</span>
          </div>
          </div>
        </div>
</template>

<script>
export default {
  props:['titleData']

}
</script>

<style lang='less' scoped>
.hotel-head {
  margin-top: 20px;
  font-weight: 300;
  .main-title h4 {
    font-weight: 400;
    font-size: 24px;
    color: #333;
    line-height: 30px;
  }
  .location span {
      font-size: 14px;
      color: #666
  }
}
</style>