<template>
  <div :class="navClass">
    <button
      v-for="btn in nav"
      :key="btn.id"
      class="button"
      @click="active = btn.id"
    >
      <router-link class="button-wrapper" :to="btn.to">
        <div>
          <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
            <img
              :class="buttonImageClass(btn.id)"
              :src="iconSrc(btn)"
              :alt="btn.name">
          </transition>
          <div  :class="buttonNameClass(btn.id)">
            {{ btn.name }}
          </div>
        </div>
      </router-link>
    </button>
  </div>
</template>

<script>
import { Dark } from 'quasar'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'Navbar',
  data () {
    return {
      active: this.$route.meta.navId || 0,
      isDark: Dark.isActive,
      nav: [
        { id: 0, name: 'Главная', icon: 'nav-pulse', to: '/' },
        { id: 1, name: 'Обзор', icon: 'nav-all-tasks', to: '/overview' },
        { id: 2, name: 'Добавить', icon: 'nav-add', to: '/add' },
        { id: 3, name: 'Папки', icon: 'nav-folders', to: '/lists' },
        { id: 4, name: 'Профиль', icon: 'nav-profile', to: '/profile' }
      ]
    }
  },
  computed: {
    navClass: () => {
      return [
        'navbar',
        { 'navbar-dark': Dark.isActive }
      ]
    },
    navClassObject: () => {
      return [
        'button-wrapper ',
        { 'button-dark': Dark.isActive }
      ]
    },
    buttonNameClass () {
      return function (id) {
        return [
          'button-name ',
          { 'button-name-dark': Dark.isActive },
          { 'button-name-active': this.active === id }
        ]
      }
    },
    buttonImageClass () {
      return function (id) {
        return [
          'button-image ',
          { 'button-image-dark': Dark.isActive },
          { 'button-image-active': this.active === id }
        ]
      }
    },
    iconSrc () {
      return function (btn) {
        return '../statics/icons/navigation/' + (this.active === btn.id ? btn.icon + '-active' : (Dark.isActive ? btn.icon + '-dark' : btn.icon)) + '.svg'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: center
  align-items: center
  height: 54px
  width: 100%
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2)
  background: #ffffff
  transition: all 0.5s ease-in-out
  &-dark
    transition: all 0.5s ease-in-out
    background: #303030
.button
  width: 20%
  display: flex
  flex-direction: column
  align-items: center
  outline: none
  border: none
  background-color: transparent
  transition: all 0.5s ease-in-out
  &-image
    transition: all 0.5s ease-in-out
    fill: #4B5457 !important
    &-active
      transition: all 0.5s ease-in-out
      fill: #7E3CB0 !important
    &-dark
      transition: all 0.5s ease-in-out
      fill: #ffffff !important
  &-wrapper
    text-decoration: none
    color: #4B5457
    font-family: 'Roboto', sans-serif
    transition: all 0.5s ease-in-out
  &-name
    font-style: normal
    font-weight: bold
    font-size: 10px
    line-height: 10px
    text-align: center
    color: #4B5457
    transition: all 0.5s ease-in-out
    &-dark
      transition: all 0.5s ease-in-out
      color: #ffffff !important
    &-active
      transition: all 0.5s ease-in-out
      color: #7E3CB0 !important
</style>
