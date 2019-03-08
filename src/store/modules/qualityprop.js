import * as types from '../mutation-types';

const state = {
  // 质量属性数据
  qualifyInfos: {
    // 检验方法
    testMethod: '1',
    // 检验水准
    testLevel: '0',
    // 检验程度
    testDegree: '0',
    // 默认检验部门
    defaultTestDep: '0',
    // 检验工时
    testHour: '10',
    // 存储期限
    storageLimit: '10',
    // 默认检验员
    defaultTester: '李小四'
  },
};

const getters = {
  qualifyInfos: state => state.qualifyInfos,
  // testMethod: state => state.qualifyInfos.testMethod,
  // testLevel: state => state.qualifyInfos.testLevel,
  // testDegree: state => state.qualifyInfos.testDegree,
  // defaultTestDep: state => state.qualifyInfos.defaultTestDep,
  // testHour: state => state.qualifyInfos.testHour,
  // storageLimit: state => state.qualifyInfos.storageLimit,
  // defaultTester: state => state.qualifyInfos.defaultTester,
};

const actions = {};

const mutations = {
  [types.QUALITY](state, qualifyInfos) {
    state.qualifyInfos = qualifyInfos;
  },
  // ['test-method'](state, testMethod) {
  //   state.qualifyInfos.testMethod = testMethod;
  // },
  // ['test-lvl'](state, testLevel) {
  //   state.qualifyInfos.testLevel = testLevel;
  // },
  // ['test-degree'](state, testDegree) {
  //   state.qualifyInfos.testDegree = testDegree;
  // },
  // ['default-test-dep'](state, defaultTestDep) {
  //   state.qualifyInfos.defaultTestDep = defaultTestDep;
  // },
  // ['test-hour'](state, testHour) {
  //   state.qualifyInfos.testHour = testHour;
  // },
  // ['storage-limit'](state, storageLimit) {
  //   state.qualifyInfos.storageLimit = storageLimit;
  // },
  // ['default-tester'](state, defaultTester) {
  //   state.qualifyInfos.defaultTester = defaultTester;
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
