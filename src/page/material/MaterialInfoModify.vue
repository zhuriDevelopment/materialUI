<template>
  <div class="body">
    <el-card class="box-card">
      <!-- 功能按钮 -->
      <el-row :gutter="10" style="display: flex; flex-direction: row-reverse">
        <el-button-group>
          <el-button type="primary" @click="collectCurMaterialInfoAndSubmit">提交当前</el-button>
          <el-button type="primary" @click="collectAllMaterialInfoAndSubmit">提交所有</el-button>
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
          <el-tab-pane class="radio-group-member" label="采购和库存属性" name="purchaseAndStore">
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
          <el-tab-pane class="radio-group-member" label="财务类属性" name="finance">
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
  .box-card {
    // width: 100%;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 10px;
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
import CtrPropFunc from "@/api/ctrprop";

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
    // console.log(`store`, that.$store);
    that.$store.dispatch('clearAllInfoInModify');
    that.loadAllOptions();
    var curSpuCode = that.$store.getters['infolist/curBaseInfo'].spuCode;
    if (curSpuCode !== '') {
      that.loadAllTabDatas();
    }
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
    },
    // 收集当前物料信息的函数
    collectCurMaterialInfo  () {
      var that = this;
      var result = {};
      let ctrList = [];
      switch (that.radio) {
        case 'baseInfo':
          result['baseDatas'] = Object.assign({}, that.$store.getters['baseinfo/baseInfos']);
          // 单位信息
          result['unitDatas'] = {
            defaultUnitId: that.$store.getters['unit/defaultUnitId'],
            unitList: that.$store.getters['unit/unitLists'],
          };
          break;
        case 'defination':
          // 物料信息
          result['materialDatas'] = {
            materialList: InfoModify.collectMaterialInfos(that.$store),
          };
          // 规格信息
          result['formatDatas'] = {
            formatList: InfoModify.collectFormatInfos(that.$store),
          };
          break;
        case 'SKUDefination':
          var skuList = that.$store.getters['skuinfo/skuInfos'];
          skuList = Object.assign([], skuList).map(ele => {
            delete ele.idx;
          });
          result['skuDatas'] = {
            skuList: that.$store.getters['skuinfo/skuInfos']
          };
        case 'purchaseAndStore':
          result['ctrPropDatas'] = {};
          result['ctrPropDatas']['ctrPropList'] = [];
          ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
            that.$store.getters['purandstoreprop/purchaseAndStoreInfos'],
            5));
          result['ctrPropDatas']['ctrPropList'] = ctrList;
          break;
        case 'plan':
          result['ctrPropDatas'] = {};
          result['ctrPropDatas']['ctrPropList'] = [];
          ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
            that.$store.getters['planprop/planInfos'],
            6));
          result['ctrPropDatas']['ctrPropList'] = ctrList;
          break;
        case 'sale':
          result['ctrPropDatas'] = {};
          result['ctrPropDatas']['ctrPropList'] = [];
          ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
            that.$store.getters['salesprop/salesInfos'],
            7));
          result['ctrPropDatas']['ctrPropList'] = ctrList;
          break;
        case 'quality':
          result['ctrPropDatas'] = {};
          result['ctrPropDatas']['ctrPropList'] = [];
          ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
            that.$store.getters['qualityprop/qualifyInfos'],
            8));
          result['ctrPropDatas']['ctrPropList'] = ctrList;
          break;
        case 'finance':
          result['ctrPropDatas'] = {};
          result['ctrPropDatas']['ctrPropList'] = [];
          ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
            that.$store.getters['financeprop/financeInfos'],
            9));
          result['ctrPropDatas']['ctrPropList'] = ctrList;
          break;
        default:
          break;
      }
      if (that.$store.getters['infolist/curBaseInfo'].isNew === false) {
        result['spuCode'] = that.$store.getters['infolist/curBaseInfo'].spuCode;
      } else {
        result['spuCode'] = result['baseDatas'].spuCode;
      }
      return result;
    },
    collectCurMaterialInfoAndSubmit () {
      var that = this;
      var result = that.collectCurMaterialInfo();
      console.log(`result`, result);
      that.$axios
        .put(`${window.$config.HOST}/materialmanagement/updateMaterialInfo`, result)
        .then(response => {
          if (response.data === 0) {
            that.$message({
              message: '在修改当前物料信息时出现错误，请检查提交的数据是否正确！',
              showClose: true,
              type: 'error',
            });
          } else {
            that.$message({
              message: '修改当前物料信息成功！',
              showClose: true,
              type: 'success',
            });
          }
        })
        .catch(error => {
          CommonApi.handleError(error, that, '在修改当前物料信息时出现错误，错误为：');
        });
    },
    collectAllMaterialInfo () {
      var that = this;
      var result = {};
      // 物料基本信息
      result['baseDatas'] = Object.assign({}, that.$store.getters['baseinfo/baseInfos']);
      // 物料信息
      result['materialDatas'] = {
        materialList: InfoModify.collectMaterialInfos(that.$store),
      };
      // 规格信息
      result['formatDatas'] = {
        formatList: InfoModify.collectFormatInfos(that.$store),
      };
      // SKU信息
      var skuList = that.$store.getters['skuinfo/skuInfos'];
      skuList = Object.assign([], skuList).map(ele => {
        delete ele.idx;
      });
      result['skuDatas'] = {
        skuList: that.$store.getters['skuinfo/skuInfos']
      };
      // 控制属性
      var ctrList = [];
      result['ctrPropDatas'] = {};
      result['ctrPropDatas']['ctrPropList'] = [];
      ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
        that.$store.getters['purandstoreprop/purchaseAndStoreInfos'],
        5));
      ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
        that.$store.getters['planprop/planInfos'],
        6));
      ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
        that.$store.getters['salesprop/salesInfos'],
        7));
      ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
        that.$store.getters['qualityprop/qualifyInfos'],
        8));
      ctrList = ctrList.concat(CtrPropFunc.collectCtrPropsWithTypeForBase(
        that.$store.getters['financeprop/financeInfos'],
        9));
      result['ctrPropDatas']['ctrPropList'] = ctrList;
      // 单位信息
      result['unitDatas'] = {
        defaultUnitId: that.$store.getters['unit/defaultUnitId'],
        unitList: that.$store.getters['unit/unitLists'],
      };
      if (that.$store.getters['infolist/curBaseInfo'].isNew === false) {
        result['spuCode'] = that.$store.getters['infolist/curBaseInfo'].spuCode;
      } else {
        result['spuCode'] = result['baseDatas'].spuCode;
      }
      return result;
    },
    // 收集所有物料信息的函数
    collectAllMaterialInfoAndSubmit () {
      var that = this;
      var result = that.collectAllMaterialInfo();
      console.log(`result`, result);
      that.$axios
        .put(`${window.$config.HOST}/materialmanagement/updateMaterialInfo`, result)
        .then(response => {
          if (response.data === 0) {
            that.$message({
              message: '在修改物料信息时出现错误，请检查提交的数据是否正确！',
              showClose: true,
              type: 'error',
            });
          } else {
            that.$message({
              message: '修改物料信息成功！',
              showClose: true,
              type: 'success',
            });
          }
        })
        .catch(error => {
          CommonApi.handleError(error, that, '在修改物料信息时出现错误，错误为：');
        });
    },
  },

};
</script>
