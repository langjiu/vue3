<template>
  <div>
    <router-link to="/"><button>返回首页</button></router-link>
    <h1>博客详情：{{$route.params.id}}</h1>
    <h1>{{blogCountent}}</h1>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blogCountent:"",
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getBlogDataById(id);
  },
  methods: {
    getBlogDataById(id) {
      switch(id) {
        case "1":this.blogCountent = "切图必备技能";break;
        case "2":this.blogCountent = "javaScript很重要";break;
        case "3":this.blogCountent = "node前端开发运行环境";break;
        case "4":this.blogCountent = "前后台数据交互";break;
        case "5":this.blogCountent = "组件化模块开发";break;
      }
    }
  },
}
</script>

<style></style>
