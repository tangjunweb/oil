import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


// 登录页
import Login from '@/view/login/Login'
import Err404 from '@/view/error/Err404'
import Layout from '@/view/layout/Layout'
import Home from '@/view/layout/Home'
//基本信息
import BasicInfo from '@/view/basicInfo/BasicInfo'

import RiskQuantity from '@/view/basicInfo/subpage/RiskQuantity'
import ProductProcess from '@/view/basicInfo/subpage/ProductProcess'
import RiskEmergeMeasure from '@/view/basicInfo/subpage/RiskEmergeMeasure'
import RiskSimulation from '@/view/basicInfo/subpage/RiskSimulation'
import InvestEmergeMeasure from '@/view/basicInfo/subpage/InvestEmergeMeasure'

// 应急救援物资配备情况及应急预案备案情况

import EmergeReady from '@/view/EmergeReady/index'

//账户、角色、权限管理
import AccountManager from '@/view/accountManager/AccountManager'
import PermissionsManager from '@/view/accountManager/PermissionsManager'

//审批流程
import ToAudited from '@/view/approval/audit/index'
import Audited from '@/view/approval/audit/submitAudited'

import AuditResult from '@/view/approval/auditresult/index'
import Audit from '@/view/approval/auditresult/audit'


export const constantRouterMap = [{
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    component: Err404,
    hidden: true
  },
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    noDropdown: true,
    hidden: true,
    children: [{
      path: 'index',
      component: Home,
      name: '首页',
    }, ]
  }

];

export const asyncRouterMap = [{
    path: '/basicInfo',
    component: Layout,
    icon: 'icon_basic.png',
    redirect: '/basicInfo/index',
    name: '场站、管线基本信息录入',
    children: [{
        path: 'index',
        component: BasicInfo,
        name: '基本信息',
      }, {
        path: 'RiskQuantity',
        component: RiskQuantity,
        name: '风险物质和数量',
      },
      {
        path: 'Riskst',
        component: ProductProcess, //
        name: '环境风险受体',
      }, {
        path: 'ProductProcess',
        component: ProductProcess,
        name: '生产工艺',
      },
      {
        path: 'RiskEmergeMeasure',
        component: RiskEmergeMeasure,
        name: '风险防范及应急措施',
      }, {
        path: 'RiskSimulation',
        component: RiskSimulation,
        name: '后果模拟',
      }, {
        path: 'InvestEmergeMeasure',
        component: InvestEmergeMeasure,
        name: '作业场所应急物资调查',
      },
      {
        path: 'Contantwc',
        component: InvestEmergeMeasure, //
        name: '外环境关系图上传',
      }
    ]
  }, {
    path: '/EmergeReady',
    component: Layout,
    icon: 'icon_emergeReady.png',
    redirect: '/EmergeReady/index',
    name: '应急救援物资配备情况及应急预案备案情况',
    noDropdown: true,
    children: [{
      path: 'index',
      component: EmergeReady,
      name: '应急救援物资配备情况及应急预案备案情况',
    }]
  },
  //账号、角色、权限管理  -tan
  {
    path: '/accountManager',
    component: Layout,
    icon: 'icon_basic.png',
    redirect: '/accountManager/index',
    name: '账号、角色、权限管理',
    children: [{
      path: 'index',
      component: AccountManager,
      name: '账号管理',
    }, {
      path: 'permissionsManager',
      component: PermissionsManager,
      name: '角色权限管理',
    }]
  },
  {
    path: '/approval',
    component: Layout,
    icon: 'icon_emergeReady.png',
    redirect: '/approval/index',
    name: '审批流程',
    children: [{
        path: 'index',
        component: ToAudited,
        name: '待审核',
      },
      {
        path: 'submitAudited/:obj/:flag',
        component: Audited,
        name: '审核',
        hidden:true
      }, {
        path: 'auditresult',
        component: AuditResult,
        name: '审核结果',

      }, {
        path: 'audit/:obj/:flag',
        component: Audit,
        name: '提交信息详情',
        hidden:true
      }
    ]
  }
];
export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap.concat(asyncRouterMap)
})
