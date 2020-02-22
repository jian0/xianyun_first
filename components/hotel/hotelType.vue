<template>
  <div class="hoteltype">
    <!-- 价格、类型 -->
    <div class="type">
      <el-row>
        <el-col :span="5" class="price">
          <el-row type="flex" justify="space-between">
            <el-col :span="16">价格</el-col>
            <el-col :span="8">0-4000</el-col>
          </el-row>
          <el-row>
            <!-- 没有v-model -->
            <el-slider input-size='small' v-model="money" :max="4000"></el-slider>
          </el-row>
        </el-col>
        <!-- level -->
        <el-col :span="5" class="level">
          <el-row type="flex" justify="center">住宿等级</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-dropdown-item v-for="(e,i) in levels" :key="i"><el-checkbox style="width:150px"
                    >{{e.name}}</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="5" class="leixing">
          <el-row type="flex" justify="center">住宿类型</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"><!--下拉 -->
                <el-dropdown-item v-for="(e,i) in types" :key="i"><el-checkbox style="width:150px"
                    >{{e.name}}</el-checkbox
                  ></el-dropdown-item
                >
                
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="5" class="sheshi">
          <el-row type="flex" justify="center">酒店设施</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-dropdown-item v-for="(e,i) in assets" :key="i"><el-checkbox style="width:150px"
                    >{{e.name}}</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="4" class="pinpai">
          <el-row type="flex" justify="center">酒店品牌</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                style="overflow:auto;height:200px"
                ><!--下拉 -->
                <el-dropdown-item v-for="(e,i) in brands" :key="i"><el-checkbox style="width:120px"
                    >{{e.name}}</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      levels:[],
      types:[],
      assets:[],
      brands:[],
      money:2000,
    }
  },
  mounted () {
    this.$axios({
      url:'/hotels/options',
    }).then(res=>{
      // console.log(res);
      this.levels=res.data.data.levels;
      this.types=res.data.data.types;
      this.assets=res.data.data.assets;
      this.brands=res.data.data.brands;
    })
  }
};
</script>

<style lang="less" scoped>
.type {
  width: 100%;
  height: 80px;
  padding: 4px 0;
  box-sizing: border-box;
  margin: 25px 0;
  border: 1px solid #ccc;
  > .el-row {
    height: 100%;
    .price {
      padding: 10px 15px;
      box-sizing: border-box;
    }
    .level,
    .leixing,
    .sheshi,
    .pinpai {
      padding: 5px 15px;
      box-sizing: border-box;
      border-left: 1px solid #ccc;
      height: 100%;
    }
  }
}
</style>
