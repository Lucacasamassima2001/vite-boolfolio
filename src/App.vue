<script>
import ProjectsList from './components/ProjectsList.vue';

export default {
  components: {
    ProjectsList,
  },
}
</script>


<template>
  <projects-list></projects-list>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
body{
  background-color: rgb(77, 77, 189);

}

</style>
