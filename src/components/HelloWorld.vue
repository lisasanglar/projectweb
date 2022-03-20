<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <p>
      This application has been designed to facilitate the organisation of your tasks
    </p>
    <br>
    <br>
    <h3>Create your account to access your saved ToDo Lists</h3>
    <router-link :to="{ name: 'signup'}" target="_blank">Sign up</router-link>
    <br>
    <br>
    <h3>Connect to your own account to access rou saved ToDo Lists</h3>
    <router-link :to="{ name: 'signup'}" target="_blank">Sign up</router-link>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #2554FF;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
