<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="password"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login()">
        Login
      </v-btn>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="logout()">
        Sign out
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../plugins/firebase";

export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "password is required",
      (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    login() {
      //const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User=" + user);
          this.LoginActive = false;
          this.$router.replace("/Shop");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    },
    logout() {
      signOut(auth)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
