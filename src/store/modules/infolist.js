import * as types from '../mutation-types'

const state = {
    baseInfoData: [],
};

const getters = {
    baseInfoData: state => state.baseInfoData,
};

const actions = {};

const mutations = {
    [types.MODIFY_INFOLISTTABLE] (state, { baseInfoData }) {
        state.baseInfoData = baseInfoData;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}