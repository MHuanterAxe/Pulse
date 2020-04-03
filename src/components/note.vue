<template>
  <div v-if="note" class="note card-shadow">
    <div class="note-label">
      <h5 class="text-regular color-primary full-width">{{ note.note_label }}</h5>
    </div>
    <div class="q-mt-sm">
      <p class="note-text text-regular color-secondary">{{ note.text }}</p>
    </div>
    <div class="misc flex justify-end">
      <div class="delete">
        <button @click="del" class="button btn">
          <img src="../statics/icons/main/btn-delete.svg" alt="delete">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'note',
  props: ['note'],
  methods: {
    ...mapActions({
      deleteNote: 'Notes/deleteNote'
    }),
    del () {
      this.deleteNote(this.note.note_id)
    }
  }
}
</script>

<style lang="sass">
.note
  padding: 10px
  display: flex
  flex-direction: column
.btn
  width: auto
  height: auto
</style>
