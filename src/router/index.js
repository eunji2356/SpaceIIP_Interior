import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../components/Content.vue'
import AboutUs from '../components/AboutUs.vue'
import Portfolio from '../components/Portfolio.vue'
import PortfolioDetail from '../components/PortfolioDetail.vue'
import Process from '../components/Process.vue'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: Content
      },
      {
        path: '/aboutUs',
        component: AboutUs
      },
      {
        path: '/portfolio',
        component: Portfolio
      },
      {
        path: '/process',
        component: Process
      },
      {
        path: '/portfolio/detail/:portfolioKey',
        name: 'portfolioDetail',
        component: PortfolioDetail,
        props: true
      },
      {
        path: '/admin',
        component: Admin
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
