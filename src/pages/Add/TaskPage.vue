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
      <input v-model="task.label" class="input" type="text" placeholder="Название задачи">
      <q-input name="date" no-error-icon input-class="input input-date" borderless v-model="task.date" mask="####/##/##" :rules="['date']">
        <q-popup-proxy ref="qDateProxy" transition-show="fade" transition-hide="fade">
          <q-date :subtitle="task.date" title="Дата задачи" first-day-of-week="1" flat :value="task.date" color="primary" :options="dateOptions" v-model="task.date" @input="() => $refs.qDateProxy.hide()" />
        </q-popup-proxy>
      </q-input>
      <q-input name="time" no-error-icon input-class="input input-time" borderless v-model="task.time" mask="##:##" :rules="['date']">
        <q-popup-proxy ref="qDateProxy" transition-show="fade" transition-hide="fade">
          <q-time flat format24h :options="hourOptions" :value="task.time" color="primary" v-model="task.time" @input="() => $refs.qDateProxy.hide()" />
        </q-popup-proxy>
      </q-input>
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
      <button @click="handleSubmit" class="button button-shadow button-main text-medium">Создать</button>
    </div>
  </q-page>
</template>

<script>
import btnToggle from '../../components/Add/btnToggle'
import { mapActions } from 'vuex'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'AddTaskPage',
  data () {
    return {
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
  methods: {
    ...mapActions({
      add: 'Add/addNote'
    }),
    async handleSubmit () {
      await this.add(this.note)
      await this.$router.push({ name: 'add' })
    },
    dateOptions (date) {
      return Date.parse(date) - Date.now() + 24 * 3600 * 1000 >= 0
    },
    hourOptions (hours, minutes) {
      console.log(minutes)
      return hours - new Date().getHours() >= 0
    }
  }
}
</script>
