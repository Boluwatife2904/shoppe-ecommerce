<script setup lang="ts">
import { RouterView } from "vue-router";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
    <div class="main-layout">
        <RouterView />
        <TheFooter />
    </div>
</template>

<style lang="scss">
.main-layout {
    max-width: 124.8rem;
    margin: 0 auto;
    padding: 0px 1.6rem 9rem;

    @media screen and (min-width: 600px) {
        padding: 0px 2rem 9rem;
    }

    @media screen and (min-width: 992px) {
        padding: 0px 3.2rem 9rem;
    }
}
</style>
