<script>
import axios from 'axios';

import ProjectCardVue from './ProjectCard.vue';
export default {
    data(){
        return {
            arrProjects: [],
            currentPage: 1,
            nPages: 0,
        };
    },
    methods: {
        changePage(page){
            this.currentPage = page;
            this.getProjects();
        },
        getProjects(){
            axios.get('http://localhost:8000/api/projects', {
				params: {
					page: this.currentPage,
				},
			})
			.then(response => {
				this.arrProjects = response.data.data;
				this.nPages = response.data.last_page;
			});
        }
    },
    created(){
        axios.get('http://localhost:8000/api/projects', {
				params: {
					page: this.currentPage,
				},
			})
			.then(response => {
				this.arrProjects = response.data.data;
				this.nPages = response.data.last_page;
			});
    },
    components:{
        ProjectCardVue,
    }
};
</script>



<template>
    <div class="container py-5">
        <h2 class="text-light fs-1">Questi sono i nostri post:</h2>
    <ul>
        <li class="text-light" v-for="project in arrProjects" :key="project.id">{{ project.title }}</li>
    </ul>
    <nav>
		<ul class="pagination">
			<li class="page-item disabled">
				<a class="page-link">Previous</a>
			</li>

			<li
				v-for="page in nPages"
				:key="page"
				class="page-item"
				:class="{ active: page == currentPage }"
			>
				<span class="page-link" @click="changePage(page)">
					{{ page }}
				</span>
			</li>

			<li class="page-item">
				<a class="page-link" href="#">Next</a>
			</li>
		</ul>
	</nav>
    </div>
    
    <div class="container-big py-3 d-flex gap-5 flex-wrap justify-content-center">
        <ProjectCardVue v-for="project in arrProjects" :title="project.title" :key="project.title" :url_image="project.url_image" :description="project.description" :repo="project.repo"/>
    </div>
</template>



<style>

</style>