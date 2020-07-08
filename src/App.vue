<template>
    <div id="app" class="app-cinema">
        <app-sidebar></app-sidebar>
        <app-main></app-main>
    </div>
</template>

<script>
import appSidebar from "./components/appSidebar";
import appMain from "./components/appMain";
import { mapActions } from "vuex";

export default {
    name: "App",
    methods: {
        ...mapActions(["get_popular_movies_from_api", "set_favourites_movies"]),
    },
    mounted() {
        this.get_popular_movies_from_api();

        if (localStorage.getItem("favouritesMoviesList") !== null) {
            this.set_favourites_movies();
        }
    },

    components: {
        appSidebar,
        appMain,
    },
};
</script>
<style>
/*общие стили*/
.app-cinema {
    display: flex;
}
.existFavourites {
    fill: #ffc107;
}
.notExistFavourites {
    fill: transparent;
}

/*сброс стилей*/
html,
body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    line-height: 1;
    font-family: "Roboto";
}
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    color: inherit;
}
a,
a:visited,
a:hover,
a:active {
    text-decoration: none;
}
ul,
li {
    list-style-type: none;
}
button {
    cursor: pointer;
}
img {
    vertical-align: bottom;
}

/*шрифты*/
@font-face {
    font-family: "Roboto";
    src: url("~@/assets/fonts/Roboto-Thin.ttf");
    font-weight: 100;
    font-size: normal;
}
@font-face {
    font-family: "Roboto";
    src: url("~@/assets/fonts/Roboto-Light.ttf");
    font-weight: 300;
    font-size: normal;
}
@font-face {
    font-family: "Roboto";
    src: url("~@/assets/fonts/Roboto-Regular.ttf");
    font-weight: 400;
    font-size: normal;
}
@font-face {
    font-family: "Roboto";
    src: url("~@/assets/fonts/Roboto-Medium.ttf");
    font-weight: 500;
    font-size: normal;
}
@font-face {
    font-family: "Roboto";
    src: url("~@/assets/fonts/Roboto-Bold.ttf");
    font-weight: 700;
    font-size: normal;
}
@font-face {
    font-family: "Roboto";
    src: url("~@/assets/fonts/Roboto-Black.ttf");
    font-weight: 900;
    font-size: normal;
}
</style>
