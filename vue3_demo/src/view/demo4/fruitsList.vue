<template>
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    <h1>水果列表</h1>
    <form @submit.prevent="insert">
      <div>
        <label for="">名称：</label>
        <input type="text" v-model="name">
      </div>
      <div>
        <label for="">价格：</label>
        <input type="text" v-model.number="price">
      </div>
      <button>添加</button>
    </form>
    <ul>
      <li 
        v-for="(item,index) in list" 
        :key="index"
        >
        名称：{{item.name}}，
        单价：{{item.price}}，
        数量 <button @click="decrease(index)">-</button><span>{{item.count}}</span><button @click="increase(index)">+</button>
      </li> 
    </ul>
    <h1>总数：{{totalPrive}}</h1>
  </div>
</template>

<script>
import { reactive, ref,computed } from "vue"
export default {
   setup() {
      const name = ref("");
      const price = ref(0);
      const list = reactive([]);
      
      function insert() {
        const fruit = reactive({
          name:name.value,
          price:price.value,
          count:1
        })
        list.push(fruit);
      }
      function increase(i) {
        list[i].count++
      }
      function decrease(i) {
        list[i].count--;
        if(list[i].count === 0 && confirm("是否删除数据")) {
          list.splice(i,1);
        }
      }
      const totalPrive = computed(() => {
        let sum = 0;
        list.map((v) => {
          sum += (v.count * v.price);
        })
        return sum;
      })
      return {
        name,
        price,
        list,
        insert,
        increase,
        decrease,
        totalPrive
      }
   },
}
</script>

<style></style>
