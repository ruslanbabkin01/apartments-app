import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OrdersPage from './pages/OrdersPage'
import store from './store'

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
