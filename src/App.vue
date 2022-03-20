<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/Home" target="Home" text>
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn to="/About" target="About" text>
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn to="/Shop" target="Shop" text>
        <span class="mr-2">Shop</span>
      </v-btn>
      <v-btn to="/Login" target="Login" text>
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn to="/Register" target="SignUp" text>
        <span class="mr-2">Register</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
