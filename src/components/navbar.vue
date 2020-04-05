<template>
  <div class="navbar">
    <button
      v-for="btn in nav"
      :key="btn.id"
      class="button"
      @click="active = btn.id"
    >
      <router-link class="button-wrapper" :to="btn.to">
        <div v-if="active === btn.id">
          <img
            class="button-image img-active"
            :src="'../statics/icons/navigation/' + btn.icon + '.svg'"
            :alt="btn.name">
          <div  class="button-name color-active">
            {{ btn.name }}
          </div>
        </div>
        <div v-else>
          <img
            class="button-image"
            :src="'../statics/icons/navigation/' + btn.icon + '.svg'"
            :alt="btn.name">
          <div class="button-name">
            {{ btn.name }}
          </div>
        </div>
      </router-link>
    </button>
  </div>
</template>

<script>
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'Navbar',
  data () {
    return {
      active: 0,
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
    navClassObject: () => (id) => {
      return [
        'button-wrapper ',
        { 'button-active': this.active === id }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: center
  width: 100%
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2)
.img-active
  fill: #7E3CB0
.button
  width: 20%
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  outline: none
  border: none
  background-color: #ffffff
  &-active
    color: #7E3CB0 !important
    .button-name
      color: #7E3CB0
  &-wrapper
    text-decoration: none
    color: #4B5457
    font-family: 'Roboto'
  &-name
    font-style: normal
    font-weight: bold
    font-size: 10px
    line-height: 10px
    text-align: center
</style>
