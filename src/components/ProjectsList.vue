<script>
import axios from 'axios';
import ProjectCardVue from './ProjectCard.vue';
import {store} from '../store';


export default {
    data(){
        return {
            arrProjects: [],
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
				},
			})
			.then(response => {
				this.arrProjects = response.data.data;
				this.nPages = response.data.last_page;
			});
        },
    },
    created(){
        this.getProjects()
    },
	watch: {
		currentPage(){
			this.getProjects();
		}
	},
    components:{
        ProjectCardVue,
    }
};
</script>



<template>
    <div class="container py-5">
        <h2 class="text-light fs-1">Questi sono i nostri post:</h2>
		<!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
			<div class="col" v-for="project in arrProjects" :key="project.id">
				<ProjectCardVue :objProject="project" />
			</div>
		</div> -->
    
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