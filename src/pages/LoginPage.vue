<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg q-mt-xl q-mb-lg fit flex justify-center">
      <h3 class="text-maintitle text-center">Авторизация</h3>
    </div>
    <div class="main">
      <div class="floating-block floating-block-shadow">
        <q-form autofocus class="">
          <div class="q-mb-lg">
            <q-input
              v-model="user.email"
              :disable="loading"
              class="input"
              no-error-icon
              borderless
              outlined
              type="text"
              placeholder="Введите Email"
            ></q-input>
            <q-input
              v-model="user.password"
              :disable="loading"
              class="input"
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
          <div class="buttons">
            <q-btn
              flat
              dense
              type="submit"
              :loading="loading"
              :disable="loading"
              @click.prevent="handleSubmit"
              class=" q-mb-lg button-shadow button-active text-medium text-white"
            >Войти</q-btn>
            <q-btn
              flat
              dense
              :disable="loading"
              :to="{ name: 'register' }"
              class=" button-shadow button-active text-medium text-white">
              Зарегистрироваться
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
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
