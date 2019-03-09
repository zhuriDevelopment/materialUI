import * as types from '../mutation-types';

const state = {
  // 采购和库存属性数据
  purchaseAndStoreInfos: {
    // 物料制购类型
    matPurchaseType: '0',
    // ABC分类
    abcType: 'A',
    // 循环盘点编码
    cycleCountCode: '1001',
    // 是否批次管理
    isBatchManage: true,
    // 是否单件管理
    isSingleManage: true,
    // 是否进价控制
    isPurchasePriceCtr: true,
    // 默认供应商
    defaultSupplier: '李宁',
    // 默认采购部门
    defaultPurchaseDept: '采购一部',
    // 默认仓库
    defaultWarehouse: '苏州一仓库',
    // 默认采购单位
    defaultPurchaseCompany: '江阴布料厂',
    // 默认库存单位
    defaultStoreUnit: '0',
    // 默认库位
    defaultStoreLocation: '库位一',
  },
};

const getters = {
  purchaseAndStoreInfos: state => state.purchaseAndStoreInfos,
};

const actions = {
  clearPurchaseAndStoreInfos ({commit}) {
    var params = {
      // 物料制购类型
      matPurchaseType: '0',
      // ABC分类
      abcType: 'A',
      // 循环盘点编码
      cycleCountCode: '0',
      // 是否批次管理
      isBatchManage: false,
      // 是否单件管理
      isSingleManage: false,
      // 是否进价控制
      isPurchasePriceCtr: false,
      // 默认供应商
      defaultSupplier: '默认供应商',
      // 默认采购部门
      defaultPurchaseDept: '采购部',
      // 默认仓库
      defaultWarehouse: '默认仓库',
      // 默认采购单位
      defaultPurchaseCompany: '默认采购单位',
      // 默认库存单位
      defaultStoreUnit: '0',
      // 默认库位
      defaultStoreLocation: '默认库位',
    }
    commit(types.PUR_AND_STORE, params);
  }
};

const mutations = {
  [types.PUR_AND_STORE](state, purchaseAndStoreInfos) {
    state.purchaseAndStoreInfos = purchaseAndStoreInfos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
