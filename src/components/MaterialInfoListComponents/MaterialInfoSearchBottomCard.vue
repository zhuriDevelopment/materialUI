<template>
  <!-- 搜索结果数量统计与跳页卡 -->
  <el-card class="box-card">
    <div class="block">
      <!-- 页跳转组件 -->
      <el-pagination
        background
        layout="prev, pager, next, sizes, total, jumper"
        :total="resultSum"
        :page-sizes="[10,20,50]"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        @size-change="handleSizeChange">
      </el-pagination>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    margin-top: 20px;
    margin-left: 20px;
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
      return {}
    },
    methods: {
      handleSizeChange (val) {
        this.pageSize = val;
        this.$store.dispatch('infolist/setBaseInfoWithPages', {
          pageSize: this.pageSize,
          pageNum: this.pageNum,
        });
      },
      handleCurrentChange (val) {
        this.currentPage = val;
        this.$store.dispatch('infolist/setBaseInfoWithPages', {
          pageSize: this.pageSize,
          pageNum: this.pageNum,
        });
      }
    },
    computed: {
      resultSum() {
        return this.$store.getters['infolist/baseInfoDataAll'].length;
      },
      pageSize: {
        get() {
          return this.$store.getters['infolist/pageSize'];
        },
        set(value) {
          this.$store.commit('infolist/list-ps', value);
        }
      },
      pageNum: {
        get() {
          return this.$store.getters['infolist/pageNum'];
        },
        set(value) {
          this.$store.commit('infolist/list-pn', value);
        }
      }
    }
  }
</script>
