import { LAYOUT } from '../constants';

/**
 * @type {import('vue-router').RouteConfig[]}
 */
export default [
  {
    path: '/demo',
    component: LAYOUT,
    redirect: '/demo/route',
    children: [
      {
        path: 'route',
        component: () => import('@/views/demo/route.vue'),
        meta: { title: '路由使用' },
      },
      {
        path: 'pinia',
        component: () => import('@/views/demo/pinia.vue'),
        meta: { title: 'Pinia使用' },
      },
    ],
  },
];
