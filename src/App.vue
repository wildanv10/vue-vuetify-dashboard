<template>
  <v-app>
    <Navigation />
    <Header />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Navigation from "./components/layouts/Navigation.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    Navigation,
  },
  data: () => ({
    //
  }),
};
</script>
