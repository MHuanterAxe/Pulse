<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg flex justify-between full-width items-center">
      <button class="button button-back">
        <router-link :to="{ name: 'add' }">
          <img src="../../statics/icons/navigation/arrow-back.svg" alt="back">
        </router-link>
      </button>
      <h3 class="text-medium text-center q-mx-md ">Добавить</h3>
      <img src="../../statics/icons/main/btn-note-unactive.svg" alt="note">
    </div>
    <div class="main q-pb-xl q-mb-xl">
      <div class="q-mb-md">
        <input v-model="note.label" class="input" type="text" placeholder="Название заметки">
      </div>
      <div class="q-mb-md">
        <input v-model="note.text" class="textarea" type="text" placeholder="Текст заметки">
      </div>
    </div>
    <button @click="handleSubmit" class="button button-shadow button-active text-medium text-white">Создать</button>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
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
      }
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
