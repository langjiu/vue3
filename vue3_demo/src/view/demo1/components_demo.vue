<template>
<!-- 遍历组件 -->
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    <h1>遍历组件</h1>
    <component :is="item" v-for="(item,index) in list" key="index"></component>
  </div>
</template>

<script>
import MyTop from "./MyTop.vue"
import MyBanner from "./MyBanner.vue"
import MyContainer from "./MyContainer.vue"
import MyFooter from "./MyFooter.vue"
export default {
  name: 'index',
  components: {
    MyTop,
    MyBanner,
    MyContainer,
    MyFooter,
  },
  data() {
    return {
      list:[
        "MyTop",
        "MyBanner",
        "MyContainer",
        "MyFooter"
      ]
    }
  },
  methods: {},
}
</script>

<style></style>
