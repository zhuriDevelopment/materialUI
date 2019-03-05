<template>
  <!-- 搜索信息展示栏卡 -->
  <el-card class="box-card">
  <!-- 取消选择按钮 -->
    <div style="margin-bottom: 20px">
      <el-button type="primary" @click="toggleSelection()">取消选择</el-button>
      <el-button type="danger" icon="el-icon-delete">删除所选</el-button>
    </div>

    <!-- 信息展示的表格 -->
    <!-- //? :row-class-name="tableRowClassName" -->
    <el-table
      border
      ref="multipleTable"
      :data="displayMaterialInfo"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">

      <!-- 各列 -->
      <el-table-column
        type="selection"
        width="55"
        fixed>
      </el-table-column>

      <el-table-column
        prop="spuCode"
        label="SPU编码"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="spuName"
        label="SPU名称"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="materialCatId"
        label="物料分类"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="designCode"
        label="设计图号"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="designVersion"
        label="设计版本"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="source"
        label="来源"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="defaultUnitId"
        label="默认计量单位"
        min-width="120">
      </el-table-column>

      <el-table-column
        prop="description"
        label="描述"
        min-width="240">
      </el-table-column>

      <el-table-column
        prop="note"
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
        currentRow: null,
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
      handleSelectionChange (selection) {},
    },

    computed:{
      /* 表格展示信息变量 */
      displayMaterialInfo(){
        return this.$store.getters['infolist/displayMaterialInfo'];
      }
    }
  }
</script>
