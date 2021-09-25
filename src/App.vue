<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.fillcontain{
  height: 100%;
  width: 100%;
}
</style>
