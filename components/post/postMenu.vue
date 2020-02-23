<template>
  <div class="cent" @mouseleave="handleOut">
    <!-- 左侧菜单栏 -->
     <div  class="menu">
      <p class="left" v-for="(item,index) in menuList" :key="index" @mouseenter="handleEnter(index)">{{item.type}} <i class="el-icon-arrow-right" ></i></p>
     </div>
    <!-- 右侧详情展示 -->
    <div class="right" v-if ="current !== false" >
     <ul>
       <li v-for="(value,index) in menuList[current].children" :key="index">
         <span class="num">{{index + 1}}</span>
         <span class='city' @click='giveCityId(value)'>{{value.city}}</span>
         <i class="desc">{{value.desc}}</i>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
 data () {
     return {
        //  储存菜单数据
        menuList : [],
        // 记录储存当前id
        current : false,
        // 储存点击的城市id
        cId : null
     }
 },
  mounted(){
      this.$axios({
          url : '/posts/cities'
      }).then(res =>{
        this.menuList = res.data.data
        // console.log(this.menuList)
      })
  },
  methods : {
    // 鼠标移入事件
     handleEnter(index){
       this.current = index;
     },
    //  鼠标移出事件
     handleOut(){
     this.current = false;
     },
    // 点击菜单栏城市获取城市id
     giveCityId(data){
      //  console.log(data.city)
      this.$axios({
        url : '/cities',
        params : {
          name : data.city
        }
      }).then(res =>{
        this.cId = res.data.data[0].id;
        this.$emit('giveId',this.cId);
      })
     }
  }
}
</script>

<style scoped lang='less'>
 .cent {
    margin: 0;
    padding: 0;
   position: relative;
    .menu {
    border-bottom: 1px solid #ccc;
    width: 250px;
    }
     .left {
       position: relative;
       z-index: 9999;
       padding: 0 15px;
       font-size: 15px;
       height: 40px;
       line-height: 40px;
       border: 1px solid #ccc;
       border-bottom: none;
       cursor: pointer;
       &:hover {
         color: orange;
         border-right: 1px solid #fff;
       }
       >i {
         margin-top: 10px;
         float: right;
     }
     }
     .right {
     background-color: #fff;
     border: 1px solid #ccc;
     width: 320px;
     height: 200px;
     position: absolute;
     z-index: 9;
     top: 0;
     left : 249.55px;
     li {
         height: 40px;
         line-height: 40px;
         padding-left: 6px;
         .num {
           color: orange;
           font-size: 20px;
           font-style: italic;
           margin-right: 8px;
         }
         .city {
           font-size: 16px;
           color: orange;
           margin-right: 5px;
           &:hover{
            text-decoration: underline;
            cursor: pointer;
           }
         }
         .desc {
           font-size: 15px;
           color: #666;
            &:hover{
            cursor: pointer;
            text-decoration: underline;
           }
         }
     }
     }
 }
</style>