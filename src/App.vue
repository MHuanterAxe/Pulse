<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
document.addEventListener('deviceready', function () {
}, false)
export default {
  name: 'App',
  created () {
    this.$store.dispatch('User/setTheme', { initial: true }, { root: true })
  }
}
</script>
