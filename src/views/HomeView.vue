<script setup lang="ts">
import { reactive } from "vue";
import ProductCardList from "@/components/ProductCardList.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import HomeSliderItem from "@/components/HomeSliderItem.vue";
import { useProductStore } from "@/stores/ProductStore";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const ProductStore = useProductStore();

const sliderOptions = reactive({
    arrows: false,
});
</script>

<template>
    <div class="home-page">
        <!-- HEADER SLIDER -->
        <Splide :options="sliderOptions">
            <SplideSlide v-for="item in 5" :key="item">
                <home-slider-item></home-slider-item>
            </SplideSlide>

            <!-- <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">Prev</button>
                <button class="splide__arrow splide__arrow--next">Next</button>
            </div> -->
        </Splide>

        <!-- PRODUCTS LIST -->
        <section class="shop-section">
            <div class="shop-section__heading flex items-center space-between">
                <h2 class="heading-1">Shop The Latest</h2>
                <router-link :to="{ name: 'shop' }" class="navigation__link navigation__link--accent heading-4">View All </router-link>
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

.splide__pagination {
    bottom: 2.6em;
    gap: 1.371rem;
}

.splide__pagination__page {
    background: #fff;
    height: 0.91rem;
    width: 0.91rem;
    margin: 0;
    opacity: 1;
}

.splide__pagination__page:hover {
    opacity: 1;
}

.splide__pagination__page.is-active {
    background: none;
    border: 0.1rem solid #fff;
    transform: scale(1.4);
    z-index: 1;
    height: 1.6rem;
    width: 1.6rem;
}
</style>
