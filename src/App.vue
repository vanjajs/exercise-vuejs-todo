<template>
  <div id="app">
    <app-header></app-header>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>

</style>
