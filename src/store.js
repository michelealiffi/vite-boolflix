import {reactive} from "vue";

export const store = reactive ({
    results: [],
    resultTv: [],
    info: {},
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '?api_key=6001daa2c0f4d65ae573fa62d45a84dd',
});