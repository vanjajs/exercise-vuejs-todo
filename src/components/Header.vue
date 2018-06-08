<template>
  <nav class="navbar navbar navbar-expand-sm navbar-dark bg-primary">
    <router-link to="/" class="navbar-brand">Todo app</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/" tag="li" activeClass="active"><a class="nav-link">List</a></router-link>
        <router-link to="/new" tag="li" activeClass="active"><a class="nav-link">New</a></router-link>
      </ul>
    </div>
  </nav>
</template>
