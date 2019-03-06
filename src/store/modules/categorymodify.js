import * as types from '../mutation-types'

const state = {
  categoryTree: [
    {
      label: '物料分类',
      children: [{
        label: '原料',
        children: [{
          label: '面料'
        },{
          label:'辅料'
        }],
      },
      {
          label:'包装材料',
          children: [{
          label: '包装材料1'
        },{
          label:'包装材料2'
        }]
      },
      {
          label:'成品',
          children: [{
          label: '成品1'
        },{
          label:'成品2'
        }]
      }]
    },
    {
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        children: [{
        label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
        label: '三级 2-2-1'
        }]
      }]
    },
  ],
};

const getters = {
  categoryTree: state => state.categoryTree,
};

const actions = {
  getCatTree ({commit}, {url, axios, type, main}) {
    axios
      .get(url)
      .then(response => {
        console.log(`getCategoryTree response`, response);
        commit(type, response.data);
      })
      .catch(error => {
        console.log(`getCategoryTree error`, error, error.response);
        if (error && error.response) {
          console.log('error.response.data', error.response.data);
          console.log('error.response.status', error.response.status);
          console.log('error.response.headers', error.response.headers);
          main.$message.error("在获取物料分类信息的过程中发生错误，错误为：" + error.status);
        } else {
          console.log(`error.request`, error.request);
          console.log('error.message', error.message);
          main.$message.error("在获取物料分类信息的过程中发生错误，错误为：" + error.message);
        }
        console.log(`error.config`, error.config);
      });
  },
};

const mutations = {
  [types.CAT_MODIFY_TREE] (state, categoryTree) {
    state.categoryTree = categoryTree;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
