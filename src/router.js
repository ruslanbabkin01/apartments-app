import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OrdersPage from './pages/OrdersPage'

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
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'register',
  },
  {
    path: '/orders',
    component: OrdersPage,
    name: 'orders',
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error',
  },
]

const router = new VueRouter({ routes, mode: 'history' })

export default router
