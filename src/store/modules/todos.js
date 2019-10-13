import axios from 'axios';

const state = {
  todos: [
    
  ]
};

const getters = {
  allTodos: (state) => {
    return state.todos
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    console.log(response);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};