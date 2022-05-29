<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import CartApplyCoupon from "@/components/CartApplyCoupon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goToLogin = () => router.push({ name: "auth" });

const showApplyCouponContainer = ref(false);
const toggleShowApplyCouponContainer = (value: boolean) => (showApplyCouponContainer.value = value);
</script>

<template>
    <div class="contact-page page-layout-margin">
        <h1 class="page__title heading-1 contact-page__title">checkout</h1>
        <div class="contact-page__heading">
            <p class="heading-5"><span class="dark-gray-text">Returning Customer?</span> <base-button @click.native="goToLogin">Click here to login</base-button></p>
            <p class="heading-5"><span class="dark-gray-text">Have a coupon?</span> <base-button @click.native="toggleShowApplyCouponContainer(true)">Click here to enter your code</base-button></p>

            <div v-if="showApplyCouponContainer" class="contact-page__coupon">
                <p class="heading-5 dark-gray-text contact-page__coupon-title">If you have a coupon code, please apply it below.</p>
                <CartApplyCoupon />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.contact-page {
    &__title {
        margin-bottom: 6.4rem;
    }

    &__heading {
        max-width: 50%;

        button {
            font-size: 1.6rem;
        }
    }

    &__coupon {
        margin-top: 2.4rem;
        border: 0.1rem solid var(--gray);
        padding: 2.4rem 2.4rem 4rem;

        &-title {
            margin-bottom: 3.9rem;
        }
    }
}
</style>
