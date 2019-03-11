<template>
  <!-- SKU定义表格 -->
  <!--SKU定义的展示编辑表格-->
  <el-card class="box-card">
    <el-table
      border
      ref="singleTable"
      :data="skuInfos"
      highlight-current-row
      stripe
      style="width: 100%"
    >
      <!--索引列-->
      <el-table-column label="序号" type="index" width="50"></el-table-column>

      <!--第一列-->
      <el-table-column prop="skuCode" label="SKU编码" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.skuCode"></el-input>
        </template>
      </el-table-column>

      <!--第二列-->
      <el-table-column prop="skuName" label="SKU名称" min-width="200">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.skuName"></el-input>
        </template>
      </el-table-column>

      <!--第三列-->
      <el-table-column prop="materialCode" label="物料编码" min-width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.materialCode" placeholder="请选择">
            <el-option
              v-for="item in materialCodeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

      <!--第四列-->
      <el-table-column prop="unitId" label="计量单位" min-width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.unitId" placeholder="请选择">
            <el-option
              v-for="item in unitOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

      <!--第五列-->
      <el-table-column prop="barCode" label="条形码" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.barCode"></el-input>
        </template>
      </el-table-column>

      <!--第六列-->
      <el-table-column prop="purchasePrice" label="采购价格" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.purchasePrice"></el-input>
        </template>
      </el-table-column>

      <!--第七列-->
      <el-table-column prop="sellingPrice" label="销售价格" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.sellingPrice"></el-input>
        </template>
        <a href></a>
      </el-table-column>

      <!--第七列-->
      <el-table-column prop="description" label="备注" min-width="120">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.description"></el-input>
        </template>
        <a href></a>
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

<style lang="less" scoped>
.box-card {
  min-width: 900px;
}
</style>


<script>
export default {
  name: "MaterialSKUDefinationCard",
  data() {
    return {
    };
  },
  methods: {
    handleAdd() {
      var skuInfos = Object.assign([], this.$store.getters['skuinfo/skuInfos']);
      var param = {
        skuCode: '',
        skuName: '',
        materialCode: '',
        unitId: '',
        barCode: '',
        purchasePrice: '',
        sellingPrice: '',
        description: '',
        idx: skuInfos.length,
      }
      skuInfos.push(param);
      this.$store.commit('skuinfo/sku-info', skuInfos);
    },
    handleDelete(row) {
      var skuInfos = Object.assign([], this.$store.getters['skuinfo/skuInfos']);
      var targetInfo = [];
      for (let idx in skuInfos) {
        if (skuInfos[idx]["idx"] != row.idx) {
          targetInfo.push(skuInfos[idx]);
        }
      }
      let i = 0;
      for (let idx in targetInfo) {
        targetInfo[idx]["idx"] = i;
        i++;
      }
      this.$store.commit('skuinfo/sku-info', targetInfo);
    },
  },
  computed: {
    skuInfos: {
      get() {
        return this.$store.getters['skuinfo/skuInfos'];
      },
      set(value) {
        this.$store.commit('skuinfo/sku-info');
      }
    },
    // 物料编码选项
    materialCodeOptions() {
      return this.$store.getters['materialinfo/materialCodeOptions'];
    },
    // 计量单位选项
    unitOptions() {
      return this.$store.getters['baseinfo/unitOptions'];
    },
  },
};
</script>
