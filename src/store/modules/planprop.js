import * as types from '../mutation-types';

const state = {
  // 计划属性数据
  planInfos: {
    // 是否独立需求
    isIndependenceNeed: true,
    // 订货提前期
    orderLeadTime: '100',
    // 补货政策
    replenishPolicy: '0',
    // 补货周期
    replenishCycle: '10',
    // 最大库存量
    maxInventory: '20',
    // 安全库存量
    safeInventory: '20',
    // 订货批量 = 最大库存量 - 安全库存量
    orderQuantity: '0',
    // 批量政策
    batchPolicy: '0',
    // 批量周期
    batchCycle: '20',
    // 默认计划单位
    defaultPlanUnit: '天',
  },
};

const getters = {
  planInfos: state => state.planInfos,
  // isIndependenceNeed: state => state.planInfos.isIndependenceNeed,
  // orderLeadTime: state => state.planInfos.orderLeadTime,
  // replenishPolicy: state => state.planInfos.replenishPolicy,
  // replenishCycle: state => state.planInfos.replenishCycle,
  maxInventory: state => state.planInfos.maxInventory,
  safeInventory: state => state.planInfos.safeInventory,
  orderQuantity: state => state.planInfos.orderQuantity,
  // batchPolicy: state => state.planInfos.batchPolicy,
  // batchCycle: state => state.planInfos.batchCycle,
  // defaultPlanUnit: state => state.planInfos.defaultPlanUnit,
};

const actions = {
  updateOrderQuantity ({commit}, {url, value}) {
    commit(url, value);
    var maxInv = state.planInfos.maxInventory == null ? 0 : state.planInfos.maxInventory;
    var safeInv = state.planInfos.safeInventory == null ? 0 : state.planInfos.safeInventory;
    commit('order-quanlity', maxInv - safeInv);
  }
};

const mutations = {
  [types.PLANS](state, planInfos) {
    state.planInfos = planInfos;
  },
  // ['is-indep-need'](state, isIndependenceNeed) {
  //   state.planInfos.isIndependenceNeed = isIndependenceNeed;
  // },
  // ['order-lead-time'](state, orderLeadTime) {
  //   state.planInfos.orderLeadTime = orderLeadTime;
  // },
  // ['repl-policy'](state, replenishPolicy) {
  //   state.planInfos.replenishPolicy = replenishPolicy;
  // },
  // ['repl-cycle'](state, replenishCycle) {
  //   state.planInfos.replenishCycle = replenishCycle;
  // },
  ['max-inv'](state, maxInventory) {
    state.planInfos.maxInventory = maxInventory;
  },
  ['safe-inv'](state, safeInventory) {
    state.planInfos.safeInventory = safeInventory;
  },
  ['order-quanlity'](state, orderQuantity) {
    state.planInfos.orderQuantity = orderQuantity;
  },
  // ['batch-policy'](state, batchPolicy) {
  //   state.planInfos.batchPolicy = batchPolicy;
  // },
  // ['batch-cycle'](state, batchCycle) {
  //   state.planInfos.batchCycle = batchCycle;
  // },
  // ['default-plan-unit'](state, defaultPlanUnit) {
  //   state.planInfos.defaultPlanUnit = defaultPlanUnit;
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
