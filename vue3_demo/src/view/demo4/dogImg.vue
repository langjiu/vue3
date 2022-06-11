<template>
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    <h1>写一个公用方法获取小狗图片  axios + ts</h1>

    <h1 v-if="loading">Loading!...</h1>
    <img v-if="loaded" :src="result[0].url">
  </div>
</template>

<script lang="ts">
import {watch} from "vue"
import useURLLoader from "./hooks/useURLLoader"
interface DataResult {
  message: string;
  status: string;
}
interface CatResult {
  id:string,
  url:string,
  width:number,
  height:number,
}
export default {
  setup() {
    const {loading,result,loaded,} = useURLLoader<CatResult[]>("https://api.thecatapi.com/v1/images/search?limit=1");
    watch(result,() => {
      if (result.value) {
        console.log('value',result.value[0].url);
      }
    }) 
     
    return {
      loading,
      result,
      loaded,
    }
  },
}
</script>

<style>

</style>