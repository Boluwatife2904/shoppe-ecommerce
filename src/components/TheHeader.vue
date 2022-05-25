<script setup lang="ts">
import ShoppeLogo from "@/components/icons/ShoppeLogo.vue";
import BaseButton from "@/components/BaseButton.vue";
import CartIcon from "@/components/icons/IconCart.vue";
import UserIcon from "@/components/icons/IconUser.vue";
import SearchIcon from "@/components/icons/IconSearch.vue";
import MenuIcon from "@/components/icons/IconMenu.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigationLinks = ref([
    {
        name: 'Shop',
        path: 'shop'
    },
    {
        name: 'Blog',
        path: 'blog'
    },
    {
        name: 'Our Story',
        path: 'about'
    },
])

const goToDashboard = () => {
    router.push({ name: 'auth' })
}
</script>

<template>
    <nav class="navigation flex items-center">
        <div class="navigation__logo">
            <router-link :to="{ name: 'index' }">
                <ShoppeLogo />
            </router-link>
        </div>
        <ul class="navigation__links position-relative w-100 items-center space-between">
            <li v-for="link in navigationLinks" :key="link.path" class="navigation__item">
                <router-link :to="{ name: link.path }"
                    class="navigation__link navigation__link--dark heading-5 text-capitalize">{{
                            link.name
                    }}</router-link>
            </li>
        </ul>
        <ul class="navigation__icons flex items-center space-between w-100">
            <base-button class="hide-on-mobile">
                <SearchIcon />
            </base-button>
            <base-button>
                <CartIcon />
            </base-button>
            <base-button class="hide-on-mobile" @click="goToDashboard">
                <UserIcon />
            </base-button>
            <base-button class="hide-on-desktop">
                <MenuIcon />
            </base-button>
        </ul>
    </nav>
</template>

<style lang="scss">
.navigation {
    justify-content: space-between;
    padding-bottom: 17px;
    border-bottom: 1px solid var(--light-gray);

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
    }

    &__links {
        max-width: 27rem;
        margin-right: 9.6rem;
        display: none;
        margin-left: auto;

        @media screen and (min-width: 768px) {
            display: flex;
        }

        &::after {
            position: absolute;
            content: "";
            width: .1rem;
            height: 1.7rem;
            right: -4.8rem;
            background-color: var(--dark-gray);
        }
    }

    &__icons {
        max-width: 5.4rem;
        gap: 16px;

        @media screen and (min-width: 768px) {
            max-width: 11.8rem;
            gap: 0;
        }

        button {
            line-height: 0;
        }
    }
}
</style>