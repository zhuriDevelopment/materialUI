<template>
  <div class="body">
    <el-card class="box-card">
      <!-- 功能按钮 -->
      <el-row :gutter="10" style="display: flex; flex-direction: row-reverse">
        <el-button-group>
          <el-button type="primary">提交当前</el-button>
          <el-button type="primary">提交所有</el-button>
        </el-button-group>
      </el-row>
    </el-card>
    <!-- 物料信息数据 -->
    <el-card class="box-card">
      <el-row :gutter="10">
        <!-- tabs组件 -->
        <el-tabs class="radio-group" v-model="radio" type="card">
          <!-- 物料基本信息选择按钮 -->
          <el-tab-pane class="radio-group-member" label="物料基本信息" name="baseInfo">
            <div class="detailInfoEmbededCard">
              <MaterialBaseInfoCard></MaterialBaseInfoCard>
            </div>
          </el-tab-pane>

          <!-- 物料定义选择按钮 -->
          <el-tab-pane class="radio-group-member" label="物料定义" name="defination">
            <div class="detailInfoEmbededCard">
              <MaterialDefinationCard></MaterialDefinationCard>
            </div>
          </el-tab-pane>

          <!-- SKU定义选择按钮 -->
          <el-tab-pane class="radio-group-member" label="SKU定义" name="SKUDefination">
            <div class="detailInfoEmbededCard">
              <MaterialSKUDefinationCard></MaterialSKUDefinationCard>
            </div>
          </el-tab-pane>

          <!-- 附件管理选择按钮 -->
          <el-tab-pane class="radio-group-member" label="附件管理" name="attachedManag">
            <div class="detailInfoEmbededCard">
              <MaterialAttachedManagementCard></MaterialAttachedManagementCard>
            </div>
          </el-tab-pane>

          <!-- 采购和库存属性选择按钮 -->
          <el-tab-pane class="radio-group-member" label="采购和库存属性" name="pruchaseAndStore">
            <div class="detailInfoEmbededCard">
              <MaterialPurchaseAndStorePropCard></MaterialPurchaseAndStorePropCard>
            </div>
          </el-tab-pane>

          <!-- 计划类属性选择按钮 -->
          <el-tab-pane class="radio-group-member" label="计划类属性" name="plan">
            <div class="detailInfoEmbededCard">
              <MaterialPlanPropCard></MaterialPlanPropCard>
            </div>
          </el-tab-pane>

          <!-- 销售类属性选择按钮 -->
          <el-tab-pane class="radio-group-member" label="销售类属性" name="sale">
            <div class="detailInfoEmbededCard">
              <MaterialSalePropCard></MaterialSalePropCard>
            </div>
          </el-tab-pane>

          <!-- 质量类属性选择按钮 -->
          <el-tab-pane class="radio-group-member" label="质量类属性" name="quality">
            <div class="detailInfoEmbededCard">
              <MaterialQualityCard></MaterialQualityCard>
            </div>
          </el-tab-pane>

          <!-- 财务类属性选择按钮 -->
          <el-tab-pane class="radio-group-member" label="财务类属性" name="fianance">
            <div class="detailInfoEmbededCard">
              <MaterialFinanceCard></MaterialFinanceCard>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.body {
  margin: 0% 2%;
  .box-card {
    width: 100%;
    .radio-group {
      .radio-group-member {
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
import MaterialBaseInfoCard from "@/components/MaterialInfoModify/MaterialBaseInfoCard";
import MaterialDefinationCard from "@/components/MaterialInfoModify/MaterialDefinationCard";
import MaterialSKUDefinationCard from "@/components/MaterialInfoModify/MaterialSKUDefinationCard";
import MaterialAttachedManagementCard from "@/components/MaterialInfoModify/MaterialAttachedManagementCard";
import MaterialPurchaseAndStorePropCard from "@/components/MaterialInfoModify/MaterialPurchaseAndStorePropCard";
import MaterialPlanPropCard from "@/components/MaterialInfoModify/MaterialPlanPropCard";
import MaterialSalePropCard from "@/components/MaterialInfoModify/MaterialSalePropCard";
import MaterialQualityCard from "@/components/MaterialInfoModify/MaterialQualityCard";
import MaterialFinanceCard from "@/components/MaterialInfoModify/MaterialFinanceCard";
import CommonApi from "@/api/commonApis";
import InfoModify from "@/api/MaterialInfoModifyAPIs/infomodify";

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
  data() {
    return {
      radio: "baseInfo"
    };
  },
  mounted() {
    var that = this;
    console.log(`store`, that.$store);
    that.$store.dispatch('clearAllInfoInModify');
    that.loadAllOptions();
    that.loadAllTabDatas();
  },
  methods: {
    loadAllUnitOptions() {
      var that = this;
      that.$axios
        .get(`${window.$config.HOST}/materialmanagement/getAllUnitInfos`)
        .then(response => {
          that.$store.commit('baseinfo/unit-opt-arr', response.data);
        })
        .catch(error => {
          CommonApi.handleError(error, that, "在获取所有物料计量单位信息的时候发生错误，错误为：");
        })
    },
    loadAllCatOptions() {
      var that = this;
      that.$axios
        .get(`${window.$config.HOST}/materialmanagement/getAllMaterialCategoryInfos`)
        .then(response => {
          that.$store.commit('baseinfo/cat-opt-arr', response.data);
        })
        .catch(error => {
          CommonApi.handleError(error, that, "在获取所有物料分类信息的时候发生错误，错误为：");
        })
    },
    loadAllOptions() {
      var that = this;
      that.loadAllUnitOptions();
      that.loadAllCatOptions();
    },
    loadAllTabDatas() {
      var that = this;
      that.$axios
        .get(`${window.$config.HOST}/materialmanagement/getMaterialInfo`,
          {
            params: {
              spuCode: that.$store.getters['infolist/curBaseInfo'].spuCode,
              typeArr: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12],
            },
            paramsSerializer: CommonApi.paramsSerializer
          }
        )
        .then(response => {
          console.log(`response`, response);
          var respData = response.data;
          if (respData.errCode == 1) {
            // 成功
            InfoModify.handleAllMaterialInfo(respData.result, this.$store);
          } else {
            let msg = '在加载物料信息时出现错误！';
            if (respData.errCode == 0) {
              msg = '传上来的类参数为空！';
            }
            that.$message({
              message: msg,
              showClose: true,
              type: 'error'
            });
          }
        })
        .catch(error => {
          CommonApi.handleError(error, that, '在加载物料信息时出现错误，错误为：');
        });
    }
  },
};
</script>
