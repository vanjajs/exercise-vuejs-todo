<template>
  <div class="card">
    <div class="card-header">
      <h5>Add a Todo</h5>
    </div>
    <div class="card-body">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Title" v-model="title">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Description" v-model="description">
      </div>
      <button class="btn btn-primary" @click="addTodo">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      addTodo() {
        const todoData = {
          title: this.title,
          description: this.description
        }
        this.$store.commit('addTodo', todoData);
        this.title = '';
        this.description = '';
      }
    }
  }
</script>

<style lang="css">
</style>
