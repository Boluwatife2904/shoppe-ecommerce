<script setup lang="ts">
import ProductCardList from '@/components/ProductCardList.vue';
import ProductCardItem from '@/components/ProductCardItem.vue';
import { useProductStore } from '@/stores/ProductStore';

const ProductStore = useProductStore();
</script>

<template>
    <div class="home-page">
        <!-- PRODUCTS LIST -->
        <section class="shop-section">
            <div class="shop-section__heading flex items-center space-between">
                <h2 class="heading-1">Shop The Latest</h2>
                <router-link to="{ name: 'shop'}" class="navigation__link navigation__link--accent heading-4">View All
                </router-link>
            </div>
            <product-card-list>
                <product-card-item v-for="product in ProductStore.allProducts" :product="product"></product-card-item>
            </product-card-list>
        </section>
    </div>
</template>

<style lang="scss">
.shop-section {
    margin-top: 6.4rem;

    &__heading {
        margin-bottom: 3.9rem;
    }
}
</style>
