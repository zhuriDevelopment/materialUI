import * as types from '../mutation-types';

const state = {
  // 销售属性数据
  salesInfos: {
    // 销售计划价格
    planPrice: '10',
    // 计价货币
    currency: '0',
    // 是否售价控制
    isPriceCtr: false,
    // 销售价格策略
    priceStrategy: "保守策略",
    // 销价下限率
    priceLowerLimitRate: "25",
    // 销售成本科目
    costSubject: "科目一",
    // 默认客户
    defaultClient: "波司登",
    // 销售地
    location: "中国",
    // 默认业务员
    defaultSalesman: "张三",
    // 默认销售单位
    defaultUnit: '0',
  },
};

const getters = {
  salesInfos: state => state.salesInfos,
  // planPrice: state => state.salesInfos.planPrice,
  // currency: state => state.salesInfos.currency,
  // isPriceCtr: state => state.salesInfos.isPriceCtr,
  // priceStrategy: state => state.salesInfos.priceStrategy,
  // priceLowerLimitRate: state => state.salesInfos.priceLowerLimitRate,
  // costSubject: state => state.salesInfos.costSubject,
  // defaultClient: state => state.salesInfos.defaultClient,
  // location: state => state.salesInfos.location,
  // defaultSalesman: state => state.salesInfos.defaultSalesman,
  // defaultUnit: state => state.salesInfos.defaultUnit,
};

const actions = {};

const mutations = {
  [types.SALES](state, salesInfos) {
    state.salesInfos = salesInfos;
  },
  // ['plan-price'](state, planPrice) {
  //   state.salesInfos.planPrice = planPrice;
  // },
  // ['currency'](state, currency) {
  //   state.salesInfos.currency = currency;
  // },
  // ['is-price-ctr'](state, isPriceCtr) {
  //   state.salesInfos.isPriceCtr = isPriceCtr;
  // },
  // ['price-stra'](state, priceStrategy) {
  //   state.salesInfos.priceStrategy = priceStrategy;
  // },
  // ['pri-lower-limit-rate'](state, priceLowerLimitRate) {
  //   state.salesInfos.priceLowerLimitRate = priceLowerLimitRate;
  // },
  // ['cost-sub'](state, costSubject) {
  //   state.salesInfos.costSubject = costSubject;
  // },
  // ['default-client'](state, defaultClient) {
  //   state.salesInfos.defaultClient = defaultClient;
  // },
  // ['location'](state, location) {
  //   state.salesInfos.location = location;
  // },
  // ['default-salesman'](state, defaultSalesman) {
  //   state.salesInfos.defaultSalesman = defaultSalesman;
  // },
  // ['default-unit'](state, defaultUnit) {
  //   state.salesInfos.defaultUnit = defaultUnit;
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
