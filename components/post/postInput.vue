<template>
  <div class="input">
    <el-input placeholder="请输入想去的地方，比如：'广州'" v-model="input"  @change="handleEnter"></el-input>
    <i class="el-icon-search search"></i>

    <span class="referr">
      推荐 &nbsp;
        <i v-for="(item,index) in goodCities" :key="index" @click="handleClick(item)">
          {{item.text}}
        </i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入的数据
      input: "",
      // 储存城市id
      cityId: 0,
      // 储存文章数据列表
      textList: [],
    //  储存快速查询
       goodCities : [
         {
           text : '广州',
           id: 197
         },
          {
           text : '北京',
           id: 1
         },
          {
           text : '上海',
           id: 73
         }
       ]
    };
  },
  mounted() {
    
  },
  methods: {
    // 输入框change事件搜索文章列表
    handleEnter() {
     if (!this.input) return;
      this.$axios({
        url: "/cities",
        params: {
          name: this.input
        }
      }).then(res => {
        // 将数据框的城市id存起来
        this.cityId = res.data.data[0].id;
        // 将城市id传给父元素
        this.$emit('getCityId',this.cityId);
      });
    },
    // 点击快捷方式查询
    handleClick(item){
    // console.log(item.id)
    this.cityId = item.id;
    this.$emit('getCityId',this.cityId);
    }
  }
};
</script>

<style scoped lang='less'>
.el-input {
  height: 40px;
  line-height: 40px;
  border: 3px solid orange;
}
.el-input__inner {
  width: 100%;
  border-left: none;
}
.el-icon-search {
  font-size: 40px;
  height: 40px;
}
// 推荐
/deep/.referr {
  display: inline-block;
  margin: 10px 0 0 0;
  color: #666;
  font-size: 12px;
  /deep/i:hover{
    position: relative;
    z-index: 99999;
    color: orange;
    cursor: pointer;
  }
}
.search {
  position: absolute;
  top: 10px;
  right: 0;
  color: orange;
  font-size: 30px;
  font-weight: 700;
}
</style>