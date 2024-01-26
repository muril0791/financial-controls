import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

// Criar conta de usuário
function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Realizar login
function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Fazer logout
function logoutUser() {
  return signOut(auth);
}

export { createUser, loginUser, logoutUser };

