<template>
  <div class="crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right" v-for="(item,index) in data" :key="index">
      <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item >
        <a href="/">{{item.real_city}}酒店</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style>
</style>