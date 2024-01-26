<template>
  <v-container>
    <v-card>
      <v-card-title>Registro de Entradas</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addIncome">
          <v-text-field
            label="Descrição"
            v-model="income.description"
            required
          ></v-text-field>
          <v-text-field
            label="Valor"
            v-model="income.amount"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            label="Categoria"
            v-model="income.category"
            required
          ></v-text-field>
          <v-text-field
            label="Data"
            v-model="income.date"
            type="date"
            required
          ></v-text-field>
          <v-btn color="primary" type="submit">Adicionar Entrada</v-btn>
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
      income: {
        description: '',
        amount: 0,
        category: '',
        date: '',
      }
    };
  },
  methods: {
    async addIncome() {
      try {
        await addDoc(collection(db, 'incomes'), this.income);
        this.resetForm();
        this.$emit('income-added');
      } catch (error) {
        console.error('Error adding income: ', error);
      }
    },
    resetForm() {
      this.income = { description: '', amount: 0, category: '', date: '' };
    }
  },
};
</script>
<!-- <template>
  <v-container>
    <v-card>
      <v-card-title>Gestão de Entradas</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="saveIncome">
          <v-text-field label="Descrição" v-model="income.description" required></v-text-field>
          <v-text-field label="Valor" type="number" v-model="income.amount" required></v-text-field>
          <v-text-field label="Categoria" v-model="income.category" required></v-text-field>
          <v-text-field label="Data" type="date" v-model="income.date" required></v-text-field>
          <v-btn type="submit" color="primary">Salvar Entrada</v-btn>
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
    const income = ref({
      description: '',
      amount: 0,
      category: '',
      date: '',
    });

    const { saveData } = useFirebase();

    function saveIncome() {
      saveData('incomes', income.value);
      income.value = { description: '', amount: 0, category: '', date: '' }; // Limpar o formulário
    }

    return { income, saveIncome };
  },
};
</script>
 -->