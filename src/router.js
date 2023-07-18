import { createRouter, createWebHistory } from 'vue-router';
// importare componenti che definiscono le varie pagine
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectShow from './pages/ProjectShow.vue';
import AppAbout from './pages/AppAbout.vue';
import App404 from './pages/App404.vue';





const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
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
        },
        {
            path: '/:patMatch(.*)*',
            name: 'page404',
            component: App404,
        },
    ]
});

export {
    router
};