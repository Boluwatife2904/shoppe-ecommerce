<script setup lang="ts">
import { RouterView } from "vue-router";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
    <div class="main-layout">
        <TheHeader />
        <RouterView />
        <TheFooter />
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/index.scss";

.main-layout {
    max-width: 124.8rem;
    margin: 0 auto;
    padding: 1.5rem 1.6rem 9rem;

    @media screen and (min-width: 600px) {
        padding: 4.8 2rem 9rem;
    }

    @media screen and (min-width: 992px) {
        padding: 4.8rem 3.2rem 9rem;
    }
}
</style>
