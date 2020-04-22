<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg flex justify-between full-width items-center">
      <button class="button button-back">
        <router-link :to="{ name: 'add' }">
          <img src="../../statics/icons/navigation/arrow-back.svg" alt="back">
        </router-link>
      </button>
      <h3 class="text-medium text-center q-mx-md ">Заметка</h3>
      <img src="../../statics/icons/main/btn-note-unactive.svg" alt="note">
    </div>
    <div class="main q-pb-xl">
      <q-input
        class="input"
        v-model="note.label"
        no-error-icon
        borderless
        outlined
        autogrow
        autofocus
        :rules="[ val => val.length < 75 || 'Слишком длинное название заметки!' ]"
        type="text"
        placeholder="Название заметки"
      ></q-input>
      <q-input
        v-model="note.text"
        class="input"
        no-error-icon
        borderless
        outlined
        autogrow
        autofocus
        type="text"
        placeholder="Текст заметки"
      ></q-input>
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
        :disable="note.label === '' || note.label.length >= 75"
        @click="handleSubmit"
        :class="btnClass"
      >Создать</q-btn>
    </div>
  </q-page>
</template>

<script>
import btnToggle from '../../components/Add/btnToggle'
import { mapActions } from 'vuex'
import { Dark } from 'quasar'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'AddNotePage',
  data () {
    return {
      note: {
        label: '',
        text: '',
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
      add: 'Add/addNote'
    }),
    async handleSubmit () {
      await this.add(this.note)
      await this.$router.push({ name: 'add' })
    }
  }
}
</script>
