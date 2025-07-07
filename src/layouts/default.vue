<template>
  <v-app>
    <Alert v-if="alertStore.showAlert" />
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from '@/layouts/View.vue'
  import Alert from '@/components/Alert.vue'

  import { useAlertStore } from '@/stores/alert.js'
  const alertStore = useAlertStore();

</script>
