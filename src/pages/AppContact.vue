
<script>
import { store } from '../store';
import axios from 'axios';
export default {

    data(){
        return{
            store,
            name: '',
            email: '',
            message: '',
            newsletter: true,
            showSuccess: false,
            isSending: false,
            hasErrors: false,
            errors: {},
        }
    },

    methods: {
        sendLead(){
            this.showSuccess = false;
            this.hasErrors = false;
            this.errors = false;
            this.isSending = true;
            axios.post(this.store.baseUrl + 'api/leads',{
                name: this.name,
                email: this.email,
                message: this.message,
                newsletter: this.newsletter,
            })
            .then(response => {
                this.isSending = false;
                if(response.data.success){
                this.showSuccess = true;
                this.resetForm();
            }else{
                this.hasErrors = true;
                this.errors = response.data.errors
            }
            } )
            
        },
        resetForm(){
            this.name = '';
            this.email = '';
            this.message = '';
            this.newsletter = true;
        }
    }
}
</script>



<template>
    <div class="container py-3">
    <h1 class="text-light">Contact Us</h1>

    <div v-if="showSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Messaggio inviato con successo</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div v-if="this.hasErrors === true" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Errore nell'invio del messaggio</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <form class="text-light" @submit.prevent="sendLead" novalidate>
        <div class="mb-3">
			<label for="name" class="form-label">Name</label>
			<input type="text" class="form-control" :class="{ 'is-invalid':errors?.name }" id="name" v-model="name" />
		</div>

        <div class="invalid-feedback">
            <p v-for="errorMessage in errors.name" :key="errorMessage">{{ errorMessage }} </p>
        </div>

		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input type="email" class="form-control"
            :class="{ 'is-invalid':errors?.email }" id="email" v-model="email" />
		</div>

        <div class="invalid-feedback">
            <p v-for="errorMessage in errors.email" :key="errorMessage">{{ errorMessage }} </p>
        </div>

		<div class="mb-3">
			<label for="message" class="form-label">Message</label>
			<textarea class="form-control" id="message" rows="5" v-model="message" :class="{ 'is-invalid':errors?.message }"></textarea>
		</div>

        <div class="invalid-feedback">
            <p v-for="errorMessage in errors.message" :key="errorMessage">{{ errorMessage }} </p>
        </div>

		<div class="mb-3 form-check">
			<input type="checkbox" class="form-check-input" id="newsletter" v-model="newsletter" />
			<label class="form-check-label" for="newsletter"
				>Subscribe to newsletter</label
			>
		</div>
        <button type="submit" class="btn btn-primary" :disabled="isSending">Submit</button>
    </form>
    </div>
</template>


<style>

</style>