import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'

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
    path: '*',
    component: ErrorPage,
    name: 'error',
  },
]

const router = new VueRouter({ routes, mode: 'history' })

export default router
