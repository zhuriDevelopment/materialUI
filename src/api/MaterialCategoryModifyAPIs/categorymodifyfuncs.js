import CommonApi from '@/api/commonApis';
import CtrPropDict from '@/api/ctrpropdict';
class CategoryModifyFuncs {
  // 处理获取信息时返回值中所有属性的函数
  handleAllInfos = (allInfos, store) => {
    var that = this;
    // 基本属性
    var basePropList = Object.assign([], allInfos.basePropList);
    basePropList = that.handleBaseInfos(basePropList);
    // console.log(`basePropList`, basePropList);
    // 采购与库存属性
    var purchaseAndStoreInfos = Object.assign([], allInfos.purchaseAndStoreInfos);
    purchaseAndStoreInfos = that.handlePurchaseAndStoreInfos(purchaseAndStoreInfos);
    // console.log(`purchaseAndStoreInfos`, purchaseAndStoreInfos);
    // 计划类属性
    var planInfos = Object.assign([], allInfos.planInfos);
    planInfos = that.handlePlanInfos(planInfos);
    // console.log(`planInfos`, planInfos);
    // 销售类属性
    var salesInfos = Object.assign([], allInfos.salesInfos);
    salesInfos = that.handleSalesInfos(salesInfos);
    // console.log(`salesInfos`, salesInfos);
    // 质量类属性
    var qualityInfos = Object.assign([], allInfos.qualityInfos);
    qualityInfos = that.handleQualityInfos(qualityInfos);
    // console.log(`qualityInfos`, qualityInfos);
    // 财务类属性
    var financeInfos = Object.assign([], allInfos.financeInfos);
    financeInfos = that.handleFinanceInfos(financeInfos);
    // console.log(`financeInfos`, financeInfos);

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
      baseInfos[element]["valueRange"] = valueRange;
      baseInfos[element]["valueRangeType"] = valueRangeType;
    }
    return baseInfos;
  };
  // 处理采购与库存属性的函数
  handlePurchaseAndStoreInfos = (purchaseAndStoreInfos) => {
    var result = {};
    console.log(`purchaseAndStoreInfos`, purchaseAndStoreInfos);
    var valueList = purchaseAndStoreInfos.map(ele => ele.propertyValue);
    console.log(`valueList`, valueList);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.purchaseAndStoreDict, 0);
    var nameList = CommonApi.keyToValue(CtrPropDict.purchaseAndStoreDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
      if (nameList[element] === 'isBatchManage' ||
          nameList[element] === 'isPurchasePriceCtr' ||
          nameList[element] === 'isSingleManage') {
        result[nameList[element]] = valueList[element] === 'true' ? true : false;
      }
      if (nameList[element] === 'cycleCountCode') {
        result[nameList[element]] = parseInt(valueList[element]);
      }
    }
    return result;
  };
  // 处理计划类属性的函数
  handlePlanInfos = (planInfos) => {
    var result = {};
    console.log(`planInfos`, planInfos);
    var valueList = planInfos.map(ele => ele.propertyValue);
    console.log(`valueList`, valueList);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.planDict, 0);
    var nameList = CommonApi.keyToValue(CtrPropDict.planDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
      if (nameList[element] === 'isIndependenceNeed') {
        result[nameList[element]] = valueList[element] === 'true' ? true : false;
      }
      if (nameList[element] === 'orderLeadTime' ||
          nameList[element] === 'replenishCycle' ||
          nameList[element] === 'maxInventory' ||
          nameList[element] === 'safeInventory' ||
          nameList[element] === 'batchCycle') {
        result[nameList[element]] = parseInt(valueList[element]);
      }
    }
    return result;
  };
  // 处理销售类属性的函数
  handleSalesInfos = (salesInfos) => {
    var result = {};
    console.log(`salesInfos`, salesInfos);
    var valueList = salesInfos.map(ele => ele.propertyValue);
    console.log(`valueList`, valueList);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.salesDict, 0);
    var nameList = CommonApi.keyToValue(CtrPropDict.salesDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
      if (nameList[element] === 'isPriceCtr') {
        result[nameList[element]] = valueList[element] === 'true' ? true : false;
      }
      if (nameList[element] === 'planPrice' ||
          nameList[element] === 'priceLowerLimitRate') {
        result[nameList[element]] = parseInt(valueList[element]);
      } 
    }
    return result;
  };
  // 处理质量类属性的函数
  handleQualityInfos = (qualityInfos) => {
    var result = {};
    console.log(`qualityInfos`, qualityInfos);
    var valueList = qualityInfos.map(ele => ele.propertyValue);
    console.log(`valueList`, valueList);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.qualityDict, 0);
    var nameList = CommonApi.keyToValue(CtrPropDict.qualityDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
    }
    return result;
  };
  // 处理财务类属性的函数
  handleFinanceInfos = (financeInfos) => {
    var result = {};
    console.log(`financeInfos`, financeInfos);
    var valueList = financeInfos.map(ele => ele.propertyValue);
    console.log(`valueList`, valueList);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.financeDict, 0);
    var nameList = CommonApi.keyToValue(CtrPropDict.financeDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
    }
    return result;
  };
}

export default new CategoryModifyFuncs();
