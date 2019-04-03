import CtrPropFunc from "@/api/ctrprop";
class InfoModifyFuncs {
  // 处理后端传过来的所有物料信息的函数
  handleAllMaterialInfo = (respData, store) => {
    var that = this;
    // 处理物料编码选项
    var materialCodeOptions = that.handleMaterialCodeOptions(Object.assign([], respData.materialInfos));
    store.commit('materialinfo/material-opt-arr', materialCodeOptions);
    // 处理规格信息
    var materialInfoColumns = that.handleFormatOptions(Object.assign([], respData.standardInfos.propList));
    store.commit('materialinfo/material-cols', materialInfoColumns);
    // 处理基本信息
    var baseInfos = Object.assign([], respData.baseInfos);
    baseInfos = that.handleBaseInfos(baseInfos, store);
    // 处理计量单位
    var units = Object.assign([], respData.units);
    units = that.handleUnitInfos(units, respData.baseInfos);
    // 处理物料定义
    var materialInfos = Object.assign([], respData.materialInfos);
    materialInfos = that.handleMaterialInfos(materialInfos, materialInfoColumns, respData.standardInfos.valList);
    // 处理sku信息
    var skuInfos = Object.assign([], respData.skuInfos);
    skuInfos = that.handleSkuInfos(skuInfos);
    // 采购与库存属性
    var purchaseAndStoreInfos = Object.assign([], respData.purchaseAndStoreInfos);
    purchaseAndStoreInfos = CtrPropFunc.handlePurchaseAndStoreInfos(purchaseAndStoreInfos);
    // 计划类属性
    var planInfos = Object.assign([], respData.planInfos);
    planInfos = CtrPropFunc.handlePlanInfos(planInfos);
    // 销售类属性
    var salesInfos = Object.assign([], respData.salesInfos);
    salesInfos = CtrPropFunc.handleSalesInfos(salesInfos);
    // 质量类属性
    var qualityInfos = Object.assign([], respData.qualityInfos);
    qualityInfos = CtrPropFunc.handleQualityInfos(qualityInfos);
    // 财务类属性
    var financeInfos = Object.assign([], respData.financeInfos);
    financeInfos = CtrPropFunc.handleFinanceInfos(financeInfos);

    // 统一commit到store中
    store.commit('baseinfo/modify-base', baseInfos);
    store.commit('unit/unit-info', units);
    store.commit('materialinfo/material-info', materialInfos);
    store.commit('skuinfo/sku-info', skuInfos);
    store.commit('purandstoreprop/purchase-and-store', purchaseAndStoreInfos);
    store.commit('planprop/plans', planInfos);
    store.commit('salesprop/sales', salesInfos);
    store.commit('qualityprop/quality', qualityInfos);
    store.commit('financeprop/finance', financeInfos);
  };
  // 处理物料编码选项的函数
  handleMaterialCodeOptions = (materialInfos) => {
    var result = [];
    for (let index in materialInfos) {
      let param = {};
      param["value"] = materialInfos[index].materialCode;
      param["label"] = materialInfos[index].materialCode;
      result.push(param);
    }
    return result;
  };
  // 处理规格栏的函数
  handleFormatOptions = (formatPropList) => {
    var result = [];
    for (let index in formatPropList) {
      let param = {};
      param["label"] = formatPropList[index]["name"];
      param["prop"] = formatPropList[index]["name"];
      result.push(param);
    }
    return result;
  }
  // 处理基本信息的函数
  handleBaseInfos = (baseInfos, store) => {
    var result = result = {
      spuCode: '',
      spuName: '',
      type: '',
      materialCatId: '',
      // source: '',
      usage: '',
      designCode: '',
      designVersion: '',
      mnemonic: '',
      description: '',
      note: '',
    };
    for (let index in baseInfos) {
      if (baseInfos[index].spuCode === store.getters['infolist/curBaseInfo'].spuCode) {
        var curBaseInfo = baseInfos[index];
        result = {
          spuCode: curBaseInfo.spuCode,
          spuName: curBaseInfo.spuName,
          type: curBaseInfo.type,
          materialCatId: curBaseInfo.materialCatId,
          // source: curBaseInfo.source,
          usage: curBaseInfo.usage,
          designCode: curBaseInfo.designCode,
          designVersion: curBaseInfo.designVersion,
          mnemonic: curBaseInfo.mnemonic,
          description: curBaseInfo.description,
          note: curBaseInfo.note,
        };
      }
    }
    return result;
  };
  // 处理计量单位的函数
  handleUnitInfos = (units) => {
    var unitresult = {
      // 默认计量单位id
      defaultUnitId: 1,
      // 单位信息数据
      unitLists: [],
    }
    if (units.defaultUnit != null) unitresult.defaultUnitId = units.defaultUnit.id;
    console.log(`units.unitList`, units.unitList);
    for (let index in units.unitList) {
      var param = {};
      param['unitId'] = units.unitList[index]['id'];
      param['conversionFactor'] = units.unitList[index]['conversionFactor'];
      param['sort'] = units.unitList[index]['sort'];
      unitresult.unitLists.push(param);
    }
    return unitresult;
  };
  // 处理物料信息的函数
  handleMaterialInfos = (materialInfos, materialInfoColumns, basePropValList) => {
    var result = [];
    for (let index in materialInfos) {
      let curMatInfoData = materialInfos[index];
      let param = {};
      param['materialCode'] = curMatInfoData['materialCode'];
      param['materialName'] = curMatInfoData['materialName'];
      param['oldMaterialName'] = curMatInfoData['oldMaterialName'];
      param['barCode'] = curMatInfoData['barCode'];
      param['idx'] = parseInt(index);
      for (let icols in materialInfoColumns) {
        let find = false;
        for (let ivals in basePropValList) {
          if (basePropValList[ivals]['materialCode'] === curMatInfoData['materialCode']) {
            find = true;
            param[materialInfoColumns[icols].label] = basePropValList[ivals]['value'];
            break;
          }
        }
        if (!find) {
          param[materialInfoColumns[icols].label] = '';
        }
      }
      result.push(param);
    }
    return result;
  };
  // 处理sku信息的函数
  handleSkuInfos = (skuInfos) => {
    var result = [];
    for (let index in skuInfos) {
      let curData = skuInfos[index];
      var param = {
        skuCode: curData.skuCode,
        skuName: curData.skuName,
        materialCode: curData.materialCode,
        unitId: curData.unitId,
        barCode: curData.barCode,
        purchasePrice: curData.purchasePrice,
        sellingPrice: curData.sellingPrice,
        description: curData.description,
        idx: parseInt(index),
      };
      result.push(param);
    }
    return result;
  };
  // 收集物料信息的函数
  collectMaterialInfos = (store) => {
    var materialInfos = store.getters['materialinfo/materialInfos'];
    var result = [];
    for (let index in materialInfos) {
      let curData = materialInfos[index];
      let param = {
        materialCode: curData.materialCode,
        materialName: curData.materialName,
        oldMaterialName: curData.oldMaterialName,
        barCode: curData.barCode,
      };
      result.push(param);
    }
    return result;
  };
  // 收集规格属性的函数
  collectFormatInfos = (store) => {
    var result = [];
    var materialInfos = Object.assign([], store.getters['materialinfo/materialInfos']);
    for (let index in materialInfos) {
      delete materialInfos[index].barCode;
      delete materialInfos[index].oldMaterialName;
      delete materialInfos[index].materialName;
      let materialCode = materialInfos[index].materialCode;
      delete materialInfos[index].materialCode;
      delete materialInfos[index].idx;
      for (let name in materialInfos[index]) {
        let value = materialInfos[index][name];
        let param = {
          name: name,
          value: value,
          materialCode: materialCode,
        };
        result.push(param);
      }
    }
    return result;
  };
}

export default new InfoModifyFuncs();
