<template>
  <div class="main">
    <el-row type="flex" class="row-bg" justify="space-between">
      <!-- 左侧边导航栏 -->
     <el-col :span="6"><div class="navs">
       <!-- 上方菜单栏 -->
        <PostMenu> </PostMenu>
       <!-- 推荐城市 -->
       <div class="goodCity">
         <p>推荐城市</p>
          <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt="">
       </div>
    </div></el-col>
      <!-- 右侧文章列表 -->
   <el-col :span="17"><div class="article">
      <!-- 右侧输入框 -->
     <PostInput></PostInput>
     
      <!-- 右侧新闻模块 -->
      <PostNews></PostNews>
    </div></el-col>
  
    </el-row>



  </div>
</template>

<script>
import PostMenu from '@/components/post/postMenu'
import PostInput from '@/components/post/postInput'
import PostNews from '@/components/post/postNews'
export default {
  components: {
   PostMenu,PostInput,PostNews
  },
  mounted(){
   
  }
}
</script>

<style scoped lang='less'>
.main {
  width: 1000px;
  margin: 20px auto;
  // 左侧布局
  .navs {
  //height: 500px;
  width: 100%;
  .goodCity {
    margin-top: 20px;
   p{
     font-size: 15px;
      height: 30px;
     line-height: 30px;
     border-bottom: 1px solid #ccc;
     margin-bottom: 10px;
     }
    img { 
      width: 100%;
    }  
  } 
}
// 右侧布局
.article {
  height: 1000px;
  width: 100%;
}
}


</style>