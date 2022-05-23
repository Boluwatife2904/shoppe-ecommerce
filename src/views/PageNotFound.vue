<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="error-404">
        <h4 class="error-404__heading">Page Not Found!!!!</h4>
        <p class="error-404__paragraph">This page not found;
            back to home and start again
        </p>
        <router-link :to="{ name: 'index'}"></router-link>
    </div>
</template>

<style scoped>
</style>
