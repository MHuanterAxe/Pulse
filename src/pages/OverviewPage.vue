<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Обзор</h3>
    </div>
    <div class="main">
      <navigation></navigation>
      <transition name="list" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import navigation from '../components/Overview/navigation'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'OverviewPage',
  data () {
    return {
    }
  },
  components: {
    navigation
  },
  methods: {
    ...mapActions({
      fetchTasks: 'Tasks/fetchTasks',
      fetchDoneTasks: 'Tasks/fetchDoneTasks'
    })
  },
  mounted () {
    this.fetchTasks()
    this.fetchDoneTasks()
    this.$router.push({ name: 'overview-notes' })
  }
}
</script>
