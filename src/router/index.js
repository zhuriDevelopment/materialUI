import Config from '../config/index';

// -------------------------------------------- 为模版原版代码 --------------------------------------------
const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');
// 基础服务 -- 三级菜单 -- 文章管理
const Article = r => require.ensure([], () => r(require('../page/base/thrmenu/article')), 'article');
// 基础服务 -- 三级菜单 -- 评论管理
const Comment = r => require.ensure([], () => r(require('../page/base/thrmenu/comment')), 'comment');
// 基础服务 -- 三级菜单 -- 用户留存
const Left = r => require.ensure([], () => r(require('../page/base/thrmenu/left')), 'left');
// 基础服务 -- 三级菜单 -- 流失用户
const Lost = r => require.ensure([], () => r(require('../page/base/thrmenu/lost')), 'lost');

// 用户中心 -- 用户管理
// const User = r => require.ensure([], () => r(require('../page/user/user')), 'user');

// 基础服务 -- 三级菜单
const thrmenuNavbar = [{
  title: '文章管理',
  index: '/thrmenu/article'
}, {
  title: '评论管理',
  index: '/thrmenu/comment'
}, {
  title: '用户留存',
  index: '/thrmenu/left'
}, {
  title: '流失用户',
  index: '/thrmenu/lost'
}];

// -------------------------------------------- 为用户新增代码 --------------------------------------------
const MaterialInfoList = r => require.ensure([], () => r(require('../page/material/MaterialInfoList')), 'MaterialInfoList');
const MaterialInfoModify = r => require.ensure([], () => r(require('../page/material/MaterialInfoModify')), 'MaterialInfoModify');
const MaterialTypeModify = r => require.ensure([], () => r(require('../page/material/MaterialTypeModify')), 'MaterialTypeModify');

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
        path: '/material/typemodify',
        name: 'MaterialTypeModify',
        component: MaterialTypeModify,
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
