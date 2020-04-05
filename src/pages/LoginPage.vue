<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg q-mt-xl q-mb-lg fit flex justify-center">
      <h3 class="text-maintitle text-center">Авторизация</h3>
    </div>
    <div class="main">
      <div class="floating-block floating-block-shadow">
        <q-form autofocus class="">
          <div class="q-mb-lg">
            <input v-model="user.email" class="input" type="text" placeholder="Введите Email">
            <input v-model="user.password" class="input" type="text" placeholder="Введите Пароль">
          </div>
          <div class="buttons">
            <q-btn
              flat
              dense
              type="submit"
              @click.prevent="handleSubmit"
              class="button q-mb-lg button-shadow button-active text-medium text-white"
            >Войти</q-btn>
            <q-btn
              flat
              dense
              :to="{ name: 'register' }"
              class="button button-shadow button-active text-medium text-white">
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
