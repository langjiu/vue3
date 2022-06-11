<template>
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    
    <h1>composition api （组合api）</h1>
    <div title="内容" class="main">
      <h3>ref 响应式变量 <br> {{title}}</h3>
      <button @click="sayHi1">按钮1</button>
      <h3>reactive 响应式对象 <br> {{student.name + ":" +  student.age + "岁"}}</h3>
      <button @click="sayHi2">按钮2</button>
      <h3>{{titleName}}</h3>
      <br>
      <div class="h3">
        <h3 v-for="(item,index) in listData" :key="index">{{item}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, reactive, onMounted} from "vue"; 
export default {
  setup() {
    //ref 响应式变量
    let title = ref("hello world")
    function sayHi1() {
      title.value = "hello vue";
    }

    //reactive 响应式对象
    const student = reactive({
      name:"小明",
      age:10,
    })
    function sayHi2() {
      student.name = "小红";
      student.age = 22;
    }
    const list = [
      "你好",
      "亲爱的用户",
      "很高兴遇见你"
    ]
    const titleName = ref("");
    onMounted(() => {
      console.log("onMounted   1");
      let i = 0;
      let t = setInterval(() => {
        titleName.value = list[i];
        i++;
        if(i === 3) {
          clearInterval(t);
        }
      },1000)
    });
      console.log("created   2");
      const listData = [
        "生命周期",
        "beforeCreate ~~~> use setup()",
        "created ~~~> use setup()",
        "mounted ~~~> onMounted",
        "beforeUpdate ~~~> onBeforeUpdate",
        "updated ~~~> onUpdated",
        "beforeUnmount ~~~> onBeforeUnmount",
        "unmounted ~~~> onUnmounted",
      ]
    return { 
      title,
      sayHi1,
      student,
      sayHi2,
      titleName,
      listData,
    }
  }
}
</script>

<style scoped>
.main { 
  width: 800px;
  height: 700px;
  margin: auto;
}
h1 {
  margin: auto;
  width: 500px;
  height: 100px;
}
.h3 {
  border:1px solid red;
}
</style>
