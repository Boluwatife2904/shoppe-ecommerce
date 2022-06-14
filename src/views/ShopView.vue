<script setup lang="ts">
import ProductCardList from "@/components/ProductCardList.vue";
import ProductCardItem from "@/components/ProductCardItem.vue";
import { useProductStore } from "@/stores/ProductStore";
import BaseInput from "../components/BaseInput.vue";
import { computed, ref } from "vue";
import SearchIcon from "../components/icons/IconSearch.vue";
import BaseSelect from "../components/BaseSelect.vue";

const ProductStore = useProductStore();

interface Product {
    image: string;
    name: string;
    price: number;
    category: string;
    variant: string;
}

const searchValue = ref("");
const shopByOption = ref("");
const sortByOption = ref("");

const filterProductsByName = (products: Product[]): Product[] => {
    if (searchValue.value) {
        return [...products].filter((product) => product.name.toLowerCase().includes(searchValue.value.toLowerCase()));
    }
    return products;
};

const filterProductsByCategory = (products: Product[]): Product[] => {
    if (shopByOption.value) {
        return [...products].filter((product) => product.category === shopByOption.value);
    }
    return products;
};

const sortProductsByValue = (products: Product[]): Product[] => {
    if (sortByOption.value) {
        switch (sortByOption.value) {
            case "category":
                return [...products].sort((productOne, productTwo) => (productOne.category > productTwo.category ? 1 : -1));
            case "name":
                return [...products].sort((productOne, productTwo) => (productOne.name > productTwo.name ? 1 : -1));
        }
    }
    return products;
};

const filteredProducts = computed(() => {
    return filterProductsByName(filterProductsByCategory(sortProductsByValue(ProductStore.allProducts)));
});

const shopByOptions = [
    {
        key: "earring",
        value: "Earrings",
    },
    {
        key: "pin",
        value: "Pins",
    },
    {
        key: "necklace",
        value: "Necklaces",
    },
];

const sortByOptions = [
    {
        key: "name",
        value: "Name",
    },
    {
        key: "price",
        value: "Price",
    },
];
</script>

<template>
    <div class="shop-page page-layout-margin">
        <h1 class="heading-1 shop-page__title">Shop The Latest</h1>

        <div class="shop-page__wrapper">
            <div class="shop-page__filter">
                <div class="shop-page__search position-relative">
                    <BaseInput v-model="searchValue" id="search" type="search" placeholder="Search..." />
                    <div class="shop-page__search-icon position-absolute">
                        <SearchIcon />
                    </div>
                </div>
                <div class="shop-page__shop-by">
                    <BaseSelect name="shop-by" v-model="shopByOption" :options="shopByOptions" placeholder="Shop By" :has-border="true" size="large" />
                </div>
                <div class="shop-page__sort-by">
                    <BaseSelect name="shop-by" v-model="sortByOption" :options="sortByOptions" placeholder="Sort By" :has-border="true" size="large" />
                </div>
            </div>
            <div class="shop-page__products">
                <product-card-list>
                    <product-card-item v-for="product in filteredProducts" :product="product"></product-card-item>
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

    &__search {
        margin-bottom: 3.9rem;

        &-icon {
            top: 0.4rem;
            right: 0;
        }
    }

    &__shop-by {
        margin-bottom: 1.6rem;
    }
}
</style>
