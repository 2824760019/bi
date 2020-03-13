import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login/Login'
import Index from '../page/Index/Index'
import solution from '../page/solution/solution'
import product from '../page/product/product'
import Deatils from '../page/product/deatils/Deatils'
import newscenter from '../page/newscenter/newscenter'
import personal from '../page/personal/personal'
import collection from '../page/collection/collection'
import settlement from '../page/settlement/settlement'
import signUp from '../page/signUp/signUp'
import shangcheng from '../page/shangcheng/shang'
import lveyou from '../page/lveyou/lveyou'
import huodong from '../page/huodong/huodong'
import saishi from '../page/saishi/saishi'
import malasong from '../page/malasong/malasong'
Vue.use(Router)
const router= new Router({
// export default signUp Router({
  routes: [
    {path: '/login', name: 'login', component: login},
    {path: '/Index', name: 'Index', component: Index},
    {path: '*', name: 'login', component: login},
    {path: '/solution', name: 'solution', component: solution},
    {path: '/signUp', name: 'signUp', component: signUp},
    {path: '/newscenter', name: 'newscenter', component: newscenter},
    {path: '/collection', name: 'collection', component: collection,meta: {requireAuth: true}},
    {path: '/product', name: 'product', component: product},
    {path: '/Deatils', name: 'Deatils', component: Deatils},
    {path: '/settlement', name: 'settlement', component: settlement},
    {path: '/personal', name: 'newscenter', component: personal,meta: {requireAuth: true,},},
    {path: '/shangcheng', name: 'shangcheng', component:shangcheng},
    {path: '/lveyou', name: 'lveyou', component:lveyou},
    {path: '/huodong', name: 'huodong', component:huodong},
    {path: '/saishi', name: 'saishi', component:saishi},
    {path: '/malasong', name: 'malasong', component:malasong},
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (window.localStorage.getItem('token')) {  // 获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})
export default router
