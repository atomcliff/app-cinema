import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        popularMoviesList: [],
        detailsMovie: {},
        recommendationsMovies: [],
        searchMovies: [],
        fafavouritesMoviesList: [],
        detailsMoviesForPopular: [], //потому что в популярных нет жанров
    },
    getters: {
        popularMoviesList(state) {
            return state.popularMoviesList;
        },
        detailsMovie(state) {
            return state.detailsMovie;
        },
        recommendationsMovies(state) {
            return state.recommendationsMovies;
        },
        searchMovies(state) {
            return state.searchMovies;
        },
        fafavouritesMoviesList(state) {
            return state.fafavouritesMoviesList;
        },
        detailsMoviesForPopular(state) {
            return state.detailsMoviesForPopular;
        },
    },
    mutations: {
        set_popular_movies_from_api(state, data) {
            state.popularMoviesList = data;
        },
        set_details_movie_from_api(state, data) {
            state.detailsMovie = data;
        },
        set_recommendations_movies_from_api(state, data) {
            state.recommendationsMovies = data;
        },
        set_search_movies_from_api(state, data) {
            state.searchMovies = data;
        },
        set_favourites_movies(state) {
            state.fafavouritesMoviesList = JSON.parse(
                localStorage.getItem("favouritesMoviesList")
            );
        },
        add_favourites_movies(state, currentObjMovie) {
            state.fafavouritesMoviesList.push(currentObjMovie);
            localStorage.setItem(
                "favouritesMoviesList",
                JSON.stringify(state.fafavouritesMoviesList)
            );
        },
        remove_favourites_movies(state, idMovie) {
            for (let key in state.fafavouritesMoviesList) {
                if (state.fafavouritesMoviesList[key].id == idMovie) {
                    state.fafavouritesMoviesList.splice(key, 1);
                    localStorage.setItem(
                        "favouritesMoviesList",
                        JSON.stringify(state.fafavouritesMoviesList)
                    );
                }
            }
        },
        set_details_movies_for_popular(state, data) {
            state.detailsMoviesForPopular.push(data);
        },
    },
    actions: {
        get_popular_movies_from_api({ commit }) {
            axios(
                "https://api.themoviedb.org/3/movie/popular?api_key=62a42ea0ae46dc674520cdbc98410d45&language=en-US&page=1",
                {
                    method: "GET",
                }
            )
                .then((response) => {
                    commit(
                        "set_popular_movies_from_api",
                        response.data.results
                    );
                    return response.data.results;
                })
                .then((dataSet) => {
                    for (let key in dataSet) {
                        axios(
                            "https://api.themoviedb.org/3/movie/" +
                                dataSet[key].id +
                                "?api_key=62a42ea0ae46dc674520cdbc98410d45&language=en-US",
                            {
                                method: "GET",
                            }
                        ).then((response) => {
                            commit(
                                "set_details_movies_for_popular",
                                response.data
                            );
                        });
                    }
                });
        },
        get_details_movie_from_api({ commit }, idMovie) {
            axios(
                "https://api.themoviedb.org/3/movie/" +
                    idMovie +
                    "?api_key=62a42ea0ae46dc674520cdbc98410d45&language=en-US",
                {
                    method: "GET",
                }
            ).then((response) => {
                commit("set_details_movie_from_api", response.data);
            });
        },
        get_recommendations_movies_from_api({ commit }, idMovie) {
            axios(
                "https://api.themoviedb.org/3/movie/" +
                    idMovie +
                    "/recommendations?api_key=62a42ea0ae46dc674520cdbc98410d45&language=en-US&page=1",
                {
                    method: "GET",
                }
            ).then((response) => {
                commit(
                    "set_recommendations_movies_from_api",
                    response.data.results
                );
            });
        },
        get_search_movies_from_api({ commit }, searchMovies) {
            axios(
                "https://api.themoviedb.org/3/search/movie?api_key=62a42ea0ae46dc674520cdbc98410d45&language=en-US&page=1&include_adult=false&query=" +
                    searchMovies,
                {
                    mrthod: "GET",
                }
            ).then((response) => {
                commit("set_search_movies_from_api", response.data.results);
            });
        },
        set_favourites_movies({ commit }) {
            commit("set_favourites_movies");
        },
        add_favourites_movies({ commit }, idMovie) {
            axios(
                "https://api.themoviedb.org/3/movie/" +
                    idMovie +
                    "?api_key=62a42ea0ae46dc674520cdbc98410d45&language=en-US",
                {
                    method: "GET",
                }
            ).then((response) => {
                commit("add_favourites_movies", response.data);
            });
        },
        remove_favourites_movies({ commit }, idMovie) {
            commit("remove_favourites_movies", idMovie);
        },
    },
});
