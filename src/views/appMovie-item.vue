<template>
    <div class="appMovie-item">
        <div class="appMovie-item__header">
            <h2 class="appMovie-item__title">
                {{ detailsMovie.original_title }}
            </h2>
            <button
                class="appMovie-item__favourites"
                @click="addToFavourites(detailsMovie.id)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -10 511.98645 511"
                    width="20px"
                    class
                >
                    <g>
                        <path
                            :class="
                                fafavouritesMoviesList.find((item) => {
                                    return item.id === detailsMovie.id;
                                })
                                    ? 'existFavourites'
                                    : 'notExistFavourites'
                            "
                            d="m499.574219 188.503906c-3.199219-9.921875-11.988281-16.9375-22.398438-17.898437l-141.355469-12.84375-55.894531-130.835938c-4.117187-9.578125-13.503906-15.765625-23.933593-15.765625-10.433594 0-19.820313 6.207032-23.9375 15.808594l-55.890626 130.816406-141.378906 12.839844c-10.386718.941406-19.175781 7.957031-22.378906 17.878906-3.21875 9.921875-.234375 20.777344 7.617188 27.648438l106.859374 93.695312-31.511718 138.773438c-2.300782 10.199218 1.664062 20.734375 10.136718 26.878906 4.519532 3.328125 9.875 4.992188 15.230469 4.992188 4.628907 0 9.238281-1.234376 13.355469-3.710938l121.898438-72.894531 121.875 72.875c8.917968 5.351562 20.160156 4.882812 28.609374-1.238281 8.46875-6.144532 12.4375-16.683594 10.132813-26.882813l-31.507813-138.769531 106.859376-93.699219c7.847656-6.867187 10.835937-17.726563 7.613281-27.667969zm0 0"
                            fill="transparent"
                            data-original="#FFC107"
                            data-old_color="#ffc107"
                        />
                        <path
                            d="m114.617188 491.136719c-5.632813 0-11.203126-1.746094-15.957032-5.183594-8.855468-6.398437-12.992187-17.429687-10.582031-28.09375l32.9375-145.066406-111.703125-97.964844c-8.210938-7.1875-11.347656-18.515625-7.976562-28.90625 3.371093-10.367187 12.542968-17.726563 23.402343-18.730469l147.820313-13.417968 58.410156-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.410156 136.769532 147.796875 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.386718.253906 21.738281-7.980469 28.90625l-111.679688 97.941406 32.9375 145.066406c2.414063 10.667969-1.726562 21.695313-10.578125 28.09375-8.8125 6.378906-20.566406 6.914063-29.890625 1.324219l-127.464843-76.160156-127.445313 76.203125c-4.308594 2.582031-9.109375 3.859375-13.929687 3.859375zm141.375-112.871094c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.769532 1.089843-19.925782 8.621093-26.515625l105.472657-92.523438-139.542969-12.671875c-10.003906-.894531-18.667969-7.1875-22.59375-16.46875l-55.101562-129.046875-55.148438 129.066407c-3.902344 9.238281-12.5625 15.53125-22.589844 16.429687l-139.519531 12.671875 105.46875 92.519531c7.554687 6.59375 10.839844 16.769531 8.621094 26.539063l-31.082031 136.941406 120.277343-71.9375c4.328125-2.558594 9.128907-3.859375 13.972657-3.859375zm-84.585938-221.824219v.019532zm169.152344-.066406v.023438s0 0 0-.023438zm0 0"
                            data-original="#000000"
                            class="active-path"
                            style="fill:#FFCE00"
                            data-old_color="#000000"
                        />
                    </g>
                </svg>
            </button>
        </div>
        <div class="appMovie-item__main">
            <div class="appMovie-item__poster">
                <img
                    :src="
                        'https://image.tmdb.org/t/p/w500/' +
                            detailsMovie.backdrop_path
                    "
                />
            </div>
            <ul class="appMovie-item__info">
                <li>Год: {{ detailsMovie.release_date }}</li>
                <li>Слоган: {{ detailsMovie.tagline }}</li>
                <li class="appMovie-item__info-genres">
                    Жанр:
                    <span v-for="(item, idx) in movieGenres" :key="idx">{{
                        item.name
                    }}</span>
                </li>
                <li>Бюджет: {{ detailsMovie.budget }}</li>
                <li>Дата Выхода: {{ detailsMovie.release_date }}</li>
                <li>Продолжительность: {{ detailsMovie.runtime + " мин." }}</li>
                <li>Оригинальный язык: {{ detailsMovie.original_language }}</li>
                <li>
                    Оригинальное название: {{ detailsMovie.original_title }}
                </li>
                <li>Популярность: {{ detailsMovie.popularity }}</li>
                <li>Доход: {{ detailsMovie.revenue }}</li>
                <li>Статус: {{ detailsMovie.status }}</li>
                <li>Рейтинг: {{ detailsMovie.vote_average }}</li>
                <li>
                    Количество проголосовавших: {{ detailsMovie.vote_count }}
                </li>
                <li class="appMovie-item__info-spoken-languages">
                    Язык озвучки:
                    <span
                        v-for="(value, idx) in movieSpokenLanguages"
                        :key="idx"
                        >{{ value.name }}</span
                    >
                </li>
            </ul>
        </div>
        <div class="appMovie-item__actors"></div>
        <div class="appMovie-item__description">
            <h4>Описание</h4>
            {{ detailsMovie.overview }}
        </div>
        <h3 class="appMovie-item__reccomend-title">
            Рекомендуем также к просмотру
        </h3>
        <div class="appMovie-item__reccomend-row">
            <div
                class="appMovie-item__reccomend-col"
                v-for="(value, index) in recommendationsMovies"
                :key="index"
            >
                <div class="appMovie-item__reccomend-item">
                    <router-link tag="a" :to="'/movie/' + value.id">
                        <img
                            :src="
                                'https://image.tmdb.org/t/p/w500/' +
                                    value.poster_path
                            "
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "detailsMovie",
            "recommendationsMovies",
            "fafavouritesMoviesList",
        ]),
        movieGenres() {
            return this.detailsMovie.genres;
        },
        movieSpokenLanguages() {
            return this.detailsMovie.spoken_languages;
        },
    },
    methods: {
        ...mapActions([
            "get_details_movie_from_api",
            "get_recommendations_movies_from_api",
            "add_favourites_movies",
            "remove_favourites_movies",
        ]),
        addToFavourites(idMovie) {
            if (
                localStorage.getItem("favouritesMoviesList") !== null &&
                localStorage.getItem("favouritesMoviesList") !== "[]"
            ) {
                let tmp = this.fafavouritesMoviesList.find((item) => {
                    return item.id === idMovie;
                });
                if (tmp) {
                    this.remove_favourites_movies(idMovie);
                } else if (tmp == undefined) {
                    this.add_favourites_movies(idMovie);
                }
            } else {
                this.add_favourites_movies(idMovie);
            }
        },
    },
    mounted() {
        window.scrollTo(0, 0);
        this.get_details_movie_from_api(this.$route.params.id);
        this.get_recommendations_movies_from_api(this.$route.params.id);
    },
    watch: {
        "$route.params.id"() {
            window.scrollTo(0, 0);
            this.get_details_movie_from_api(this.$route.params.id);
            this.get_recommendations_movies_from_api(this.$route.params.id);
        },
    },
};
</script>

<style lang="scss">
.appMovie-item {
    margin: 20px;
    padding: 20px;
    background: #212936;
    border-radius: 4px;
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 20px 0;
    }
    &__title {
        color: #fff;
        font-size: 30px;
    }
    &__favourites {
        display: inline-block;
        outline: none;
        background: transparent;
    }
    &__main {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 50px 0;
    }
    &__poster {
        margin: 0 40px 15px 0;
        img {
            border-radius: 4px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            display: inline-block;
            max-width: 500px;
            width: 100%;
            max-height: 282px;
            min-height: 100%;
            object-fit: cover;
        }
    }
    &__info {
        color: #afbdd1;
        li {
            margin: 0 0 15px 0;
            &:last-child {
                margin: 0 0 0 0;
            }
        }
        &-genres span {
            &::after {
                display: inline;
                content: ", ";
            }
            &:last-child::after {
                display: none;
            }
        }
        &-spoken-languages span {
            &::after {
                display: inline;
                content: ", ";
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    &__description {
        color: #afbdd1;
        margin: 0 0 35px 0;
        h4 {
            font-size: 18px;
            margin: 0 0 10px 0;
        }
    }
    &__reccomend-title {
        font-size: 23px;
        color: #afbdd1;
        text-align: center;
    }
    &__reccomend-row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -20px;
    }
    &__reccomend-col {
        margin: 20px;
        flex-basis: calc(100% / 4 - 40px);
    }
    &__reccomend-item {
        img {
            width: 100%;
        }
    }
}

@media screen and (max-width: 768px) {
    .appMovie-item {
        margin: 20px 0;
        &__poster {
            margin: 0 0 15px 0;
        }
        &__reccomend-col {
            flex-basis: calc(100% / 3 - 40px);
        }
    }
}

@media screen and (max-width: 576px) {
    .appMovie-item {
        &__reccomend-col {
            flex-basis: calc(100% / 1 - 40px);
        }
    }
}
</style>
