<template>
  <div class="main q-mt-md">
    <h4 class="text-medium app-ml-20">Завершенные</h4>
    <transition-group v-if="tasks" class="notes q-pt-md" name="list" appear mode="out-in">
      <task v-for="task in tasks" :key="task.task_id" :task="task"></task>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import task from '../task'
export default {
  name: 'NoteList',
  components: { task },
  computed: {
    ...mapGetters({
      tasks: 'Tasks/tasksDone'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'Tasks/fetchDoneTasks'
    })
  },
  async created () {
    await this.fetch()
  }
}
</script>
