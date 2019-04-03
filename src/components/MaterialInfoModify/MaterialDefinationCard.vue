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
      <el-table-column prop="materialCode" label="物料编码" min-width="250">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.materialCode" disabled></el-input>
        </template>
      </el-table-column>

      <!--第二列-->
      <el-table-column prop="materialName" label="物料名称" min-width="150">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.materialName" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!--第三列-->
      <el-table-column prop="oldMaterialName" label="旧物料名称" min-width="150">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.oldMaterialName" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!--第四列-->
      <el-table-column prop="barCode" label="条形码" min-width="150">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.barCode" :disabled="false"></el-input>
        </template>
      </el-table-column>

      <!-- 规格信息 -->
      <el-table-column
        min-width="150"
        v-for="col in materialInfoColumns"
        :prop="col.prop" :label="col.label" :key="col.label">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row[col.prop]"></el-input>
        </template>
      </el-table-column>

      <!--操作栏列-->
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleAdd" type="text" size="small">添加</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
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
import CommonApi from "@/api/commonApis";
export default {
  name: "MaterialDefinationCard",
  data() {
    return {
    };
  },
  methods: {
    handleAdd() {
      var that = this;
      var param = {
        materialCode: '',
        materialName: '',
        oldMaterialName: '',
        barCode: '',
      };
      var materialInfoColumns = that.$store.getters['materialinfo/materialInfoColumns'];
      for (let idx in materialInfoColumns) {
        param[materialInfoColumns[idx]['prop']] = '';
      }
      param["idx"] = that.$store.getters['materialinfo/materialInfos'].length;
      var materialInfo = Object.assign([], that.$store.getters['materialinfo/materialInfos']);
      // 更新物料编码
      param['materialCode'] = 'M' + 
                              that.$store.getters['baseinfo/baseInfos'].spuCode + 
                              '-' + 
                              that.$store.getters['baseinfo/baseInfos'].materialCatId +
                              '-' + 
                              CommonApi.addPreZero(param['idx'] + 1, 6);
      materialInfo.push(param);
      that.$store.commit('materialinfo/material-info', materialInfo);
    },
    handleDelete(row) {
      var materialInfo = Object.assign([], this.$store.getters['materialinfo/materialInfos']);
      var targetInfo = [];
      for (let idx in materialInfo) {
        if (materialInfo[idx]["idx"] != row.idx) {
          targetInfo.push(materialInfo[idx]);
        }
      }
      let i = 0;
      for (let idx in targetInfo) {
        targetInfo[idx]["idx"] = i;
        i++;
      }
      this.$store.commit('materialinfo/material-info', targetInfo);
    }
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
