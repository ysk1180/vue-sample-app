import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue' // Index.vueコンポーネントをインポートする
import AddSmoothie from '@/views/AddSmoothie.vue'
import EditSmoothie from '@/views/EditSmoothie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index', // 変更
      component: Index // 変更
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/add-smoothie',
      name: 'addSmoothie',
      component: AddSmoothie
    },
    {
      path: '/edit-smoothie/:id', //URLにidを含めるため:idが必要
      name: 'editSmoothie',
      component: EditSmoothie
    },
  ]
})
