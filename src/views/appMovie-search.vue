<template>
    <div class="appMovie-search">
        <div class="appMovie-search__row">
            <div
                class="appMovie-search__col"
                v-for="(value, index) in searchMovies"
                :key="index"
            >
                <div class="appMovie-search__card">
                    <router-link tag="a" :to="'/movie/' + value.id">
                        <img
                            :src="
                                'https://image.tmdb.org/t/p/w500/' +
                                    value.poster_path
                            "
                            :alt="value.title"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["searchMovies"]),
    },
};
</script>

<style lang="scss">
.appMovie-search {
    &__row {
        margin: 0 -20px;
        display: flex;
        flex-wrap: wrap;
    }
    &__col {
        margin: 20px;
        flex-basis: calc(100% / 4 - 40px);
    }
    &__card {
        img {
            width: 100%;
        }
    }
}

@media screen and (max-width: 768px) {
    .appMovie-search {
        &__col {
            flex-basis: calc(100% / 2 - 40px);
        }
    }
}
@media screen and (max-width: 576px) {
    .appMovie-search {
        &__col {
            flex-basis: calc(100% / 1 - 40px);
        }
    }
}
</style>
