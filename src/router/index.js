import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Login = {
  component: () => import('../views/Login'),
  path: '/login'
};

const DefaultPage = {
  path: '/',
  redirect: '/home'
};

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

const Search = {
  path: '/home/search',
  component: () => import('../components/home/Search'),
};

const Home = {
  path: '/home',
  redirect: '/home/main',
  component: () => import('../views/Home'),
  children: [
    Address,
    City,
    HomeMain,
    Search,
  ]
};

// const Eat = {
//   path: '/details/eat',
//   component: () => import('../components/details/Eat')
// };
//
// const Comment = {
//   path: '/details/comment',
//   component: () => import('../components/details/Comment'),
// };
//
// const Seller = {
//   path: '/details/seller',
//   component: () => import('../components/details/Seller')
// };

const Details = {
  path: '/details/:id',
  component: () => import('../views/Details'),
};

const routes = [
  Login,
  Home,
  DefaultPage,
  Details,
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
