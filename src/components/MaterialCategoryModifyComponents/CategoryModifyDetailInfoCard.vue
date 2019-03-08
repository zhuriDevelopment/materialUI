<template>
<!-- 类型修改中的详细信息展示卡 -->
  <div id="app">
    <el-tabs class="radio-group" v-model="curTab" type="card">
      <!-- 物料属性选择按钮 -->
      <el-tab-pane class="radio-group-member" label="物料属性定义" name="basePropDefs">
        <div class="detailInfoEmbededCard" >
          <CategoryModifyPropertyDefinationCard>
          </CategoryModifyPropertyDefinationCard>
        </div>
      </el-tab-pane>
      <!-- 采购和库存属性选择按钮 -->
      <el-tab-pane class="radio-group-member" label="采购和库存属性" name="purchaseAndStore">
        <div class="detailInfoEmbededCard" >
          <MaterialPurchaseAndStorePropCard>
          </MaterialPurchaseAndStorePropCard>
        </div>
      </el-tab-pane>
      <!-- 计划类属性选择按钮 -->
      <el-tab-pane class="radio-group-member" label="计划类属性" name="plan">
        <div class="detailInfoEmbededCard" >
          <MaterialPlanPropCard>
          </MaterialPlanPropCard>
        </div>
      </el-tab-pane>
      <!-- 销售类属性选择按钮 -->
      <el-tab-pane class="radio-group-member" label="销售类属性" name="sales">
        <div class="detailInfoEmbededCard" >
          <MaterialSalePropCard>
          </MaterialSalePropCard>
        </div>
      </el-tab-pane>
      <!-- 质量类属性选择按钮 -->
      <el-tab-pane class="radio-group-member" label="质量类属性" name="quality">
        <div class="detailInfoEmbededCard" >
          <MaterialQualityCard>
          </MaterialQualityCard>
        </div>
      </el-tab-pane>
      <!-- 财务类属性选择按钮 -->
      <el-tab-pane class="radio-group-member" label="财务类属性" name="finance">
        <div class="detailInfoEmbededCard" >
          <MaterialFinanceCard>
          </MaterialFinanceCard>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
  .radio-group{
    .radio-group-member{
      font-size: 18px;
      min-width: 90px;
      overflow: hidden;
      margin: 0 0 0 0;
    }
  }
  .detailInfoEmbededCard{
    width: 100%;
  }
</style>


<script>
  /* 物料属性定义tag */
  import CategoryModifyPropertyDefinationCard from '@/components/MaterialCategoryModifyComponents/CategoryModifyPropertyDefinationCard';
  /* 采购和库存属性tag */
  import MaterialPurchaseAndStorePropCard from '@/components/MaterialInfoModify/MaterialPurchaseAndStorePropCard';
  /* 计划类属性tag */
  import MaterialPlanPropCard from '@/components/MaterialInfoModify/MaterialPlanPropCard';
  /* 销售类属性tag */
  import MaterialSalePropCard from '@/components/MaterialInfoModify/MaterialSalePropCard';
  /* 质量类属性tag */
  import MaterialQualityCard from '@/components/MaterialInfoModify/MaterialQualityCard';
  /* 财务类属性tag */
  import MaterialFinanceCard from '@/components/MaterialInfoModify/MaterialFinanceCard';

  export default {
    /* 名字 */
    name:"CategoryModifyDetailInfoCard",

    /* 引入的组件 */
    components:{
      CategoryModifyPropertyDefinationCard,
      MaterialPurchaseAndStorePropCard,
      MaterialPlanPropCard,
      MaterialSalePropCard,
      MaterialQualityCard,
      MaterialFinanceCard
    },
    computed: {
      curTab: {
        get() {
          return this.$store.getters['categorymodify/curTab'];
        },
        set(value) {
          this.$store.commit('categorymodify/cat-cur-tab', value);
        }
      }
    }
  }
</script>
