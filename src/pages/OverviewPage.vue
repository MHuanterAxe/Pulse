<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Обзор</h3>
    </div>
    <div v-if="notes" class="main">
      <navigation :buttons="overviewButtons"></navigation>
      <div v-if="notes" class="notes q-pt-md">
        <note v-for="note in notes" :key="note.note_id" :note="note"></note>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import navigation from '../components/Overview/navigation'
import note from '../components/note'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'OverviewPage',
  data () {
    return {
      overviewButtons: {
        notes: { id: 0, active: true, color: 'grad-bg-red', icon: 'icon-note', count: 0, to: { name: '' } },
        reminds: { id: 1, active: false, color: 'grad-bg-orange', icon: 'icon-remind', count: 0, to: { name: '' } },
        tasks: { id: 2, active: false, color: 'grad-bg-yellow', icon: 'icon-task', count: 0, to: { name: '' } },
        done: { id: 3, active: false, color: 'grad-bg-lime', icon: 'icon-ready', count: 0, to: { name: '' } }
      }
    }
  },
  components: {
    note, navigation
  },
  computed: {
    ...mapGetters({
      notes: 'Notes/notes',
      notesCount: 'Notes/count'
    })
  },
  methods: {
    ...mapActions({
      fetchNotes: 'Notes/fetchNotes'
    })
  },
  async mounted () {
    await this.fetchNotes()
  }
}
</script>
