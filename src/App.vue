<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "./components/commons/NavbarApp";
export default {
  components: { Navbar }
};
</script>
