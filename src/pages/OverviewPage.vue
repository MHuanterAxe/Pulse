<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Обзор</h3>
    </div>
    <div class="main">
      <div class="block block-shadow q-mb-lg">
        Заметки
      </div>
      <div v-if="notes" class="notes">
        <note v-for="note in notes" :key="note.note_id" :note="note"></note>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import note from '../components/note'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'OverviewPage',
  components: {
    note
  },
  computed: {
    ...mapGetters({
      notes: 'Notes/notes'
    })
  },
  methods: {
    ...mapActions({
      fetchNotes: 'Notes/fetchNotes'
    })
  },
  created () {
    this.fetchNotes()
  }
}
</script>
