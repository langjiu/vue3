<template>
  <div>
    <h1>列表</h1>
    <ul>
      <li v-for="(item,index) in demoList" :key="index">
        <router-link :to="item.value">{{item.name}}</router-link>
      </li>
      <li>-------------------------------</li>
      <li v-for="(item,index) in blogList" :key="index">
        <router-link :to="`/blog/${item.id}`">{{item.title}}</router-link>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      demoList:[
        {
          name:"axios获取小狗图片 （组合api） ",
          value:"/dog", 
        },
        {
          name:"鼠标追踪器 （组合api） ",
          value:"/orientation", 
        },
        {
          name:"水果列表 （组合api） ",
          value:"/fruits", 
        },
        {
          name:"computed计算属性 （组合api） ",
          value:"/computed", 
        },
        {
          name:"composition api （组合api）",
          value:"/setup", 
        },
        {
          name:"动态组件",
          value:"/dynamic", 
        },
        {
          name:"登录页",
          value:"/login", 
        },
      ],
      blogList:[
        {id:1,title:"html与css基础"},
        {id:2,title:"javaScript从入门到放弃"},
        {id:3,title:"精通Node"},
        {id:4,title:"从零开始学Ajax"},
        {id:5,title:"你不知道的Vue"},
      ],
    }
  },
  methods: {},
}
</script>

<style></style>
