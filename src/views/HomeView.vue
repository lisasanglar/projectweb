<template>
  <div className="home">
    <HelloWorld msg="Welcome to your ToDo List App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scope>
img {
  width: 500px;
  position: absolute;
  top: 50%;
  transform: translate(70%, -50%);
}

.image {
  display: flex;
  align-items: center;
  height: 500px;;
}

.home {
  padding-top: 60px;
  text-align: center;
}
</style>
