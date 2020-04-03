<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="app-wrapper">
      <transition name="page-transition" appear mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
