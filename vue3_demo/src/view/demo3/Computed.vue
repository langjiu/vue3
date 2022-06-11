<template>
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    <h1>苹果 0.5元一斤</h1>
    <div class="div1">
      <button @click="decrease"><h2>-</h2></button>
      <span><h2>{{number}}</h2></span>
      <button @click="increase"><h2>+</h2></button>
    </div>
    <h2>总价：{{totalPrice}}</h2>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import counter from "./counter.js"
export default {
  setup() {
    const number =  ref(0)
    const {increase, decrease}  = counter(number);
    const totalPrice = computed(() => {
      return number.value * 0.5
    })
    return {
      number,
      decrease,
      increase,
      totalPrice
    }
  }
}
</script>

<style>
.div1{
  display: flex;
}
</style>