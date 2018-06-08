import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TodoList from './components/TodoList.vue';
import NewTodo from './components/NewTodo.vue';

const routes = [
  { path: '', component: TodoList },
  { path: '/new', component: NewTodo }
];

export default new VueRouter({
  mode: 'history',
  routes
});
