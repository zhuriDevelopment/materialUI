<template>
  <!-- 搜索结果数量统计与跳页卡 -->
  <el-card class="box-card">
    <div class="block">
      <!-- 数量统计 -->
      <span style="margin-left: 60%">
        共搜索出{{pages}}条结果
      </span>

      <!-- 页跳转组件 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    width: 100%;
    min-width: 50%;
    margin: 1% 1%;
    .block{
      display: flex; 
      flex-direction: row; 
      padding: 0 15px; 
      align-items: center;
    }
  } 
</style>

<script>
  export default {
    name:"MaterialInfoSearchBottomCard"
  }
</script>
