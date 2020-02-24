<template>
  <div class="hoteltype">
    <!-- 价格、类型 -->
    <div class="type">
      <el-row>
        <el-col :span="5" class="price">
          <el-row type="flex" justify="space-between">
            <el-col :span="16">价格</el-col>
            <el-col :span="8">0-{{money}}</el-col>
          </el-row>
          <el-row>
            <el-slider input-size='small' v-model="money" :max="4000" @change="choosePrice"></el-slider>
          </el-row>
        </el-col>
        <!-- level -->
        <el-col :span="5" class="level">
          <el-row type="flex" justify="center">住宿等级</el-row>
          <el-row style="margin-top:13px;">
            <el-dropdown style="width:100%;" @command="chooselevel" >
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-checkbox v-for="(e,i) in levels" :key="i" style="display:block;width:140px;margin-left:8px"><el-dropdown-item  :command='i+1' style="width:90px">{{e.name}}
                </el-dropdown-item
                ></el-checkbox>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="5" class="leixing">
          <el-row type="flex" justify="center">住宿类型</el-row>
          <el-row style="margin-top:13px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"><!--下拉 -->
                <el-checkbox v-for="(e,i) in types" :key="i" style="display:block;width:140px;margin-left:8px"><el-dropdown-item style="width:90px">{{e.name}}
                </el-dropdown-item
                ></el-checkbox>
                
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="5" class="sheshi">
          <el-row type="flex" justify="center">酒店设施</el-row>
          <el-row style="margin-top:13px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-checkbox v-for="(e,i) in assets" :key="i" style="display:block;width:140px;margin-left:8px"><el-dropdown-item style="width:90px">{{e.name}}
                </el-dropdown-item
                ></el-checkbox>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="4" class="pinpai">
          <el-row type="flex" justify="center">酒店品牌</el-row>
          <el-row style="margin-top:13px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  {{levels_value}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                style="overflow:auto;height:200px"
                ><!--下拉 -->
                <el-checkbox v-for="(e,i) in brands" :key="i" style="display:block;width:110px;margin-left:8px"><el-dropdown-item  style="width:70px">{{e.name}}
                </el-dropdown-item
                ></el-checkbox>
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
      money:4000,
      levels_num:'',
      levelschoose:[],
      levels_value:'不限'
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
  },
  methods: {
    choosePrice(value){
      // console.log(this.money)//一样的
      // console.log(value)
      //四个随便一个改变了都要触发请求而且要佩戴者id
      this.$axios({
        url:'/hotels',
        params:{
          city:this.$store.state.hotel.cityId,
          price_lt:value,
        }
      }).then(res=>{
        // console.log(res);
        //注意的是现在没有实现页面路由变化
        //文档中参数有问题，要和线上的对比一下
        console.log(res);
        this.$store.commit('hotel/setHotelList',res.data)
      })
    },
    //选择level
    chooselevel(value){
      // console.log(value);
      let suoyin =this.levelschoose.indexOf(value)
      if(suoyin==-1){
        this.levelschoose.push(value);
      }else {
        this.levelschoose.splice(suoyin,1)
      }
      console.log(this.levelschoose.length)
      if(this.levelschoose.length==1) {
        this.levels_value=value +' 星'
      }else{
        this.levels_value=`已选${this.levelschoose.length}项`
      }
    console.log(this.levelschoose)
    console.log(this.levels_value)
    }
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
.active{
  color: #409eff
}
</style>
