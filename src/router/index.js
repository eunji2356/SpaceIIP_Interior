import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Navi from '../components/Navi.vue'
// import Content from '../components/Content.vue'
import Bottom from '../components/Bottom.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/bottom',
    name: 'Bottom',
    component: Bottom
  }
  // {
  //   path: '/navi',
  //   name: 'Navi',
  //   component: Navi
  // },
  // {
  //   path: '/content',
  //   name: 'Content',
  //   component: Content
  // }
]

const router = new VueRouter({
  routes
})

export default router
