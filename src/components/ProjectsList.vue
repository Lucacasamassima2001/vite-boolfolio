<script>
import axios from 'axios';
import ProjectCardVue from './ProjectCard.vue';
import {store} from '../store';


export default {
    data(){
        return {
            arrProjects: [],
			arrTypes: [],
            currentPage: 1,
            nPages: 0,
			store,
        };
    },
    methods: {
        changePage(page){
            this.currentPage = page;
            this.getProjects();
        },
        getProjects(){
            axios.get(this.store.baseUrl + 'api/projects', {
				params: {
					page: this.currentPage,
					// to do/fix me
					// q: new URLSearchParams(window.location.search).get('q'),
				},
			})
			.then(response => {
				this.arrProjects = response.data.results.data;
				this.nPages = response.data.results.last_page;
			});
        },

		getTypes() {
			axios.get(this.store.baseUrl + 'api/types').then(response => {
				this.arrTypes = response.data.results;
			});
		},
    },
    created(){
        this.getProjects();
        this.getTypes();
    },
	watch: {
		currentPage(){
			this.getProjects();
		}
	},
    components:{
        ProjectCardVue,
    },
};
</script>



<template>
    <div class="container py-5">
        <h2 class="text-light fs-1">Questi sono i nostri post:</h2>
    </div>


	<div class="container py-3">
		<form>
			<h2 class="text-light">Filtra</h2>
			<label for="type"></label>
			<select 
			style="width: 300px;" 
			class="form-select" 
			id="type">	
				<option 
				v-for="type in arrTypes" 
				:key="type.id" 
				:value="type.id"
				>{{ type.name }}
				</option>
			</select>
		</form>
	</div>
	
	
    
    <div class="container-big py-3 d-flex gap-3 flex-wrap justify-content-center">
		<div class="col-3" v-for="project in arrProjects" :key="project.title">
			<ProjectCardVue :objProject="project"/>
		</div>
    </div>

	<nav class="mx-3">
		<ul class="pagination">
			<li class="page-item" :class="{disabled: currentPage == 1}">
				<a class="page-link" @click="currentPage--">Previous</a>
			</li>

			<li
				v-for="page in nPages"
				:key="page"
				class="page-item"
				:class="{ active: page == currentPage }"
			>
				<span class="page-link" @click="currentPage = page">
					{{ page }}
				</span>
			</li>

			<li class="page-item">
				<a class="page-link" :class="{disabled: currentPage == nPages}" href="#" @click="currentPage++">Next</a>
			</li>
		</ul>
	</nav>
</template>



<style>

</style>