<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    floating
    :mini-variant="miniVariant"
  >
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
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
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
  methods: {
    miniVariantToggler() {
      this.miniVariant = !this.miniVariant;
    },
  },
};
</script>
