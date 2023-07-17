<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data(){
        return{
            store,
        };
    },

    props: {
      objProject: Object,
      required: true,
    },
    
    created() {
        // richiesta axios per i dati del project singolo
        axios.get(this.store.baseUrl + 'api/projects/' + this.$route.params.slug)
        .then(response=>console.log(response));
    },
}
</script>


<template>
    <h2 class="text-light text-center py-3">Selected Project</h2>
    
</template>



<style>

</style>