<template>
  <div class="menu">
     <div v-for="(item,index) in menuList" :key="index">
      <p class="left" >{{item.type}} <i class="el-icon-arrow-right"></i></p>
      <!-- <div v-for='(value,index1) in item.children' :key="index1" class="show">
         <p ><i>{{index1 + 1}}</i><span>{{value.city}}</span> {{value.desc}}</p>
      </div> -->
      <div class="show"></div>
     </div>
    
  </div>
</template>

<script>
export default {
 data () {
     return {
        //  储存菜单数据
        menuList : [],
        // 控制弹框的显示与隐藏
        current : false
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
      handle(index){
          let show = document.querySelector('.show');
          show.style.display = 'block';
      },
      handleHide(){
          let show = document.querySelector('.show');
          show.style.display = 'none';
      }
  }
}
</script>

<style scoped lang='less'>
 .menu {
     position: relative;
     box-sizing: border-box;
     border: 1px solid #ccc;
     border-bottom: 0;
    // width: 100%;
     .left {
       padding: 0 15px;
       font-size: 15px;
       height: 40px;
       line-height: 40px;
       border-bottom: 1px solid #ccc;
       cursor: pointer;
       &:hover {
         color: orange;
         border-right: none;
       }
       >i {
         margin-top: 10px;
         float: right;
     }
     }
     .show {
     display: none;
     background-color: #ccc;
     width: 300px;
     height: 200px;
     position: absolute;
     top: 0;
     right: -300px;
     p {
         height: 40px;
     }
     }
 }
</style>