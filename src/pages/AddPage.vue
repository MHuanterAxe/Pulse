<template>
  <q-page class="flex column">
    <div class="page-title q-mt-xl q-mb-lg">
      <h3 class="text-maintitle app-ml-20">Добавить</h3>
    </div>
    <div class="main">
      <block>
        <add-button v-for="el in addButtons.main" :key="el.id" :button="el"></add-button>
      </block>
      <block>
        <add-button v-for="el in addButtons.lists" :key="el.id" :button="el"></add-button>
      </block>
      <block>
        <add-button v-for="el in addButtons.other" :key="el.id" :button="el"></add-button>
      </block>
    </div>
  </q-page>
</template>

<script>
import block from '../components/block'
import addButton from '../components/Add/button'
document.addEventListener('deviceready', () => {
}, false)
export default {
  name: 'AddPage',
  data () {
    return {
      addButtons: {
        main: [
          { id: 0, name: 'Заметка', icon: 'btn-note', to: { name: 'addNote' } },
          { id: 1, name: 'Напоминание', icon: 'btn-remind', to: { name: 'addRemind' } },
          { id: 2, name: 'Задача', icon: 'btn-task', to: { name: 'addTask' } }
        ],
        lists: [
          { id: 3, name: 'Список дел', icon: 'btn-list', to: { name: 'addList' } },
          { id: 4, name: 'Папка', icon: 'btn-folder', to: { name: 'addFolder' } }
        ],
        other: [
          { id: 5, name: 'Метка', icon: 'btn-tag', to: { name: 'addTag' } },
          { id: 6, name: 'Место', icon: 'btn-place', to: { name: 'addPlace' } }
        ]
      }
    }
  },
  components: {
    block, addButton
  }
}
</script>
