<template>
  <v-dialog v-model="dialog" persistent min-width="290" max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item inactive v-bind="attrs" v-on="on"> Logout </v-list-item>
    </template>
    <v-card>
      <v-card-title> Are you sure want to logout? </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey lighten-1" text @click="dialog = false"> Yes </v-btn>
        <v-btn text @click="dialog = false"> No </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
