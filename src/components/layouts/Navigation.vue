<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    floating
    :mini-variant="miniVariant"
    :style="{ background: background }"
  >
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-btn block @click="miniVariantToggler">
        <v-icon v-if="miniVariant">mdi-chevron-double-right</v-icon>
        <v-icon v-else>mdi-chevron-double-left</v-icon>
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      miniVariant: true,
      items: [
        { title: "Dashboard", icon: "mdi-home-city", link: "/" },
        { title: "About", icon: "mdi-account", link: "about" },
      ],
    };
  },
  methods: {
    miniVariantToggler() {
      this.miniVariant = !this.miniVariant;
    },
  },
  computed: {
    background() {
      return this.$vuetify.theme.themes[this.$store.state.theme].background;
    },
  },
};
</script>
