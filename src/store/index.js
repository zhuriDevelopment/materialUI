import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import createLogger from 'vuex/dist/logger';
import infolist from './modules/infolist';
import categorymodify from './modules/categorymodify';
import purandstoreprop from './modules/purandstoreprop';
import planprop from './modules/planprop';
import salesprop from './modules/salesprop';
import qualityprop from './modules/qualityprop';
import financeprop from './modules/financeprop';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// store可以理解为一个容器，包含着应用中的state等
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    infolist,
    categorymodify,
    purandstoreprop,
    planprop,
    salesprop,
    qualityprop,
    financeprop,
  },
  // strict: debug,
  plugins: [createLogger()]
})
