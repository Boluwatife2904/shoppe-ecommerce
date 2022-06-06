<script setup lang="ts">
import ProductCardList from "@/components/ProductCardList.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import { useProductStore } from "@/stores/ProductStore";

const ProductStore = useProductStore();
</script>

<template>
    <div class="shop-page page-layout-margin">
        <h1 class="heading-1 shop-page__title">Shop The Latest</h1>

        <div class="shop-page__wrapper">
            <div class="shop-page__filter"></div>
            <div class="shop-page__products">
                <product-card-list>
                    <product-card-item v-for="product in ProductStore.allProducts" :product="product"></product-card-item>
                </product-card-list>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.shop-page {
    &__title {
        margin-bottom: 3.9rem;
    }

    &__wrapper {
        display: grid;
        gap: 3.5rem;

        @media screen and (min-width: 992px) {
            grid-template-columns: 26.2rem auto;
        }
    }
}
</style>
