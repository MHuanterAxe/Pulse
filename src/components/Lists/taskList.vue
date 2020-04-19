<template>
  <transition name="list" appear mode="out-in">
    <div class="main q-mt-md">
      <h4 class="text-medium app-ml-20">Задачи</h4>
      <transition-group v-if="tasks" class="notes q-pt-md" name="list" appear mode="out-in">
        <task v-for="task in tasks" :key="task.task_id" :task="task"></task>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import task from '../task'
export default {
  name: 'NoteList',
  components: { task },
  computed: {
    ...mapGetters({
      tasks: 'Tasks/tasks'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'Tasks/fetchTasks'
    }),
    beforeEnter (el) {
      el.opacity = 0
    }
  },
  async created () {
    await this.fetch()
  }
}
</script>
