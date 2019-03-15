import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goods from '@/components/goods'
import two from '@/components/two'
import three from '../components/three'
Vue.use(Router)

export default new Router({
	
  routes: [
    {
      path: '/',
      component: goods
    },
    {
    path: '/one',
    component: goods
  },
  {
    path: '/two',
    component: two
  },
  ,
  {
    path: '/three',
    component: three
  },
  ]
})
