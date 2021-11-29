<template>
  <v-menu
    bottom
    min-width="200px"
    rounded
    offset-y
    :close-on-content-click="true"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on">
        <v-avatar color="brown" size="48">
          <span class="white--text text-h5">{{ user.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <div class="mx-auto text-center">
        <v-avatar color="brown" class="mt-3">
          <span class="white--text text-h5">{{ user.initials }}</span>
        </v-avatar>
        <h3>{{ user.fullName }}</h3>
        <p class="text-caption mt-1">
          {{ user.email }}
        </p>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item inactive> Profile </v-list-item>
          <Logout />
        </v-list-item-group>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
import Logout from "./logged-user-menu/Logout.vue";

export default {
  components: {
    Logout,
  },
  data: () => ({
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
  }),
};
</script>
