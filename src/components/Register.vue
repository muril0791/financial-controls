<template>
    <v-container>
      <v-card class="pa-4">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Username"
            v-model="username"
            :rules="usernameRules"
            required
          ></v-text-field>
  
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
  
          <v-text-field
            label="Senha"
            v-model="password"
            :rules="passwordRules"
            type="password"
            required
          ></v-text-field>
  
          <v-text-field
            label="Confirmar Senha"
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            type="password"
            required
          ></v-text-field>
  
          <v-btn color="primary" @click="register" :disabled="!valid">Cadastrar</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  import { getDatabase, ref, set } from 'firebase/database';
  
  export default {
    data() {
      return {
        valid: false,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        usernameRules: [
          v => !!v || 'Username é necessário',
          v => v.length <= 20 || 'Username não pode ter mais de 20 caracteres',
        ],
        emailRules: [
          v => !!v || 'E-mail é necessário',
          v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
        ],
        passwordRules: [
          v => !!v || 'Senha é necessária',
          v => v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres',
        ],
        confirmPasswordRules: [
          v => !!v || 'Confirmar senha é necessário',
          v => v === this.password || 'As senhas não coincidem'
        ]
      };
    },
    methods: {
      async register() {
        if (this.$refs.form.validate()) {
          const auth = getAuth();
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
            const db = getDatabase();
            await set(ref(db, 'users/' + userCredential.user.uid), {
              username: this.username,
              email: this.email
              // Não armazene a senha; o Firebase já cuida disso.
            });
            alert('Usuário cadastrado com sucesso!');
            this.$router.push({ name: 'Login' });
          } catch (error) {
            alert('Erro no cadastro: ' + error.message);
          }
        }
      }
    }
  };
  </script>
  