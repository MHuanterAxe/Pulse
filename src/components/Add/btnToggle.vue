<template>
  <button @click="$emit('change', toggle)" class="button btn-toggle">
    <img v-if="toggle.isActive" :src="'../../statics/icons/main/' + toggle.icon.active + '.svg'" :alt="toggle.icon.unactive">
    <img v-else :src="'../../statics/icons/main/' + toggle.icon.default + '.svg'" :alt="toggle.icon.default">
  </button>
</template>

<script>
export default {
  name: 'BtnToggle',
  props: ['toggle']
}
</script>

<style lang="sass" scoped>
.btn-toggle
  height: 100%
  width: auto
</style>
