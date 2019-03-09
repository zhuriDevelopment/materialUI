import * as types from '../mutation-types'

const state = {
  baseInfoData: [],
  curBaseInfo: {
    spuCode: '110101',
  },
};

const getters = {
  baseInfoData: state => state.baseInfoData,
  curBaseInfo: state => state.curBaseInfo,
};

const actions = {};

const mutations = {
  [types.LIST_TABLE](state, { baseInfoData }) {
    state.baseInfoData = baseInfoData;
  },
  [types.LIST_CUR_INFO] (state, curBaseInfo) {
    state.curBaseInfo = curBaseInfo;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
