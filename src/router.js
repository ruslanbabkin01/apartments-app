import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import ErrorPage from './pages/ErrorPage'
import VueRouter from 'vue-router'

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
    path: '*',
    component: ErrorPage,
    name: 'error',
  },
]

const router = new VueRouter({ routes, mode: 'history' })

export default router
