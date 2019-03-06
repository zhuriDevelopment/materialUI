import * as types from '../mutation-types'

const state = {
    /* 搜索输入的结果 */
    searchInputs: [],

    /* 信息展示表格的展示信息 */
    displayMaterialInfo: [],
    /* [
        {
          "spuCode": "1001",
          "spuName": "1001",
          "materialCatId": "1001",
          "designCode": "1001",
          "designVersion": "1001",
          "source": "1001",
          "defaultUnitId": 1,
          "description": "1001",
          "note": "1001",
        },
      ], */
};

const getters = {
    searchInputs: state => state.searchInputs,
    displayMaterialInfo: state => state.displayMaterialInfo,
};

const actions = {}; 

const mutations = {
    [types.MODIFY_INFOLISTSEARCHINPUTS] (state, newSearchInputs) {
        state.searchInputs = newSearchInputs;
    },
    [types.MODIFY_INFOLISTDISPLAYMATERIALINFO] (state, newDisplayMaterialInfo) {
        state.displayMaterialInfo = newDisplayMaterialInfo;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}