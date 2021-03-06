<script setup lang="ts">
import ShoppeLogo from "@/components/icons/ShoppeLogo.vue";
import CartIcon from "@/components/icons/IconCart.vue";
import UserIcon from "@/components/icons/IconUser.vue";
import SearchIcon from "@/components/icons/IconSearch.vue";
import MenuIcon from "@/components/icons/IconMenu.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import NavigationCartList from "./NavigationCartList.vue";

const router = useRouter();

const navigationLinks = ref([
    {
        name: "Shop",
        path: "shop",
    },
    {
        name: "Blog",
        path: "blog",
    },
    {
        name: "Our Story",
        path: "about",
    },
]);

const goToDashboard = () => {
    router.push({ name: "auth" });
};

const showCartSideMenu = ref(false);

const toggleCartSideMenu = (value: boolean): void => {
    showCartSideMenu.value = value;
};
</script>

<template>
    <nav class="navigation flex items-center">
        <div class="navigation__logo">
            <router-link :to="{ name: 'index' }" class="navigation__link--home">
                <ShoppeLogo />
            </router-link>
        </div>
        <ul class="navigation__links position-relative w-100 items-center space-between">
            <li v-for="link in navigationLinks" :key="link.path" class="navigation__item navigation__item--navbar">
                <router-link :to="{ name: link.path }" class="navigation__link navigation__link--dark heading-5 text-capitalize">{{ link.name }}</router-link>
            </li>
        </ul>
        <ul class="navigation__icons flex items-center space-between w-100">
            <base-button class="hide-on-mobile">
                <SearchIcon />
            </base-button>
            <base-button>
                <CartIcon @click="toggleCartSideMenu(true)" />
            </base-button>
            <base-button class="hide-on-mobile" @click="goToDashboard">
                <UserIcon />
            </base-button>
            <base-button class="hide-on-desktop">
                <MenuIcon />
            </base-button>
        </ul>
    </nav>
    <teleport to="body">
        <transition name="slideIn" mode="out-in" appear>
            <NavigationCartList v-if="showCartSideMenu" @close-menu="toggleCartSideMenu(false)" />
        </transition>
    </teleport>
</template>

<style lang="scss">
.navigation {
    justify-content: space-between;
    padding-bottom: 1.7rem;
    border-bottom: 0.1rem solid var(--light-gray);

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
            width: 0.1rem;
            height: 1.7rem;
            right: -4.8rem;
            background-color: var(--dark-gray);
        }
    }

    &__icons {
        max-width: 5.4rem;
        gap: 1.6rem;

        @media screen and (min-width: 768px) {
            max-width: 11.8rem;
            gap: 0;
        }

        button {
            line-height: 0;
        }
    }
}

.slideIn-enter-active,
.slideIn-leave-active {
    transition: all 0.2s ease-in;
}

.slideIn-enter-from,
.slideIn-leave-to {
    transform: translate(100%);
}

.slideIn-enter-to,
.slideIn-leave-from {
    transform: translate(0);
}

.router-link-exact-active {
    padding-bottom: 2.15rem;
    border-bottom: 2px solid #000;
}

.navigation__link--home {
    padding-bottom: 0;
    border: none !important;
}
</style>
