import Config from '../config/index';

// -------------------------------------------- 为模版原版代码 --------------------------------------------
const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');

// -------------------------------------------- 为用户新增代码 --------------------------------------------
const brandMana = r => require.ensure([], () => r(require('../page/dictionary/brandMana.vue')), 'brandMana');
const customerMana = r => require.ensure([], () => r(require('../page/dictionary/customerMana.vue')), 'customerMana');
const productMana = r => require.ensure([], () => r(require('../page/dictionary/productMana.vue')), 'productMana');
const dictionaryCateMana = r => require.ensure([], () => r(require('../page/dictionary/dictionaryCateMana.vue')), 'dictionaryCateMana');

// -------------------------------------------- 路由配置部分 --------------------------------------------
export default [{
    path: Config.route.login,
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { // 快速入门
        path: '/quick',
        name: 'Quick',
        component: Quick,
        meta: {
          bcrumd: ['快速入门']
        }
      },
      { 
        path: '/dictionary/brandMana',
        name: 'brandMana',
        component: brandMana,
        meta: {
          bcrumd: ['数据字典', '品牌信息管理'],
        }
      },
      { 
        path: '/dictionary/customerMana',
        name: 'customerMana',
        component: customerMana,
        meta: {
          bcrumd: ['数据字典', '客户信息管理'],
        }
      },
      {
        path: '/dictionary/productMana',
        name: 'productMana',
        component: productMana,
        meta: {
          bcrumd: ['数据字典', '产品信息管理'],
        }
      },
      { 
        path: '/dictionary/dictionaryCateMana',
        name: 'dictionaryCateMana',
        component: dictionaryCateMana,
        meta: {
          bcrumd: ['数据字典', '数据字典管理'],
        }
      },
      { // 默认路由
        path: '*',
        redirect: '/quick',
        name: 'Quick',
        component: Quick,
        meta: {
          bcrumd: ['快速入门']
        }
      }
    ]
  },
  {
    path: '*',
    redirect: Config.route.login,
    name: 'Login',
    component: Login
  }
]
