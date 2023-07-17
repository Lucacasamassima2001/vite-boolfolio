<script>
import AppNavVue from './components/AppNav.vue';
import ProjectsList from './components/ProjectsList.vue';
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    ProjectsList,
    AppNav,
    AppFooter,
  },
}
</script>


<template>
  <AppNav />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
body{
  background-color: rgb(77, 77, 189);

}

</style>
