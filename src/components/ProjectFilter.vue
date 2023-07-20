

<script>
export default {
    data(){
        return{
            typeid: null,
        };
    },
    props:{
        types: {
            type: Array,
            required: true,
        }
    },

    watch: {
        types(){
            this.typeid =  this.types.lenght ? this.types[0].id : null
        }
    }
    
}
</script>



<template>
    <div class="container py-3">
          <form>
              <h2 class="text-light">Filtra</h2>
              <label class="text-light py-2" for="type">Select a type:</label>
              <select
              style="width: 300px;" 
              class="form-select" 
              id="type" @change="$emit('changeType', typeid)" 
              v-model="typeid">	
                  <option 
                  v-for="type in types" 
                  :key="type.id" 
                  :value="type.id"
                  >{{ type.name }}
                  </option>
              </select>
          </form>
      </div>
  </template>


<style>

</style>