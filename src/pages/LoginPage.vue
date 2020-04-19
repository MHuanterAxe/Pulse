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
              class="input"
              no-error-icon
              borderless
              outlined
              type="text"
              placeholder="Введите Email"
            ></q-input>
            <q-input
              v-model="user.password"
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
              @click.prevent="handleSubmit"
              class=" q-mb-lg button-shadow button-active text-medium text-white"
            >Войти</q-btn>
            <q-btn
              flat
              dense
              :to="{ name: 'register' }"
              class=" button-shadow button-active text-medium text-white">
              Зарегистрироваться
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
    <div v-if="msg" class="floating-block block-shadow">
      <h5>{{ msg }}</h5>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginPage',
  data () {
    return {
      isPwd: true,
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      msg: 'Auth/msg'
    })
  },
  methods: {
    ...mapActions({
      login: 'Auth/login'
    }),
    handleSubmit () {
      this.login(this.user)
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
