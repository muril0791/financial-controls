// src/firebaseServices.js
import { getDatabase, ref, set, get, child } from 'firebase/database';

const database = getDatabase();

// Salvar dados
function saveData(userId, data) {
  set(ref(database, 'users/' + userId), data);
}

// Buscar dados
function fetchData(userId) {
  return get(child(ref(database), `users/${userId}`));
}

export { saveData, fetchData };
