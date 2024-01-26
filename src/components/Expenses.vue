<template>
  <v-container>
    <v-card>
      <v-card-title>Registro de Saídas</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addExpense">
          <v-text-field
            label="Descrição"
            v-model="expense.description"
            required
          ></v-text-field>
          <v-text-field
            label="Valor"
            v-model="expense.amount"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            label="Categoria"
            v-model="expense.category"
            required
          ></v-text-field>
          <v-text-field
            label="Data"
            v-model="expense.date"
            type="date"
            required
          ></v-text-field>
          <v-btn color="secondary" type="submit">Adicionar Saída</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export default {
  data() {
    return {
      expense: {
        description: '',
        amount: 0,
        category: '',
        date: '',
      }
    };
  },
  methods: {
    async addExpense() {
      try {
        await addDoc(collection(db, 'expenses'), this.expense);
        this.resetForm();
        this.$emit('expense-added');
      } catch (error) {
        console.error('Error adding expense: ', error);
      }
    },
    resetForm() {
      this.expense = { description: '', amount: 0, category: '', date: '' };
    }
  },
};
</script>
<!-- <template>
  <v-container>
    <v-card>
      <v-card-title>Gestão de Saídas</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="saveExpense">
          <v-text-field label="Descrição" v-model="expense.description" required></v-text-field>
          <v-text-field label="Valor" type="number" v-model="expense.amount" required></v-text-field>
          <v-text-field label="Categoria" v-model="expense.category" required></v-text-field>
          <v-text-field label="Data" type="date" v-model="expense.date" required></v-text-field>
          <v-btn type="submit" color="primary">Salvar Saída</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useFirebase } from '@/composables/useFirebase'; // Supõe-se que este composable gerencia o Firebase

export default {
  setup() {
    const expense = ref({
      description: '',
      amount: 0,
      category: '',
      date: '',
    });

    const { saveData } = useFirebase();

    function saveExpense() {
      saveData('expenses', expense.value);
      expense.value = { description: '', amount: 0, category: '', date: '' }; // Limpar o formulário
    }

    return { expense, saveExpense };
  },
};
</script>
 -->