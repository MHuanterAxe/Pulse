<template>
  <block class="q-mb-lg flex justify-between">
    <nav-button
      v-for="el in buttons"
      :key="el.id"
      :button="el"
      @change="change"
    ></nav-button>
  </block>
</template>
<script>
import { mapGetters } from 'vuex'
import block from '../block'
import navButton from './navButton'
export default {
  name: 'OverViewNavigation',
  components: { block, navButton },
  data () {
    return {
      overviewButtons: [
        { id: 0, active: true, color: 'grad-bg-red', icon: 'icon-note', count: 0, to: { name: 'overview-notes' } },
        { id: 1, active: false, color: 'grad-bg-orange', icon: 'icon-remind', count: 0, to: { name: 'overview-reminds' } },
        { id: 2, active: false, color: 'grad-bg-yellow', icon: 'icon-task', count: 0, to: { name: 'overview-tasks' } },
        { id: 3, active: false, color: 'grad-bg-lime', icon: 'icon-ready', count: 0, to: { name: 'overview-done' } }
      ]
    }
  },
  computed: {
    ...mapGetters({
      notesCount: 'Notes/count',
      tasksCount: 'Tasks/count'
    }),
    buttons () {
      return this.overviewButtons.map(el => {
        if (el.id === 0) el.count = this.notesCount
        if (el.id === 2) el.count = this.tasksCount
        return el
      })
    }
  },
  methods: {
    change (button) {
      this.overviewButtons.forEach((el) => {
        if (el.id === button.id) {
          el.active = true
          this.$router.push(button.to)
        } else {
          el.active = false
        }
        return el
      })
    }
  }
}
</script>
