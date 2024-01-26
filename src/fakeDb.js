// src/fakeDb.js

function initializeDb() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }
  
  function addUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
  
  function userExists(email) {
    const users = getUsers();
    return users.some(user => user.email === email);
  }
  
  function validateUser(email, password) {
    const users = getUsers();
    return users.some(user => user.email === email && user.password === password);
  }
  
  export { initializeDb, addUser, getUsers, userExists, validateUser };
  