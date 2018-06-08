<template>
  <div class="list-group">
    LIST
    <div
      class="list-group-item list-group-item-action flex-column align-items-start"
      v-for="(todo, i) in todos"
      :class="{completed: todo.state === 'completed'}">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ todo.title }}</h5>
        <small class="pointer" @click="deleteTodo(i)">x</small>
      </div>
      <p class="mb-1">{{ todo.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      todos() {
        return this.$store.getters.todos;
      }
    },
    methods: {
      deleteTodo(index) {
        if (confirm('Are you sure?')) {
          this.$store.commit('deleteTodo', index);
        }
      }
    }
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
