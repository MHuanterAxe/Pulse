<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Профиль</h3>
    </div>
    <div class="main">
      <div class="block">
        <button @click="logout" class="button button-add button-shadow text-white bg-red-8">Выйти</button>
      </div>
    </div>
  </q-page>
</template>

<script>
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'ProfilePage',
  methods: {
    logout () {
      window.localStorage.clear()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
