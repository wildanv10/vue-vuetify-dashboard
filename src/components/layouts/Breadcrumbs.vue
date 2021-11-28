<template>
  <v-breadcrumbs :items="paths">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.href" :disabled="item.disabled">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    defaultMenu: {
      text: "Dashboard",
      disabled: false,
      href: "/",
    },
  }),
  methods: {
    getPageTitle(path) {
      const titles = String(path).split("/");
      const title = titles.pop() || null;
      return title ? title[0].toUpperCase() + title.substring(1) : "";
    },
  },
  computed: {
    paths() {
      const paths = [this.defaultMenu];
      this.$route.matched.forEach((route) => {
        if (route.path) {
          paths.push({
            text: this.getPageTitle(route.path),
            disabled: false,
            href: route.path,
          });
        }
      });
      return paths;
    },
  },
};
</script>
