<script setup lang="ts">
import { ref } from 'vue';
import ProductCardList from '@/components/ProductCardList.vue';
import ProductCardItem from '@/components/ProductCardItem.vue';

const products = ref([
    {
        image: "/images/product-one.png",
        name: "Lira Earrings",
        price: 20,
    },
    {
        image: "/images/product-two.png",
        name: "Hal Earrings",
        price: 25,
    },
    {
        image: "/images/product-three.png",
        name: "Kaede Hair Pin Set Of 3 ",
        price: 25,
    },
    {
        image: "/images/product-four.png",
        name: "Hair Pin Set of 3",
        price: 25,
    },
    {
        image: "/images/product-five.png",
        name: "Plaine Necklace",
        price: 25,
    },
    {
        image: "/images/product-three.png",
        name: "Yuki Hair Pin Set of 3",
        price: 25,
    },
])
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
                <product-card-item v-for="product in products" :product="product"></product-card-item>
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
