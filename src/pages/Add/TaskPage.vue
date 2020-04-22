<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg flex justify-between full-width items-center">
      <button class="button button-back">
        <router-link :to="{ name: 'add' }">
          <img src="../../statics/icons/navigation/arrow-back.svg" alt="back">
        </router-link>
      </button>
      <h3 class="text-medium text-center q-mx-md ">Задача</h3>
      <img src="../../statics/icons/main/btn-note-unactive.svg" alt="note">
    </div>
    <div class="main q-pb-xl">
      <q-input
        class="input"
        v-model="task.label"
        no-error-icon
        borderless
        outlined
        autogrow
        autofocus
        :rules="[ val => val.length < 75 || 'Слишком длинное название задачи!' ]"
        type="text"
        placeholder="Название задачи"
      ></q-input>
      <div class="flex justify-between">
        <q-input
          name="date"
          class="input input-date"
          no-error-icon
          borderless
          outlined
          placeholder="Дата"
          :value="now.date"
          v-model="task.date"
          :rules="['date']"
        >
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="fade"
            transition-hide="fade"
          >
            <q-date
              title="Дата задачи"
              first-day-of-week="1"
              flat
              color="primary"
              :options="dateOptions"
              v-model="task.date"
              @input="() => $refs.qDateProxy.hide()"
            />
          </q-popup-proxy>
        </q-input>
        <q-input
          name="time"
          class="input input-time"
          no-error-icon
          borderless
          outlined
          placeholder="Время"
          v-model="task.time"
          :rules="['time']">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="fade"
            transition-hide="fade">
            <q-time
              flat
              format24h
              :options="timeOptions"
              color="primary"
              v-model="task.time"
              @input="() => $refs.qDateProxy.hide()"
            />
          </q-popup-proxy>
        </q-input>
      </div>
      <div class="attach">
        <h3 class="text-medium">Прикрепить</h3>
        <div class="toggles">
          <btn-toggle
            v-for="el in toggles"
            :key="el.id"
            :toggle="el"
          ></btn-toggle>
        </div>
      </div>
      <q-btn
        dense
        flat
        :disable="task.label === '' || task.label.length >= 75"
        @click="handleSubmit"
        :class="btnClass"
      >Создать</q-btn>
    </div>
  </q-page>
</template>

<script>
import { date, Dark } from 'quasar'
import btnToggle from '../../components/Add/btnToggle'
import { mapActions } from 'vuex'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'AddTaskPage',
  data () {
    return {
      now: {
        date: date.formatDate(Date.now(), 'DD/MM/YYYY') || '',
        time: date.formatDate(Date.now(), 'HH:mm') || ''
      },
      task: {
        label: '',
        date: '',
        time: '',
        folder_id: 1
      },
      toggles: [
        {
          id: 0,
          isActive: false,
          icon: {
            default: 'btn-tag-unactive',
            active: 'btn-tag'
          }
        },
        {
          id: 1,
          isActive: false,
          icon: {
            default: 'btn-place-unactive',
            active: 'btn-place'
          }
        },
        {
          id: 2,
          isActive: false,
          icon: {
            default: 'btn-folder-unactive',
            active: 'btn-folder'
          }
        }
      ]
    }
  },
  components: { btnToggle },
  computed: {
    btnClass () {
      return [
        'button-main button-shadow text-medium',
        { 'button-dark-shadow button-dark': Dark.isActive }
      ]
    }
  },
  methods: {
    ...mapActions({
      add: 'Add/addTask'
    }),
    async handleSubmit () {
      if (this.task.date === '') {
        this.task.date = date.formatDate(Date.now(), 'DD/MM/YYYY')
      }
      await this.add(this.task)
      await this.$router.push({ name: 'add' })
    },
    dateOptions (d) {
      return Date.parse(d) - Date.now() + 24 * 3600 * 1000 >= 0
    },
    timeOptions (hr, min) {
      if (this.task.date !== '') {
        if (date.formatDate(Date.now(), 'DD/MM/YYYY') === date.formatDate(this.task.date, 'DD/MM/YYYY')) {
          return hr - new Date().getHours() >= 0
        }
      } else {
        return hr - new Date().getHours() >= 0
      }
    }
  }
}
</script>
