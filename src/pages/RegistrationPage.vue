<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg fit flex justify-center">
      <h3 class="text-maintitle text-center">Регистрация</h3>
    </div>
    <div class="main">
      <div class="floating-block floating-block-shadow">
        <q-form autofocus class="">
          <div class="q-mb-lg">
            <q-input
              v-model="user.last_name"
              class="input"
              no-error-icon
              borderless
              outlined
              type="text"
              placeholder="Введите Фамилию"
            ></q-input>
            <q-input
              v-model="user.first_name"
              class="input"
              no-error-icon
              borderless
              outlined
              type="text"
              placeholder="Введите Имя"
            ></q-input>
            <q-input
              v-model="user.email"
              class="input"
              no-error-icon
              borderless
              outlined
              type="email"
              lazy-rules
              placeholder="Введите Email"
            ></q-input>
            <q-input
              v-model="user.password"
              class="input"
              no-error-icon
              borderless
              outlined
              :rules="[ val => val.length >= 6 || 'Пароль должен состоять более чем из 6 символов!']"
              lazy-rules
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
              @click.prevent="handleSubmit"
              :to="{ name: 'login' }"
              class="button button-shadow button-active text-medium text-white"
            >Зарегистрироваться</q-btn>
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
  name: 'RegistrationPage',
  data () {
    return {
      isPwd: true,
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
