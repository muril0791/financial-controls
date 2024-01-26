<template>
    <v-container>
      <v-card class="pa-4">
        <v-form>
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
  
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      return { router };
    },
    data() {
      return {
        email: '',
        password: '',
        emailRules: [
          v => !!v || 'E-mail é necessário',
          v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
        ],
        passwordRules: [
          v => !!v || 'Senha é necessária',
          v => v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres',
        ]
      };
    },
    methods: {
      async login() {
        const auth = getAuth();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          // Definir o estado de autenticação no armazenamento local (ou em Vuex se estiver usando)
          localStorage.setItem('isAuthenticated', 'true');
          // Salvar também o uid do usuário, que pode ser útil para futuras consultas ao banco de dados
          localStorage.setItem('userId', userCredential.user.uid);
          this.router.push({ name: 'Home' });
        } catch (error) {
          alert('Erro no login: ' + error.message);
        }
      }
    }
  };
  </script>
  