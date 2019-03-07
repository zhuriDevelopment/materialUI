class CategoryModifyFuncs {
  // 处理获取信息时返回值中所有属性的函数
  handleAllInfos = (allInfos, store) => {
    var that = this;
    // 基本属性
    var basePropList = Object.assign([], allInfos.basePropList);
    basePropList = that.handleBaseInfos(basePropList);
    console.log(`basePropList`, basePropList);
    store.commit('categorymodify/cat-base-prop', basePropList);
  }
  // 处理返回值中基本属性的函数
  handleBaseInfos = (baseInfos) => {
    for (var element in baseInfos) {
      var valueRangeOri = JSON.parse(baseInfos[element].valueRange);
      var valueRangeType = valueRangeOri.type;
      var valueRange = valueRangeOri.content;
      delete baseInfos[element].valueRange;
      baseInfos[element]["valueRange"] = valueRange;
      baseInfos[element]["valueRangeType"] = valueRangeType;
    }
    return baseInfos;
  };
  // 用于转化采购与库存属性名与属性值的字典
  purchaseAndStoreDict = {
    '物料制购类型': 'matPurchaseType',
    'ABC分类': 'abcType',
    '循环盘点编码': 'cycleCountCode',
    '是否批次管理': 'isBatchManage',
    '是否单件管理': 'isSingleManage',
    '是否进价控制': 'isPurchasePriceCtr',
    '默认供应商': 'defaultSupplier',
    '默认采购部门': 'defaultPurchaseDept',
    '默认仓库': 'defaultWarehouse',
    '默认采购单位': 'defaultPurchaseCompany',
    '默认库存单位': 'defaultStoreUnit',
    '默认库位': 'defaultStoreLocation',
  };
}

export default new CategoryModifyFuncs();
