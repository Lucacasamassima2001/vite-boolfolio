<script>
export default {
    props: {
        title: String,
        url_image: String,
        type: String,
        description: String,
        repo: String,
    }
}
</script>



<template>
  <div class="card" style="width: 18rem;">
  <img :src="url_image" class="card-img-top" :alt="title">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <h3 class="card-title">Repository: {{ repo }}</h3>
    <p class="card-text">{{ description }} </p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</template>



<style>

</style>