<script setup lang="ts">
interface Product {
    name: string
    image: string
    price: number,
    variant: string
}

interface Props {
    product: Product
}

defineProps<Props>()
</script>

<template>
    <div class="cart-item position-relative">
        <div class="cart-item__image">
            <img :src="product.image" :alt="product.name">
        </div>
        <div class="cart-item__details flex items-start space-between">
            <div class="cart-item__info">
                <h4 class="cart-item__name heading-3">{{ product.name }}</h4>
                <p class="cart-item__variant dark-gray-text heading-5">{{ product.variant }}</p>
                <p class="cart-item__price accent-text heading-5">${{ product.price }},00</p>
            </div>
            <div class="cart-item__counter flex items-center">
                <button class="button heading-5 dark-gray-text">-</button>
                <span class="heading-5 dark-gray-text">1</span>
                <button class="button heading-5 dark-gray-text">+</button>
            </div>
        </div>
        <button class="cart-item__remove button position-absolute heading-3">&times;</button>
    </div>
</template>

<style lang="scss">
.cart-item {
    display: grid;
    grid-template-columns: 13.6rem auto;
    gap: 2.4rem;
    margin-bottom: 3.0rem;

    @media screen and (min-width: 600px) {
        gap: 3.9rem;
        padding-bottom: 3.9rem;
        margin-bottom: 3.9rem;
        border-bottom: .1rem solid var(--gray);
    }

    &__image {
        img {
            height: auto;
            width: 100%;
            max-width: 100%;
            max-width: 100%;
        }
    }

    &__details {
        flex-direction: column;

        @media screen and (min-width: 600px) {
            max-width: 85%;
            flex-direction: row;
        }
    }

    &__name {
        margin-bottom: .4rem;

        @media screen and (min-width: 600px) {
            margin-bottom: 1.4rem;
        }
    }

    &__variant {
        margin-bottom: 0.2rem;
    }

    &__counter {
        border-radius: .4rem;
        padding: 0;
        gap: 2.4rem;

        @media screen and (min-width: 600px) {
            padding: 1.4rem 1.2rem;
            background: var(--light-gray);
        }
    }

    &__remove {
        top: -8px;
        right: 0;
        font-size: 2.6rem;
    }
}
</style>