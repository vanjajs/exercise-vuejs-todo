import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  mutations: {
    addTodo(state, { title, description }) {
      state.todos.push({
        title: title,
        description: description,
        state: 'active'
      });
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    }
  }
});
