<template>
  <div class="container">
    <div class="info-row" v-for="(item,index) in roomInfo" :key="index">
      <el-row type="flex" class="assets-info">
        <el-col :span="4" class="assets-info-hd">
          <span>基本信息</span>
        </el-col>
        <el-col :span="20" class="base-info">
          <el-row type="flex">
            <el-col :span="24">入住时间: 14:00之后</el-col>
            <el-col :span="24">离店时间: 12:00之前</el-col>
            <el-col :span="24">{{item.creation_time}} / {{item.renovat_time}}</el-col>
            <el-col :span="24">酒店规模: {{item.roomCount}}间客房</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" class="assets-info">
        <el-col :span="4" class="assets-info-hd">主要设施</el-col>
        <el-col :span="20" class="base-info">
          <span type="info" class="assets-info-item" v-for="(item1,index) in item.hotelassets"
          :key="index">{{item1.name}}</span>
        </el-col>
      </el-row>
      <el-row type="flex" class="assets-info">
        <el-col :span="4" class="assets-info-hd">停车服务</el-col>
        <el-col :span="20" class="base-info">
          <span></span>
        </el-col>
      </el-row>
      <el-row type="flex" class="assets-info">
        <el-col :span="4" class="assets-info-hd">品牌信息</el-col>
        <el-col :span="20" class="base-info">{{item.hotelbrand.name}}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props:['roomInfo'],
data(){return{

}},
   mounted(){
    this.$axios({
      method:'get',
      url:'/hotels/options'
    }).then(res=>{
      // console.log(res)
    })
    //  console.log(this.roomInfo)
  }


};
</script>

<style lang='less' scoped>
.container {
  .info-row {
    margin: 40px 0;
    .assets-info {
      border-bottom: 1px solid #eee;
      padding: 20px 10px;
      font-size: 14px;
      .base-info {
        color: #666;
        .assets-info-item {
          border: 1px solid #eee;
          padding: 4px 10px;
          margin-right: 10px;
          border-radius: 4px;
          background-color: #eee;
          color: #666;
        }
      }
    }
  }
}
</style>