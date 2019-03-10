import CtrPropFuncs from "@/api/ctrprop";
class CategoryModify {
  // 处理获取信息时返回值中所有属性的函数
  handleAllInfos = (allInfos, store) => {
    var that = this;
    // 基本属性
    var basePropList = Object.assign([], allInfos.basePropList);
    basePropList = that.handleBaseInfos(basePropList);
    // 采购与库存属性
    var purchaseAndStoreInfos = Object.assign([], allInfos.purchaseAndStoreInfos);
    purchaseAndStoreInfos = CtrPropFuncs.handlePurchaseAndStoreInfos(purchaseAndStoreInfos);
    // 计划类属性
    var planInfos = Object.assign([], allInfos.planInfos);
    planInfos = CtrPropFuncs.handlePlanInfos(planInfos);
    // 销售类属性
    var salesInfos = Object.assign([], allInfos.salesInfos);
    salesInfos = CtrPropFuncs.handleSalesInfos(salesInfos);
    // 质量类属性
    var qualityInfos = Object.assign([], allInfos.qualityInfos);
    qualityInfos = CtrPropFuncs.handleQualityInfos(qualityInfos);
    // 财务类属性
    var financeInfos = Object.assign([], allInfos.financeInfos);
    financeInfos = CtrPropFuncs.handleFinanceInfos(financeInfos);

    // 统一commit到store中
    store.commit('categorymodify/cat-base-prop', basePropList);
    store.commit('purandstoreprop/purchase-and-store', purchaseAndStoreInfos);
    store.commit('planprop/plans', planInfos);
    store.commit('salesprop/sales', salesInfos);
    store.commit('qualityprop/quality', qualityInfos);
    store.commit('financeprop/finance', financeInfos);
  };
  // 处理返回值中基本属性的函数
  handleBaseInfos = (baseInfos) => {
    for (let element in baseInfos) {
      var valueRangeOri = JSON.parse(baseInfos[element].valueRange);
      var valueRangeType = valueRangeOri.type;
      var valueRange = valueRangeOri.content;
      delete baseInfos[element].valueRange;
      if ("id" in baseInfos[element]) {
        delete baseInfos[element]["id"];
      }
      if ("materialCatId" in baseInfos[element]) {
        delete baseInfos[element]["materialCatId"];
      }
      baseInfos[element]["valueRange"] = valueRange;
      baseInfos[element]["valueRangeType"] = valueRangeType;
    }
    return baseInfos;
  };
  // 收集以供提交的基本属性的函数
  collectBaseInfos = (_baseInfos) => {
    let baseInfos = Object.assign([], _baseInfos);
    for (let element in baseInfos) {
      var targetValueRange = {
        type: '',
        content: '',
      };
      targetValueRange.type = baseInfos[element]["valueRangeType"];
      targetValueRange.content = baseInfos[element]["valueRange"];
      targetValueRange = JSON.stringify(targetValueRange);
      delete baseInfos[element]["valueRangeType"];
      delete baseInfos[element]["valueRange"];
      baseInfos[element]["valueRange"] = targetValueRange;
    }
    return baseInfos;
  };
}

export default new CategoryModify();
