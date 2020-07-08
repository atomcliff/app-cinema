<template>
    <header class="appHeader">
        <form class="appHeader__search">
            <input
                class="appHeader__search-input"
                type="text"
                placeholder="Поиск..."
                v-model.trim="searchValue"
            />
            <button
                type="submit"
                class="appHeader__search-btn"
                @click.prevent="search(searchValue)"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                        fill="#56657f"
                    />
                </svg>
            </button>
        </form>
    </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            searchValue: "",
        };
    },
    methods: {
        ...mapActions(["get_search_movies_from_api"]),
        search(value) {
            if (value != "") {
                this.$router.push("/search").catch(() => {});
                this.get_search_movies_from_api(value);
            }
        },
    },
};
</script>

<style lang="scss">
.appHeader {
    min-height: 80px;
    background: #212936;
    display: flex;
    align-items: center;
    border-radius: 4px;
    &__search {
        display: flex;
        align-items: center;
        margin: 0 0 0 40px;
        &-input {
            width: 500px;
            background: transparent;
            font-size: 20px;
            color: #fff;
            padding: 4px;
            margin: 0 10px 0 0;
            border: 1px solid #56657f;
            border-radius: 4px;
            &:focus {
                outline: 1px solid #7b8dac;
            }
        }
        &-btn {
            background: transparent;
            transition: background-color 0.4s;
            &:hover svg path {
                fill: #7b8dac;
            }
            &:active,
            &:focus {
                outline: none;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .appHeader {
        padding: 0 20px;
        &__search {
            margin: 0 0 0 0;
            &-input {
                width: 100%;
            }
        }
    }
}
</style>
