
const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { name: 'main', meta: { navId: 0 }, path: '', component: () => import('pages/MainPage.vue') },
      {
        name: 'overview',
        path: 'overview/',
        component: () => import('pages/OverviewPage'),
        children: [
          { name: 'overview-notes', meta: { navId: 1 }, path: 'notes', component: () => import('components/Lists/noteList.vue') },
          { name: 'overview-reminds', meta: { navId: 1 }, path: 'reminds', component: () => import('components/Lists/remindList.vue') },
          { name: 'overview-tasks', meta: { navId: 1 }, path: 'tasks', component: () => import('components/Lists/taskList.vue') },
          { name: 'overview-done', meta: { navId: 1 }, path: 'done', component: () => import('components/Lists/doneList.vue') }
        ]
      },
      { name: 'add', meta: { navId: 2 }, path: 'add', component: () => import('pages/AddPage') },
      { name: 'addNote', meta: { navId: 2 }, path: 'add/note', component: () => import('pages/Add/NotePage') },
      { name: 'addTask', meta: { navId: 2 }, path: 'add/task', component: () => import('pages/Add/TaskPage') },
      { name: 'lists', meta: { navId: 3 }, path: 'lists', component: () => import('pages/ListsPage') },
      { name: 'profile', meta: { navId: 4 }, path: 'profile', component: () => import('pages/ProfilePage') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout'),
    meta: {
      requiresAuth: false
    },
    children: [
      { name: 'login', path: 'login', component: () => import('pages/LoginPage.vue') },
      { name: 'register', path: 'register', component: () => import('pages/RegistrationPage.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '/'
  })
}

export default routes
