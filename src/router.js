import { createRouter, createWebHistory } from 'vue-router';
// importare componenti che definiscono le varie pagine
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectShow from './pages/ProjectShow.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects, 
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectShow,
        }
    ]
});

export {
    router
};