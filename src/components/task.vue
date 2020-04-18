<template>
  <block card v-if="task" class="task fit row">
    <div class="col-2 flex justify-center items-center">
      <q-checkbox v-model="task.completed"></q-checkbox>
    </div>
    <div class="col-8">
      <div class="task-label">
        <h5 :class="taskLabelClass">{{ task.task_label }}</h5>
      </div>
      <div v-if="task.task_list_label !== 'Все задачи'" class="q-mt-sm">
        <p :class="taskTextClass">{{ task.task_list_label }}</p>
      </div>
      <div class="q-mt-sm">
        <p :class="taskTextClass">{{ taskDate }}</p>
      </div>
    </div>
    <div class="col-2 flex justify-center items-center">
      <div class="delete">
        <button @click="del" class="button btn">
          <img src="../statics/icons/main/btn-delete.svg" alt="delete">
        </button>
      </div>
    </div>
  </block>
</template>

<script>
import { Dark, date } from 'quasar'
import { mapActions } from 'vuex'
import block from './block'
export default {
  name: 'note',
  props: ['task'],
  components: { block },
  computed: {
    taskLabelClass () {
      return [
        'text-regular color-primary full-width',
        { 'color-primary-white': Dark.isActive }
      ]
    },
    taskTextClass () {
      return [
        'text-regular color-secondary',
        { 'color-secondary-white': Dark.isActive }
      ]
    },
    taskDate () {
      return date.formatDate(this.task.date, 'DD MMMM YYYY')
    }
  },
  methods: {
    ...mapActions({
      deleteTask: 'Tasks/deleteTask'
    }),
    del () {
      this.deleteTask(this.task.task_id)
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
