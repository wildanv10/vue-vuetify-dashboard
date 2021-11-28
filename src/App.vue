<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layouts/Header.vue";

export default {
  name: "Dashboard",
  components: { Header },
  data: () => ({
    //
  }),
};
</script>
