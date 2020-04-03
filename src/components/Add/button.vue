<template>
  <q-btn :to="button.to" flat no-caps class="full-width">
    <div class="button-add flex items-center">
      <img class="icon" :src="'../statics/icons/main/' + button.icon + '.svg'" alt="el.name">
      <div class="button-title app-ml-20">
        <p class="text-subtitle">{{ button.name }}</p>
      </div>
    </div>
  </q-btn>
</template>

<script>
export default {
  name: 'addButton',
  props: ['button']
}
</script>
