<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="app-wrapper">
      <Navbar class="wrapper"></Navbar>
      <transition name="page-transition" appear mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from '../components/navbar'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'AppLayout',
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
.wrapper
  position: fixed
  z-index: 100
  bottom: 0
  left: 0
  right: 0
  width: 100%
  height: 50px

.page-transition
  &-enter
    opacity: 0
    &-active
      transition: all 0.3s
  &-leave
    &-to
      opacity: 0
    &-active
      transition: all 0.3s
</style>
