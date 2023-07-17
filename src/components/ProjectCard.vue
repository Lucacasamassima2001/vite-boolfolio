<script>
import {store} from '../store';
export default {
  data(){
    return{
      store,
    }
  },
    // props: ['objProject'],
    props: {
      objProject: Object,
    },


    methods: {
      getImageUrl(image){
         return image ? this.store.baseUrl + 'storage/' + image: this.store.baseUrl + 'storage/default.jpg'
		}
    }
}
</script>



<template>
  <div class="card" style="width: 18rem; height: 34rem;">
  <img :src="getImageUrl(objProject.image)" class="card-img-top" :alt="objProject.title">
  <div class="card-body">
    <h5 class="card-title">{{ objProject.title }}</h5>
    <h3 class="card-title">Repository: {{ objProject.repo }}</h3>
    <p class="card-text">{{ objProject.description }}</p>
    <router-link :to="{name: 'projects.show', params: {id: objProject.id}}" >
      <a href="#" class="btn btn-primary">View</a>
    </router-link>
  </div>
</div>
</template>



<style>

</style>