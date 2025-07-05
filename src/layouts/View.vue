<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--router-link to="/">Go to index</!--router-link -->
      <!--router-link to="/home">Go to Home</!--router-link -->

      <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="Vuetify"
          subtitle="A Vue.js component framework"
        >

        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        :lines="false"
        density="compact"
        nav
      >
        <router-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.to">
          <v-list-item
            :value="item"
            :color="write">

            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To do List</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)

  const items = ref([
    { text: 'Home', icon: 'mdi-folder', to: "/" },
    { text: 'About', icon: 'mdi-account-multiple', to: "/home" },
  ])
</script>

<style scoped>
 a {
  text-decoration: none;
  color: #505050;
 }
</style>
