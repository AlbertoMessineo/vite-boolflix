import { reactive } from 'vue';
import config from './apiConfig';

export const store = reactive ({
    movies:[],
    searchKey:'',
    searchLanguage:'it-IT',
    config,
});

