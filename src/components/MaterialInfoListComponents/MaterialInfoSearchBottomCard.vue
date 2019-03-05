<template>
  <!-- 搜索结果数量统计与跳页卡 -->
  <el-card class="box-card">
    <div class="block">
      <!-- 页跳转组件 -->
      <el-pagination
        background
        layout="prev, pager, next, sizes, total, jumper"
        :total="resultSum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        @size-change="handleSizeChange">
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
      justify-content: flex-end;
    }
  } 
</style>

<script>
  export default {
    name:"MaterialInfoSearchBottomCard",
    data() {
      return {
        resultSum: 100,
      }
    },
    methods: {
      handleSizeChange (val) {
        this.pageSize = val;
      }
    },
    computed: {
      pageSize: {
        get () {
          return this.$store.pageSize;
        },
        set (value) {
          this.$store.commit('list-ps-update', value);
        }
      }
    }
  }
</script>
