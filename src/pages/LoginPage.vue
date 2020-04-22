<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg q-mt-xl q-mb-lg fit flex justify-center">
      <h3 class="text-maintitle text-center">Авторизация</h3>
    </div>
    <div class="main q-pb-xl">
      <div class="q-mb-lg">
        <q-input
          class="input q-mb-md"
          v-model="user.email"
          :disable="loading"
          no-error-icon
          borderless
          outlined
          type="text"
          placeholder="Введите Email"
        ></q-input>
        <q-input
          class="input"
          v-model="user.password"
          :disable="loading"
          no-error-icon
          borderless
          outlined
          :type="isPwd ? 'password' : 'text'"
          placeholder="Введите Пароль"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <q-btn
        dense
        flat
        :class="btnClass"
        :loading="loading"
        :disable="loading"
        @click.prevent="handleSubmit"
      >Войти</q-btn>
      <q-btn
        dense
        flat
        :class="btnClass"
        :loading="loading"
        :disable="loading"
        :to="{ name: 'register' }"
      >Зарегистрироваться</q-btn>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { Dark } from 'quasar'
export default {
  name: 'LoginPage',
  data () {
    return {
      isPwd: true,
      loading: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    btnClass () {
      return [
        'button-main button-shadow text-medium q-mb-md',
        { 'button-dark-shadow button-dark': Dark.isActive }
      ]
    }
  },
  methods: {
    ...mapActions({
      login: 'Auth/login'
    }),
    handleSubmit () {
      this.loading = true
      this.login(this.user)
        .then(res => {
          this.$q.notify({
            type: 'positive',
            position: 'top',
            message: res.message
          })
          this.loading = false
          this.$router.push({ name: 'main' })
        })
        .catch(err => {
          this.$q.notify({
            type: 'negative',
            position: 'top',
            message: err.data.message
          })
          this.user.email = ''
          this.user.password = ''
          this.loading = false
        })
    }
  }
}
</script>
