import VueRouter from 'vue-router'
import ErrorPage from './pages/ErrorPage'
import store from './store'

const HomePage = () => import('./pages/HomePage')
const ApartmentPage = () => import('./pages/ApartmentPage')
const LoginPage = () => import('./pages/LoginPage')
const RegisterPage = () => import('./pages/RegisterPage')
const OrdersPage = () => import('./pages/OrdersPage')

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'register',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/orders',
    component: OrdersPage,
    name: 'orders',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error',
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn']

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'login' })
    }
  }

  if (to.matched.some(record => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: 'home' })
    }
  }

  next()
})

export default router
