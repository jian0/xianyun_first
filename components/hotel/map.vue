<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
  mounted() {
     var url = 'https://webapi.amap.com/maps?v=1.4.15&key=bc7c9d8e6c159ef8d8b2fff39da2110a&callback=onLoad';
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    window.onLoad = function(){
      var map = new AMap.Map("container");
    };
  }
};
</script>

<style lang='less' scoped>
#container {
  margin-top: 50px;
  width: 650px;
  height: 360px;
}
</style>