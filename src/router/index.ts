import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes:Array<RouteRecordRaw>=[
  {
    path: '/',
    name: 'ranking',
    component: ()=> import("../views/ranking.vue")
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: ()=> import("../views/ranking.vue")
  },
  {
    path: '/search',
    name: 'search',
    component: ()=> import("../views/search.vue")
  },
  {
    path: '/singer',
    name: 'singer',
    component: ()=> import("../views/singer.vue")
  },{
    path: '/recommend',
    name: 'recommend',
    component: ()=> import("../views/recommend.vue")
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  // routes = routes:routes
  routes
})

export default router;
