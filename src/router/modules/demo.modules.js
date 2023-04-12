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
        path: 'iframe',
        name: 'iframe',
        component: () => import('@/views/demo/iframe.vue'),
        meta: { title: 'Iframe使用' },
      },
    ],
  },
];
