<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg fit flex justify-center">
      <h3 class="text-maintitle text-center">Регистрация</h3>
    </div>
    <div class="main">
      <div class="block block-shadow">
        <q-form autofocus class="">
          <div class="q-mb-lg">
            <input v-model="user.last_name" class="input" type="text" placeholder="Введите Фамилию">
            <input v-model="user.first_name" class="input" type="text" placeholder="Введите Имя">
            <input v-model="user.email" class="input" type="text" placeholder="Введите Email">
            <input v-model="user.password" class="input" type="text" placeholder="Введите Пароль">
          </div>
          <div class="buttons">
            <q-btn
              flat
              dense
              @click.prevent="handleSubmit"
              :to="{ name: 'login' }"
              class="button button-shadow button-active text-medium text-white"
            >Зарегистрироваться</q-btn>
          </div>
        </q-form>
      </div>
    </div>
    <div v-if="msg" class="block block-shadow">
      <h5>{{ msg }}</h5>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RegistrationPage',
  data () {
    return {
      user: {
        first_name: '',
        last_name: '',
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
      register: 'Auth/register'
    }),
    handleSubmit () {
      this.register(this.user).catch(err => console.log(err.message))
    }
  }
}
</script>
