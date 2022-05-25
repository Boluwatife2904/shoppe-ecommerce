<script setup lang="ts">
interface Product {
    image: string,
    price: number
    name: string
}

interface Props {
    product: Product
}

defineProps<Props>()
</script>

<template>
    <div class="product">
        <div class="product__image">
            <img :src="product.image" :alt="product.name">
        </div>
        <div class="product__details">
            <h3 class="product__name heading-3">{{ product.name }}</h3>
            <p class="product__price heading-4 accent-text">$ {{ product.price }}, 00</p>
        </div>
    </div>
</template>

<style lang="scss">
.product {
    width: 100%;

    &__image {
        margin-bottom: .6rem;

        @media screen and (min-width: 600px) {
            margin-bottom: 2.4rem;
        }

        img {
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: 100%;
        }
    }

    &__name {
        margin-bottom: .4rem;

        @media screen and (min-width: 600px) {
            margin-bottom: 1.6rem;
        }
    }

    &__price {}
}
</style>