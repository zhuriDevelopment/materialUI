<template>
  <!-- 物料定义卡 -->
  <!--物料定义的展示编辑表格-->
  <el-card class="box-card">
    <el-table
      border
      ref="singleTable"
      :data="materialInfos"
      highlight-current-row
      style="width: 100%"
      stripe
    >
      <!--索引列-->
      <el-table-column label="序号" type="index" width="50"></el-table-column>

      <!--第一列-->
      <el-table-column prop="materialCode" label="物料编码" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.materialCode" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!--第二列-->
      <el-table-column prop="materialName" label="物料名称" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.materialName" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!--第三列-->
      <el-table-column prop="oldMaterialName" label="旧物料名称" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.oldMaterialName" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!--第四列-->
      <el-table-column prop="barCode" label="条形码" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.barCode" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!-- 规格信息 -->
      <el-table-column
        min-width="120"
        v-for="col in materialInfoColumns"
        :prop="col.prop" :label="col.label" :key="col.label">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row[col.prop]"></el-input>
        </template>
      </el-table-column>

      <!--操作栏列-->
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style <style lang="less" scoped>
.box-card {
  min-width: 900px;
}
</style>

<script>
export default {
  name: "MaterialDefinationCard",
  data() {
    return {
    };
  },
  computed: {
    materialInfos: {
      get() {
        return this.$store.getters['materialinfo/materialInfos'];
      },
      set(value) {
        this.$store.commit('materialinfo/material-info');
      }
    },
    materialInfoColumns: {
      get() {
        return this.$store.getters['materialinfo/materialInfoColumns'];
      },
      set(value) {
        this.$store.commit('materialinfo/material-cols');
      }
    }
  }
};
</script>
