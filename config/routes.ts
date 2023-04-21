export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './User/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: '状态管理dva',
    icon: 'table',
    path: '/dva',
    disableLocale: true,
    component: './Dva',
  },
  {
    name: 'Switch Tabs Demos',
    icon: 'star',
    path: '/switch-tabs-demos',
    routes: [
      {
        path: '/switch-tabs-demos',
        redirect: '/switch-tabs-demos/control',
      },
      {
        name: '控制台',
        path: '/switch-tabs-demos/control',
        component: './SwitchTabsDemos/Control',
      },
      {
        name: '嵌套路由',
        path: '/switch-tabs-demos/parent',
        component: './SwitchTabsDemos/Parent',
        hideChildrenInMenu: true,
        routes: [
          {
            path: '/switch-tabs-demos/parent',
            redirect: '/switch-tabs-demos/parent/child1',
          },
          {
            path: '/switch-tabs-demos/parent/child1',
            component: './SwitchTabsDemos/Parent/Child1',
          },
          {
            path: '/switch-tabs-demos/parent/child2',
            name: '嵌套路由 - 子节点 2',
            component: './SwitchTabsDemos/Parent/Child2',
          },
          {
            path: '/switch-tabs-demos/parent/child3',
            component: './SwitchTabsDemos/Parent/Child3',
          },
        ],
      },
      {
        name: '查询页',
        path: '/switch-tabs-demos/query',
        component: './SwitchTabsDemos/Query',
      },
      {
        name: '结果页',
        path: '/switch-tabs-demos/result',
        follow: '/switch-tabs-demos/query',
        hideInMenu: true,
        component: './SwitchTabsDemos/Result',
      },
      {
        name: '动态路由',
        path: '/switch-tabs-demos/dynamic/:anyStr',
        hideInMenu: true,
        component: './SwitchTabsDemos/Dynamic',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
