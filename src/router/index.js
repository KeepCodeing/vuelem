import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Address = {
  path: '/home/address',
  component: () => import('../components/home/Address'),
};

const City = {
  path: '/home/city',
  component: () => import('../components/home/City'),
};

const HomeMain = {
  path: '/home/main',
  component: () => import('../components/home/HomeMain'),
};

const Home = {
  path: '/home',
  redirect: '/home/main',
  component: () => import('../views/Home'),
  children: [
    Address,
    City,
    HomeMain,
  ]
};

const Login = {
  component: () => import('../views/Login'),
  path: '/login'
};

const DefaultPage = {
  path: '/',
  redirect: '/home'
};

const routes = [
  Login,
  Home,
  DefaultPage,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(((to, from, next) => {
  const isLogin = window.sessionStorage.getItem('login');
  if (to.path === '/login') next();
  else if (isLogin !== 'yes') next('/login');
  else next();
}));

export default router
