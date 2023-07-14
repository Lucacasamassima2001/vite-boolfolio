<script>
import axios from 'axios';
export default {
    data(){
        return {
            arrProjects: [],
            curentPage: 1,
            nPage: 0,
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
    }
};
</script>



<template>
    <h2>Questi sono i nostri post:</h2>
    <ul>
        <li v-for="project in arrProjects" :key="project.id">{{ project.title }}</li>
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
</template>



<style>

</style>