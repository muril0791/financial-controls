import { createRouter, createWebHistory } from 'vue-router';
import AccessScreen from "../views/AccessScreen.vue";
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/access',
    name: 'Access',
    component: AccessScreen,
    meta: { requiresNoAuth: true },
    children: [
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  // outras rotas protegidas
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresNoAuth = to.matched.some(record => record.meta.requiresNoAuth);

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'Access' });
  } else if (requiresNoAuth && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
