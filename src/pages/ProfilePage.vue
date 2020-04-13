<template>
  <q-page class="flex column">
    <div class="page-title flex justify-between items-center q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Профиль</h3>
      <btn-toggle @change="changeTheme" :toggle="darkMode"></btn-toggle>
    </div>
    <div class="main">
      <div class="floating-block">
        <button @click="logout" class="button button-add button-shadow text-white bg-red-8">Выйти</button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Dark } from 'quasar'
import btnToggle from '../components/Add/btnToggle'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'ProfilePage',
  data () {
    return {
      darkMode: {
        id: 0,
        isActive: Dark.isActive,
        icon: {
          default: 'btn-dark',
          active: 'btn-dark-active'
        }
      }
    }
  },
  components: { btnToggle },
  methods: {
    logout () {
      window.localStorage.clear()
      this.$router.push({ name: 'login' })
    },
    changeTheme () {
      this.darkMode.isActive = !this.darkMode.isActive
      Dark.set(this.darkMode.isActive)
    }
  }
}
</script>
