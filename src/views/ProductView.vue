<script setup lang="ts">
import ProductCardList from "@/components/ProductCardList.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import { useProductStore } from "@/stores/ProductStore";

const ProductStore = useProductStore();

const similarProducts = ProductStore.allProducts.slice(0, 3);
</script>

<template>

    <!-- SIMILAR ITEMS -->
    <section class="similar-items">
        <h3 class="similar-items__heading heading-2">Similar Items</h3>
        <product-card-list>
            <product-card-item v-for="product in similarProducts" :product="product"></product-card-item>
        </product-card-list>
    </section>
</template>

<style lang="scss">
.similar-items {
    margin-top: 9.6rem;

    &__heading {
        margin-bottom: 4.7rem;
    }
}
</style>
