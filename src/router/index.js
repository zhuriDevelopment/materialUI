import Config from '../config/index';

// -------------------------------------------- 为模版原版代码 --------------------------------------------
const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');

// -------------------------------------------- 为用户新增代码 --------------------------------------------
const MaterialInfoList = r => require.ensure([], () => r(require('../page/material/MaterialInfoList')), 'MaterialInfoList');
const MaterialInfoModify = r => require.ensure([], () => r(require('../page/material/MaterialInfoModify')), 'MaterialInfoModify');
const MaterialCategoryModify = r => require.ensure([], () => r(require('../page/material/MaterialCategoryModify')), 'MaterialCategoryModify');

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
      { // 物料 -- 物料信息列表
        path: '/material/infolist',
        name: 'MaterialInfoList',
        component: MaterialInfoList,
        meta: {
          bcrumd: ['物料', '物料信息列表'],
        }
      },
      { // 物料 -- 物料信息编辑
        path: '/material/infomodify',
        name: 'MaterialInfoModify',
        component: MaterialInfoModify,
        meta: {
          bcrumd: ['物料', '物料信息编辑'],
        }
      },
      { // 物料 -- 物料分类管理
        path: '/material/categorymodify',
        name: 'MaterialCategoryModify',
        component: MaterialCategoryModify,
        meta: {
          bcrumd: ['物料', '物料分类管理'],
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
