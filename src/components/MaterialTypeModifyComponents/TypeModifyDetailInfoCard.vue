<template>
<!-- 类型修改中的详细信息展示卡 -->
    <div id="app">
        <el-tabs class="radio-group" v-model="radio" type="card">
            <!-- 物料属性选择按钮 -->
            <el-tab-pane class="radio-group-member" label="物料属性定义" name="propertyDefination">
                <div class="detailInfoEmbededCard" >
                    <TypeModifyPropertyDefinationCard>
                    </TypeModifyPropertyDefinationCard>
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
  </div>
</template>

<style lang="less" scoped>
    .radio-group{
        .radio-group-member{
            font-size: large;
            margin: 0 0 0 0;
        }
    }
    .detailInfoEmbededCard{
        width: 100%;
    }
</style>


<script>
    /* 物料属性定义tag */
    import TypeModifyPropertyDefinationCard from '@/components/MaterialTypeModifyComponents/TypeModifyPropertyDefinationCard';
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
        name:"TypeModifyDetailInfoCard",

        /* 引入的组件 */
        components:{
            TypeModifyPropertyDefinationCard,
            MaterialPurchaseAndStorePropCard,
            MaterialPlanPropCard,
            MaterialSalePropCard,
            MaterialQualityCard,
            MaterialFinanceCard
        },
        
        /* data */
        data(){
            return {
                radio: 'propertyDefination'
            };
        }
    }

</script>
