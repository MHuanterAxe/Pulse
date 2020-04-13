<template>
  <div @click="$emit('change', button)" class="nav-button">
    <div :class="backgroundClass"></div>
    <img class="icon" :src="'../../statics/icons/main/' + button.icon + '.svg'" alt="">
    <h5 :class="textClass">{{ button.count }}</h5>
  </div>
</template>
<script>
export default {
  name: 'NavButton',
  props: ['button', 'count'],
  computed: {
    backgroundClass () {
      return [
        'animation',
        { 'background-unactive': !this.button.active },
        this.button.color,
        { background: this.button.active }
      ]
    },
    textClass () {
      return [
        'count text-small animation',
        { 'text-white': this.button.active },
        { 'color-primary': !this.button.active }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-button
  height: 35px
  width: 21%
  padding: 0.5em
  display: flex
  position: relative
  justify-content: space-between
  align-items: center
  cursor: pointer
.background
  position: absolute
  border-radius: 100px
  top: 0
  left: 0
  height: 35px
  z-index: 0
  width: 100%
  &-unactive
    position: absolute
    top: 0
    left: 0
    height: 35px
    width: 35px
    border-radius: 100px
    z-index: 0
.animation
  transition: all 0.3s ease-in-out
.icon
  height: 100%
  width: auto
  z-index: 10
.count
  z-index: 10
</style>
