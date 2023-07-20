<script>
import axios from 'axios';
import ProjectCardVue from './ProjectCard.vue';
import {store} from '../store';
import ProjectFilter from './ProjectFilter.vue';


export default {
    data(){
        return {
            arrProjects: [],
			arrTypes: [],
			typeid: null,
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
					q: this.store.search,
					types: this.typeid,
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
		manageChangeTypes(typeid) {
			this.typeid = typeid;
			this.getProjects();
		}
    },
    created(){
        this.getProjects();
        this.getTypes();
    },
	watch: {
		currentPage(){
			this.getProjects();
		},
		'store.search'(){
			this.getProjects();
		}
	},
    components:{
        ProjectCardVue,
		ProjectFilter,
    },
};
</script>



<template>
    <div class="container py-5">
        <h2 class="text-light fs-1">Questi sono i nostri post:</h2>
    </div>

	<ProjectFilter 
	:types="arrTypes"
	@changeType="manageChangeTypes($event)"/>
	
	
	
    
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