<template>
	<div class="body">
		<el-card class="box-card">
			<el-row :gutter="10">
				  <!-- tabs组件 -->
				  <el-tabs class="radio-group" v-model="radio" type="card">
							<!-- 物料基本信息选择按钮 -->
							<el-tab-pane class="radio-group-member" label="物料基本信息" name="baseInfo">
								<div class="detailInfoEmbededCard" >
									<MaterialBaseInfoCard>
									</MaterialBaseInfoCard>
								</div></el-tab-pane>

							<!-- 物料定义选择按钮 -->
							<el-tab-pane class="radio-group-member" label="物料定义" name="defination">
								<div class="detailInfoEmbededCard" >
									<MaterialDefinationCard>
									</MaterialDefinationCard>
								</div></el-tab-pane>  

							<!-- SKU定义选择按钮 -->
							<el-tab-pane class="radio-group-member" label="SKU定义" name="SKUDefination">
								<div class="detailInfoEmbededCard" >
									<MaterialSKUDefinationCard>
									</MaterialSKUDefinationCard>
								</div>
							</el-tab-pane>

							<!-- 附件管理选择按钮 -->
							<el-tab-pane class="radio-group-member" label="附件管理" name="attachedManag">
								<div class="detailInfoEmbededCard" >
									<MaterialAttachedManagementCard>
									</MaterialAttachedManagementCard>
								</div></el-tab-pane>

							<!-- 采购和库存属性选择按钮 -->
							<el-tab-pane class="radio-group-member" label="采购和库存属性" name="pruchaseAndStore">
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
							<el-tab-pane class="radio-group-member" label="销售类属性" name="sale">
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
							<el-tab-pane class="radio-group-member" label="财务类属性" name="fianance">
								<div class="detailInfoEmbededCard" >
									<MaterialFinanceCard>
									</MaterialFinanceCard>
								</div>
							</el-tab-pane>
					</el-tabs>
			</el-row>
		</el-card>
	</div>
</template>

<style lang="less" scoped>
  .body{
    margin:0% 2%;
    .box-card {
      width: 100%;
      .radio-group{
        .radio-group-member{
          font-size: 18px;
          min-width: 90px;
          margin: 0 0 0 0;
        }
      }
    }
  }
</style>


<script>
  /* 各子部件导入 */
  import MaterialBaseInfoCard from '@/components/MaterialInfoModify/MaterialBaseInfoCard';
  import MaterialDefinationCard from '@/components/MaterialInfoModify/MaterialDefinationCard';
  import MaterialSKUDefinationCard from '@/components/MaterialInfoModify/MaterialSKUDefinationCard';
  import MaterialAttachedManagementCard from '@/components/MaterialInfoModify/MaterialAttachedManagementCard';
  import MaterialPurchaseAndStorePropCard from '@/components/MaterialInfoModify/MaterialPurchaseAndStorePropCard';
  import MaterialPlanPropCard from '@/components/MaterialInfoModify/MaterialPlanPropCard';
  import MaterialSalePropCard from '@/components/MaterialInfoModify/MaterialSalePropCard';
  import MaterialQualityCard from '@/components/MaterialInfoModify/MaterialQualityCard';
  import MaterialFinanceCard from '@/components/MaterialInfoModify/MaterialFinanceCard';

  export default {
    name: "MaterialInfoModify",
    components: {
      MaterialBaseInfoCard,
        MaterialDefinationCard,
        MaterialSKUDefinationCard,
        MaterialAttachedManagementCard,
        MaterialPurchaseAndStorePropCard,
        MaterialPlanPropCard,
        MaterialSalePropCard,
        MaterialQualityCard,
        MaterialFinanceCard
      },
    data(){
      return{
        radio: 'baseInfo',
      }
    },
  }
</script>