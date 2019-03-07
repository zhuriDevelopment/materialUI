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
  matPurchaseType: state => state.purchaseAndStoreInfos.matPurchaseType,
  abcType: state => state.purchaseAndStoreInfos.abcType,
  cycleCountCode: state => state.purchaseAndStoreInfos.cycleCountCode,
  isBatchManage: state => state.purchaseAndStoreInfos.isBatchManage,
  isSingleManage: state => state.purchaseAndStoreInfos.isSingleManage,
  isPurchasePriceCtr: state => state.purchaseAndStoreInfos.isPurchasePriceCtr,
  defaultSupplier: state => state.purchaseAndStoreInfos.defaultSupplier,
  defaultPurchaseDept: state => state.purchaseAndStoreInfos.defaultPurchaseDept,
  defaultWarehouse: state => state.purchaseAndStoreInfos.defaultWarehouse,
  defaultPurchaseCompany: state => state.purchaseAndStoreInfos.defaultPurchaseCompany,
  defaultStoreUnit: state => state.purchaseAndStoreInfos.defaultStoreUnit,
  defaultStoreLocation: state => state.purchaseAndStoreInfos.defaultStoreLocation,
};

const actions = {};

const mutations = {
  [types.PUR_AND_STORE](state, purchaseAndStoreInfos) {
    state.purchaseAndStoreInfos = purchaseAndStoreInfos;
  },
  ['mat-pur-type'](state, matPurchaseType) {
    state.purchaseAndStoreInfos.matPurchaseType = matPurchaseType;
  },
  ['abc-type'](state, abcType) {
    state.purchaseAndStoreInfos.abcType = abcType;
  },
  ['cycle-count-code'](state, cycleCountCode) {
    state.purchaseAndStoreInfos.cycleCountCode = cycleCountCode;
  },
  ['is-batch-manage'](state, isBatchManage) {
    state.purchaseAndStoreInfos.isBatchManage = isBatchManage;
  },
  ['is-single-manage'](state, isSingleManage) {
    state.purchaseAndStoreInfos.isSingleManage = isSingleManage;
  },
  ['is-pur-price-ctr'](state, isPurchasePriceCtr) {
    state.purchaseAndStoreInfos.isPurchasePriceCtr = isPurchasePriceCtr;
  },
  ['default-supplier'](state, defaultSupplier) {
    state.purchaseAndStoreInfos.defaultSupplier = defaultSupplier;
  },
  ['default-pur-dept'](state, defaultPurchaseDept) {
    state.purchaseAndStoreInfos.defaultPurchaseDept = defaultPurchaseDept;
  },
  ['default-warehouse'](state, defaultWarehouse) {
    state.purchaseAndStoreInfos.defaultWarehouse = defaultWarehouse;
  },
  ['default-pur-company'](state, defaultPurchaseCompany) {
    state.purchaseAndStoreInfos.defaultPurchaseCompany = defaultPurchaseCompany;
  },
  ['default-store-unit'](state, defaultStoreUnit) {
    state.purchaseAndStoreInfos.defaultStoreUnit = defaultStoreUnit;
  },
  ['default-store-location'](state, defaultStoreLocation) {
    state.purchaseAndStoreInfos.defaultStoreLocation = defaultStoreLocation;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};