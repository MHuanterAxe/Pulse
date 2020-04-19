<template>
  <transition name="list" appear mode="out-in">
    <div class="main q-mt-md">
      <h4 class="text-medium app-ml-20">Завершенные</h4>
      <transition-group v-if="notes" class="notes q-pt-md" name="list" appear mode="out-in">
        <note v-for="note in notes" :key="note.note_id" :note="note"></note>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import note from '../note'
export default {
  name: 'NoteList',
  components: { note },
  computed: {
    ...mapGetters({
      notes: 'Notes/notes'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'Notes/fetchNotes'
    })
  },
  async created () {
    await this.fetch()
  }
}
</script>
