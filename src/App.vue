<template>
  <v-app :style="{ background: background }">
    <!-- <v-app> -->
    <Navigation />
    <Header />
    <v-main>
      <Breadcrumbs />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Navigation from "./components/layouts/Navigation.vue";
import Breadcrumbs from "./components/layouts/Breadcrumbs.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    Navigation,
    Breadcrumbs,
  },
  mounted() {
    this.$store.dispatch("setTheme", this.$vuetify.theme.dark);
  },
  computed: {
    background() {
      return this.$vuetify.theme.themes[this.$store.state.theme].background;
    },
  },
};
</script>
