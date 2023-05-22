import HomePage from './pages/HomePage'
import ApartmentPage from './pages/ApartmentPage'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/apartment',
    component: ApartmentPage,
    name: 'apartment',
  },
]

const router = new VueRouter({ routes, mode: 'history' })

export default router
