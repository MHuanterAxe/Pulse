<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg fit flex justify-center">
      <h3 class="text-maintitle text-center">Регистрация</h3>
    </div>
    <div class="main">
      <q-input
        v-model="user.last_name"
        :disable="loading"
        class="input q-mb-md"
        no-error-icon
        borderless
        outlined
        type="text"
        placeholder="Введите Фамилию"
      ></q-input>
      <q-input
        v-model="user.first_name"
        :disable="loading"
        class="input q-mb-md"
        no-error-icon
        borderless
        outlined
        type="text"
        placeholder="Введите Имя"
      ></q-input>
      <q-input
        v-model="user.email"
        :disable="loading"
        class="input q-mb-md"
        no-error-icon
        borderless
        outlined
        type="email"
        lazy-rules
        placeholder="Введите Email"
      ></q-input>
      <q-input
        v-model="user.password"
        :disable="loading"
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
      <q-btn
        dense
        flat
        :class="btnClass"
        :loading="loading"
        :disable="loading"
        @click.prevent="handleSubmit"
      >Зарегистрироваться</q-btn>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { Dark } from 'quasar'

export default {
  name: 'RegistrationPage',
  data () {
    return {
      isPwd: true,
      loading: false,
      user: {
        first_name: '',
        last_name: '',
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
      register: 'Auth/register',
      login: 'Auth/login'
    }),
    handleSubmit () {
      this.loading = true
      this.register(this.user)
        .then(res => {
          this.$q.notify({
            type: 'positive',
            position: 'top',
            message: res.message
          })
          this.loading = false
          this.login({ email: this.user.email, password: this.user.password })
            .then(res => {
              this.$router.push({ name: 'main' })
            })
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
