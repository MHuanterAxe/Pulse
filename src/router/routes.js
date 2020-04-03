
const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { name: 'main', path: '', component: () => import('pages/MainPage.vue') },
      { name: 'overview', path: 'overview', component: () => import('pages/OverviewPage') },
      { name: 'add', path: 'add', component: () => import('pages/AddPage') },
      { name: 'addNote', path: 'add/note', component: () => import('pages/Add/NotePage') },
      { name: 'lists', path: 'lists', component: () => import('pages/ListsPage') },
      { name: 'profile', path: 'profile', component: () => import('pages/ProfilePage') }
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
