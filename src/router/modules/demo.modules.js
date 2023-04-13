import Layout from '@/layout/Layout.vue';

export default [
  {
    path: '/demo',
    component: Layout,
    redirect: '/demo/route',
    children: [
      {
        path: 'route',
        name: 'route',
        component: () => import('@/views/demo/route.vue'),
        meta: { title: '路由使用' },
      },
      {
        path: 'pinia',
        name: 'pinia',
        component: () => import('@/views/demo/pinia.vue'),
        meta: { title: 'Pinia使用' },
      },
      {
        path: 'iframe1',
        name: 'iframe1',
        component: () => import('@/views/demo/iframe.vue'),
        meta: {
          title: 'Iframe使用',
          url: 'https://juejin.cn/post/7218117377052377143',
        },
      },
      {
        path: 'iframe2',
        name: 'iframe2',
        component: () => import('@/views/demo/iframe.vue'),
        meta: {
          title: 'Iframe使用',
          url: 'https://juejin.cn/post/7220776393374679096',
        },
      },
    ],
  },
];
