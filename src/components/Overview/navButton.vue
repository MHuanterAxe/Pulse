<template>
  <div class="nav-button">
    <div :class="backgroundClass"></div>
    <img class="icon" :src="'../../statics/icons/main/' + button.icon + '.svg'" alt="">
    <h5 :class="textClass">{{ button.count }}</h5>
  </div>
</template>
<script>
export default {
  name: 'NavButton',
  props: ['button'],
  computed: {
    backgroundClass () {
      return [
        { 'background-unactive': !this.button.active },
        this.button.color,
        { background: this.button.active }
      ]
    },
    textClass () {
      return [
        'count text-small',
        { 'text-white': this.button.active },
        { 'color-primary': !this.button.active }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-button
  height: auto
  width: 20%
  padding: 0.5em
  display: flex
  position: relative
  justify-content: space-between
  cursor: pointer
.background
  position: absolute
  border-radius: 100px
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -1
  &-unactive
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 45%
    border-radius: 100px
    z-index: -1
.icon
  height: 100%
  width: auto
</style>
