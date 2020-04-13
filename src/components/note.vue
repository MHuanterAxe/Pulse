<template>
  <block card v-if="note" class="note">
    <div class="note-label">
      <h5 class="text-regular color-primary full-width">{{ note.note_label }}</h5>
    </div>
    <div v-if="note.text" class="q-mt-sm">
      <p class="note-text text-regular color-secondary">{{ note.text }}</p>
    </div>
    <div class="misc flex justify-end">
      <div class="delete">
        <button @click="del" class="button btn">
          <img src="../statics/icons/main/btn-delete.svg" alt="delete">
        </button>
      </div>
    </div>
  </block>
</template>

<script>
import { mapActions } from 'vuex'
import block from './block'
export default {
  name: 'note',
  props: ['note'],
  components: { block },
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
  display: flex
  flex-direction: column
.btn
  width: auto
  height: auto
</style>
