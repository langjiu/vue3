<template>
  <div>
    <h1>登录页</h1>
    <form action="" @submit.prevent="login">
      <div>
        <label for="">用户名：</label>
        <input type="text" v-model="userName">
      </div>
      <div>
        <label for="">密码：</label>
        <input type="password" v-model="passWord">
      </div>
      <button><h1>登录</h1></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      userName:"",
      passWord:"",
    }
  },
  methods: {
    login() {
      if(this.userName === "admin" && this.passWord === "888888") {
        this.$router.push("/");
        localStorage.setItem("token","123456");
      } else {
        alert("用户名或者密码错误")
      }
    }
  },
}
</script>

<style></style>
