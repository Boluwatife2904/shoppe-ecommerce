<script setup lang="ts">
import ProductCardList from "@/components/ProductCardList.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import { useProductStore } from "@/stores/ProductStore";
import ProductChangeSelectedTab from "@/components/ProductChangeSelectedTab.vue";
import { ref } from "vue";

const ProductStore = useProductStore();

const similarProducts = ProductStore.allProducts.slice(0, 3);

type TabChoices = "description" | "additional-information" | "reviews";
const selectedTab = ref<TabChoices>("description");

const changeActiveTab = (tab: TabChoices) => {
    selectedTab.value = tab;
};
</script>

<template>
    <div class="div single-product">
        <!-- PRODUCT TAB CHANGER -->
        <ProductChangeSelectedTab :selected-tab="selectedTab" @change-tab="changeActiveTab" />

        <!-- PRODUCT DESCRIPTION SECTION -->
        <div v-if="selectedTab === 'description'" class="single-product__description">
            <p class="heading-5 dark-gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</p>
        </div>

        <!-- SIMILAR ITEMS -->
        <section class="similar-items">
            <h3 class="similar-items__heading heading-2">Similar Items</h3>
            <product-card-list>
                <product-card-item v-for="product in similarProducts" :product="product"></product-card-item>
            </product-card-list>
        </section>
    </div>
</template>

<style lang="scss">
.similar-items {
    margin-top: 9.6rem;

    &__heading {
        margin-bottom: 4.7rem;
    }
}
</style>
