<template>
  <!-- 搜索信息展示栏卡 -->
  <el-card class="box-card">
    <!-- 删除选中按钮 -->
    <div style="margin-bottom: 20px">
      <el-button type="danger" icon="el-icon-delete">删除所选</el-button>
    </div>

    <!-- 信息展示的表格 -->
    <el-table
      border=true
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      :row-class-name="tableRowClassName" 
      @selection-change="handleSelectionChange">

      <!-- 各列 -->
      <el-table-column
        type="selection"
        width="55"
        fixed>
      </el-table-column>

      <el-table-column
        prop="name"
        label="SPU编码"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="SPU名称"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="物料分类"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="设计图号"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="设计版本"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="来源"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="默认计量单位"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="name"
        label="描述"
        min-width="240">
      </el-table-column>

      <el-table-column
        prop="name"
        label="备注"
        min-width="240">
      </el-table-column>

      <el-table-column
        label="操作"
        min-width="150"
        show-overflow-tooltip
        fixed="right">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 取消选择按钮 -->
    <div style="margin-top: 20px">
      <el-button type="info" @click="toggleSelection()">取消选择</el-button>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
  .box-card {
    width: 100%;
    min-width: 50%;
    margin: 1% 1%;
  } 
</style>

<script>
  export default {
    name:"MaterialInfoSearchDisplayCard",
    data(){
      return {
        /* 测试数据 */
        tableData3: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
          }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
          }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
          }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },

    methods: {
      /* 取消选择按钮的响应函数 */
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    }
  }
</script>
