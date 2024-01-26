<template>
  <v-container fluid class="d-flex justify-center align-center">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <Login v-if="showLogin" @show-register="showRegister = true"></Login>

        <Register v-else @show-login="showRegister = false"></Register>

        <v-btn @click="toggleView" color="primary">
          {{ showLogin ? "Criar Conta" : "Voltar ao Login" }}
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="8"> </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {
    toggleView() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>
  
<style scoped></style>
  