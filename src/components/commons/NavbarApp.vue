<template>
  <div v-if="this.$route.path!=='/hero-workout'">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Fitness App</v-toolbar-title>

      <div class="menu-container">
        <router-link class="menu-link" to="/">Home</router-link>
        <router-link class="menu-link" to="/about">About</router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
  <div v-else></div>
</template>

<style>
.menu-container {
  margin-left: 40px;
  display: flex;
  flex-direction: row;
}
.menu-link {
  flex: 1;
  margin: 10px;
  color: #ffffff !important;
  text-decoration: none;
}
</style>