<template>
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    <h1>鼠标追踪器</h1>
    <h1>X:{{x}}, Y:{{y}}</h1>
  </div>

</template>

<script>
import { ref,  onMounted, onUnmounted} from "vue"
import useMousePosition from "./hooks/useMousePosition"
export default {
  setup() {
    const {x,y} = useMousePosition()
    return {
      x,
      y,
    }
  },

}
</script>

<style>

</style>