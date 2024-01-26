<template>
  <v-app :dark="darkMode" :class="{ 'dark-background': darkMode }">
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      :color="darkMode ? 'grey darken-4' : 'blue lighten-2'"
      dark
    >
      <v-list>
        <v-list-item @click="showIncomesModal = true">
          <v-list-item-title>Gestão de Entradas</v-list-item-title>
        </v-list-item>
        <v-list-item @click="showExpensesModal = true">
          <v-list-item-title>Gestão de Saídas</v-list-item-title>
        </v-list-item>
        <!-- Adicionar outros itens de lista aqui -->
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app :color="darkMode ? 'grey darken-4' : 'blue lighten-2'" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard Financeiro</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="darkMode = !darkMode">
        <v-icon>{{ darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <v-row justify="space-around">
          <v-col cols="12" md="5">
            <v-card outlined :color="darkMode ? 'grey darken-3' : 'white'">
              <v-card-title>Resumo</v-card-title>
              <v-card-text>
                <div>Entrada Total: R$ {{ totalIncome }}</div>
                <div>Saída Total: R$ {{ totalExpense }}</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="5">
            <!-- Componente de gráfico aqui -->
            <chart-test />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Dialogs for Incomes and Expenses -->
    <v-dialog v-model="showIncomesModal" persistent max-width="600px">
      <incomes-component @close-dialog="showIncomesModal = false" />
    </v-dialog>

    <v-dialog v-model="showExpensesModal" persistent max-width="600px">
      <expenses-component @close-dialog="showExpensesModal = false" />
    </v-dialog>
  </v-app>
</template>

<script>
import IncomesComponent from '../components/Incomes.vue';
import ExpensesComponent from '../components/Expenses.vue';


export default {
  components: {
    IncomesComponent,
    ExpensesComponent,
  },
  data() {
    return {
      drawer: false,
      darkMode: false,
      showIncomesModal: false,
      showExpensesModal: false,
      totalIncome: 0, // Esses valores devem ser carregados ou calculados com base nos dados do usuário
      totalExpense: 0,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    // Seus outros métodos aqui...
  },
};
</script>

<style scoped>
.dark-background {
  background-color: #121212; /* Dark mode background */
}
</style>
