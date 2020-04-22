<template>
  <q-page class="flex column full-height">
    <div class="page-title flex justify-between items-center q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Профиль</h3>
      <btn-toggle @change="changeTheme" :toggle="darkMode"></btn-toggle>
    </div>
    <div class="main flex column">
      <block card class="flex">
        <div class="fit row justify-between items-center">
          <h4 class="q-pl-md text-medium">{{ user.last_name }} {{ user.first_name }}</h4>
          <q-btn
            fab-mini
            flat
            icon="logout"
            color="red"
            no-caps
            @click="logout"
          ></q-btn>
        </div>
      </block>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Dark } from 'quasar'
import btnToggle from '../components/Add/btnToggle'
import block from '../components/block'
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
  components: { btnToggle, block },
  computed: {
    ...mapGetters({
      user: 'User/user'
    }),
    btnClass () {
      return [
        'button-main button-shadow text-medium text-red-8',
        { 'button-dark-shadow button-dark': Dark.isActive }
      ]
    }
  },
  methods: {
    ...mapActions({
      setUserTheme: 'User/setTheme',
      fetchUserData: 'User/fetchUserData'
    }),
    logout () {
      window.localStorage.clear()
      this.$router.push({ name: 'login' })
    },
    changeTheme () {
      this.darkMode.isActive = !this.darkMode.isActive
      this.setUserTheme({ initial: false })
    }
  },
  created () {
    this.fetchUserData()
  }
}
</script>
