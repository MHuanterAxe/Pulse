<template>
  <div class="floating-block floating-block-shadow q-mb-lg flex justify-between">
    <nav-button
      v-for="el in buttons"
      :key="el.id"
      :button="el"
    ></nav-button>
  </div>
</template>
<script>
import navButton from './navButton'
export default {
  name: 'OverViewNavigation',
  props: ['buttons'],
  components: { navButton },
  data () {
    return {
      active: 0
    }
  },
  methods: {
  }
}
</script>
