<template>
  <div v-if="card" :class="cardClass">
    <slot></slot>
  </div>
  <div v-else :class="blockClass">
    <slot></slot>
  </div>
</template>

<script>
import { Dark } from 'quasar'

export default {
  name: 'block',
  props: {
    card: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    blockClass: () => {
      return [
        'floating-block floating-block-shadow',
        { 'floating-block-dark floating-block-dark-shadow': Dark.isActive }
      ]
    },
    cardClass: () => {
      return [
        'card card-shadow',
        { 'card-dark card-dark-shadow': Dark.isActive }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.floating-block
  margin: 16px 0 8px 0
  padding: 20px
  border-radius: 20px
  background: #ffffff
  &-dark
    background: #272727
    &-shadow
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.4) !important
  &-shadow
    box-shadow: 0 5px 12px rgba(108, 108, 108, 0.4)
.card
  margin: 12px 0 4px 0
  padding: 10px
  background: #ffffff
  &-dark
    background: #242424
    &-shadow
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4) !important
  &-shadow
    box-shadow: 0 3px 6px rgba(108, 108, 108, 0.4)
</style>
