<script>
import axios from 'axios';
import { store } from '../store';
import {DateTime}  from 'luxon';
import App404 from './App404.vue';

export default {
    components: {
		App404,
	},
    data(){
        return{
            project: null,
            store,
            DateTime,
            is404: false,
        };
    },
    
    created() {
        // richiesta axios per i dati del project singolo
        axios.get(this.store.baseUrl + 'api/projects/' + this.$route.params.slug)
        .then(response => {
				if (response.data.success) {
					this.project = response.data.results;
				} else {
					// this.$router.push({ name: 'page404' });
					this.is404 = true;
				}
			});
    },
}
</script>

<template>
	<App404 v-if="is404" />
    <template v-if="project">
        <h2 class="text-light text-center py-3">{{ project.title }}</h2>
        <h2 class="text-light text-center py-3">Last modified: {{ DateTime.now().toFormat('dd-MM-yy')}}</h2>
        <div class="container d-flex justify-content-center">
            <img style="width: 500px;" :src="this.store.getImageUrl(project.image)" :key="project.title" alt="">
        </div>
        <p class="text-light text-center py-3">{{ project.description }} </p>
    </template>
</template>



<style>

</style>