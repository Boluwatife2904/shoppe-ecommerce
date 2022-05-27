<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useProductStore } from '@/stores/ProductStore';
import CartShippingCalculator from "@/components/CartShippingCalculator.vue";
import CartProductList from '@/components/CartProductList.vue';
import CartProductItem from '@/components/CartProductItem.vue';

const ProductStore = useProductStore();

const threeProducts = ProductStore.products.slice(0, 3)
</script>

<template>
    <div class="shopping-cart page-layout-margin">
        <h2 class="shopping-cart__title heading-1 page__title">Shopping Cart</h2>
        <div class="shopping-cart__wrapper">
            <cart-product-list>
                <CartProductItem v-for="product in threeProducts" :product="product" />
            </cart-product-list>
            <div class="shopping-cart__totals cart-totals">
                <h3 class="cart-totals__title">Cart Totals</h3>
                <div class="cart-totals__subtotal">
                    <span class="title heading-5">SUBTOTAL</span>
                    <div class="content heading-5 dark-gray-text">$ 65,00</div>
                </div>
                <div class="cart-totals__shipping">
                    <span class="title heading-5">SHIPPING</span>
                    <div class="content">
                        <p class="heading heading-5 dark-gray-text">Shipping costs will be calculated once you have
                            provided
                            address.
                        </p>
                        <CartShippingCalculator />
                    </div>
                </div>
                <div class="cart-totals__total flex items-center space-between">
                    <span class="body-large">TOTAL</span>
                    <span class="body-large">$ 87,00</span>
                </div>
                <div class="cart-totals__checkout">
                    <router-link to=""
                        class="navigation__link button button--large flex items-center content-center button--solid-black">
                        CHECKOUT</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.shopping-cart {
    &__title {
        margin-bottom: 3.2rem;

        @media screen and (min-width: 600px) {
            margin-bottom: 6.4rem;
        }
    }

    &__wrapper {
        display: grid;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__totals {
        @media screen and (min-width: 768px) {
            padding: 3.9rem 5.9rem;
        }
    }
}

%flex-wrapper {
    display: flex;
    gap: 2rem;

    @media screen and (min-width: 768px) {
        justify-content: space-between;
    }

    .title {
        flex: 1 1 8rem;
        max-width: 8rem;
    }

    .content {
        flex: 1 1 25rem;
        max-width: 25rem;
    }
}

.cart-totals {
    &__title {
        font-weight: 400;
        font-size: 2.0rem;
        line-height: 2.7rem;
        margin-bottom: 2.3rem;

        @media screen and (min-width: 768px) {
            font-size: 2.6rem;
            line-height: 2.5rem;
            margin-bottom: 4.4rem;
        }
    }

    &__subtotal {
        @extend %flex-wrapper;
        margin-bottom: 2.3rem;
    }

    &__shipping {
        @extend %flex-wrapper;
        margin-bottom: 3.9rem;

        .heading {
            margin-bottom: 3.9rem;
        }
    }

    &__total {
        border-top: .1rem solid var(--gray);
        padding-top: 1.8rem;
        margin-bottom: 2.5rem;

        @media screen and (min-width: 768px) {
            padding-top: 4.2rem;
            margin-bottom: 4.5rem;
        }
    }
}
</style>