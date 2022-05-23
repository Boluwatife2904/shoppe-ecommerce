<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="error-404 text-center">
        <h4 class="error-404__heading heading-1">404 ERROR</h4>
        <p class="error-404__paragraph heading-3">This page not found; <br>
            back to home and start again
        </p>
        <router-link :to="{ name: 'index'}" class="button button--medium button--outline-black">HOMEPAGE</router-link>
    </div>
</template>

<style lang="scss">
.error-404 {
    margin: 20rem auto;
    max-width: 43.6rem;

    &__heading {
        margin-bottom: 2.4rem;
    }

    &__paragraph {
        color: var(--dark-gray);
        margin-bottom: 6.4rem;
    }
}
</style>
