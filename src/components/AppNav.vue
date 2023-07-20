<script>
import { store } from '../store';
export default {
  data(){
    return {
      searchString: '',
      store,
    };
  },

  methods: {
    executeSearch(){
      this.store.search = this.searchString
      this.$router.push({
        name:'projects',
        query: {q: this.searchString}
      });
    },
  }
};
</script>



<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link :to="{name: 'home'}">
        <a class="navbar-brand" href="/">Boolpress</a>
    </router-link>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{name: 'projects'}">
                <a class="nav-link active" aria-current="page" href="#">Projects</a>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'about'}">
                <a class="nav-link active" aria-current="page" href="#">About</a>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'contact'}">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
            </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex" 
            role="search" 
            @submit.prevent="executeSearch"
            >
        <input class="form-control me-2"
         type="search"
         placeholder="Search" 
         aria-label="Search"
         name="q"
         v-model="searchString"
         >
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>



<style>

</style>