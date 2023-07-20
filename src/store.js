import { reactive } from "vue";
const url = 'http://localhost:8000/';
export const store = reactive({
        baseUrl: url,
        search: new URLSearchParams(window.location.search).get('q'),
        getImageUrl(image){
                return image ? url + 'storage/' + image
                             : url + 'storage/default.jpg'
                       }
}
);