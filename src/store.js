import {reactive} from "vue";

export const store = reactive({
    movie: [],

    apiInfo: {
    url: "https://api.themoviedb.org/3/search/movie",
    endpoints: {
        api_key: "6001daa2c0f4d65ae573fa62d45a84dd",
        include_adult: false,
        query: "",
        language: "en-US",
        page: 1,
        },
    },
})