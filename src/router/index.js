import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from '@/store';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要鉴权,进入鉴权流程
    const status = store.getters["loginUser/status"]
    // 本身已经登录，直接进入
    if (status === "login") {
      next()
    } else if (status === "unlogin") {
      // 未登录，提示用户去登录
      alert("请先进行登录")
      next({
        path: '/login',
        query: {
          returnUrl: to.fullPath
        }
      })
    } else {
      next({
        path: '/loading',
        query: {
          returnUrl: to.fullPath
        }
      })
    }
  } else {
    // 不需要鉴权,直接进入
    next()

  }
})



export default router;