<template>
    <div class="appMain">
        <app-header></app-header>
        <main class="appMain__container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import appHeader from "./appHeader";
export default {
    components: {
        appHeader,
    },
};
</script>

<style lang="scss">
.appMain {
    width: 100%;
    background: #2b3648;
    padding: 32px;
    display: flex;
    flex-direction: column;
    &__container {
        max-width: 1200px;
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
    }
}
</style>
