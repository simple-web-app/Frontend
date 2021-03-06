import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { inject } from 'vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/page/:page',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'Full Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FullPost.vue'),
  },
  {
    path: '/add',
    name: 'Add Post',
    component: () => import('../views/AddPost.vue'),
  },
  {
    path: '/',
    redirect: '/page/1',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
