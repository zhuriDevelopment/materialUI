import * as types from '../mutation-types';

const state = {
  // 财务属性数据
  financeInfos: {
    // 财务类别
    typeId: '0',
    // 记账本位币
    recordCurrency: '人民币',
    // 会计科目
    accountName: '资产类',
    // 增值税代码
    vatCode: '1001',
    // 存货计价方法
    invCostMethod: '0',
    // 成本计算方法
    costingMethod: '0',
    // 开票类型
    billingType: '0',
  },
};

const getters = {
  financeInfos: state => state.financeInfos,
  // typeId: state => state.financeInfos.typeId,
  // recordCurrency: state => state.financeInfos.recordCurrency,
  // accountName: state => state.financeInfos.accountName,
  // vatCode: state => state.financeInfos.vatCode,
  // invCostMethod: state => state.financeInfos.invCostMethod,
  // costingMethod: state => state.financeInfos.costingMethod,
  // billingType: state => state.financeInfos.billingType,
};

const actions = {};

const mutations = {
  [types.FINANCE](state, financeInfos) {
    state.financeInfos = financeInfos;
  },
  // ['type-id'](state, typeId) {
  //   state.financeInfos.typeId = typeId;
  // },
  // ['record-cur'](state, recordCurrency) {
  //   state.financeInfos.recordCurrency = recordCurrency;
  // },
  // ['account-name'](state, accountName) {
  //   state.financeInfos.accountName = accountName;
  // },
  // ['vat-code'](state, vatCode) {
  //   state.financeInfos.vatCode = vatCode;
  // },
  // ['inv-cost-method'](state, invCostMethod) {
  //   state.financeInfos.invCostMethod = invCostMethod;
  // },
  // ['costing-method'](state, costingMethod) {
  //   state.financeInfos.costingMethod = costingMethod;
  // },
  // ['billing-type'](state, billingType) {
  //   state.financeInfos.billingType = billingType;
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
