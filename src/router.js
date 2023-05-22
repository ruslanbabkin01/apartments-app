import Foo from './pages/Foo'
import Bar from './pages/Bar'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/foo',
    component: Foo,
  },
  {
    path: '/bar',
    component: Bar,
  },
]

const router = new VueRouter({ routes })

export default router
