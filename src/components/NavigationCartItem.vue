<script setup lang="ts">
interface Product {
    image: string,
    price: number
    name: string
    variant: string
}

interface Props {
    product: Product
}

defineProps<Props>()
</script>

<template>
    <div class="nav-product position-relative">
        <div class="nav-product__image">
            <img :src="product.image" :alt="product.name">
        </div>
        <div class="nav-product__text flex flex-column">
            <h3 class="nav-product__name">{{ product.name }}</h3>
            <h6 class="nav-product__variant dark-gray-text">{{ product.variant }}</h6>
            <p class="nav-product__price accent-text">${{ product.price }},00</p>
            <div class="nav-product__quantity flex dark-gray-text">
                <span>QTY:</span>
                <button class="button dark-gray-text">-</button>
                <span>1</span>
                <button class="button dark-gray-text">+</button>
            </div>
        </div>
        <button class="nav-product__remove position-absolute button">
            &times;
        </button>
    </div>
</template>

<style lang="scss">
.nav-product {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .8rem;

    &:not(:last-child) {
        margin-bottom: 2.2rem;
    }

    &__image {
        img {
            width: 100%;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }

    &__price,
    &__variant,
    &__name,
    &__quantity {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.2rem;
    }

    &__name {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 80%;
    }

    &__quantity {
        margin-top: auto;
        gap: .8rem;
    }

    &__remove {
        font-size: 1.8rem;
        top: .8rem;
        right: -0.5rem;
        line-height: 0;
    }
}
</style>