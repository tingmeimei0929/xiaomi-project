<template>
  <div id="app">
    <router-view :key="key">
        <router-view></router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  activated: function() {
    this.getCase()
  },
  computed:{
    key() {
      return this.$route.path + Math.random()
    }
  }
}
</script>
