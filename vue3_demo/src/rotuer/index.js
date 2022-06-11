import { createRouter, createWebHashHistory } from "vue-router"
import Dog from "../../src/view/demo4/dogImg.vue"
import Orientation from "../../src/view/demo4/orientationXY.vue"
import Fruits from "../../src/view/demo4/fruitsList.vue"
import Computed from "../../src/view/demo3/Computed.vue"
import Setup from "../../src/view/demo3/compositionApi.vue"
import List from "../../src/view/demo2/router_List.vue"
import Dynamic from "../../src/view/demo1/components_demo.vue"
import Blog from "../../src/components/Blog.vue"
import Login from "../../src/components/Login.vue"

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      component:List,
    },
    {
      path:"/blog/:id",
      component:Blog,
    },
    {
      path:"/login",
      component:Login,
    },
    {
      path:"/setup",
      component:Setup,
    },
    {
      path:"/computed",
      component:Computed,
    },
    {
      path:"/dynamic",
      component:Dynamic,
    },
    {
      path:"/fruits",
      component:Fruits,
    },
    {
      path:"/orientation",
      component:Orientation,
    },
    {
      path:"/dog",
      component:Dog,
    }
  ]
});
// 导航守卫、路由守卫、路由拦截
router.beforeEach((to,from,next) => {
  console.log(to,"to");
  console.log(from,"from");
  //验证token, 只有存在token的时候，才能跳转到内容页。

  let token = localStorage.getItem("token")
  if(token || to.path === "/login") {
    next();
  } else {
    next("/login");
  }
  
})
export default router;