<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import FacebookIcon from "@/components/icons/IconFacebook.vue";
import InstagramIcon from "@/components/icons/IconInstagram.vue";
import TwitterIcon from "@/components/icons/IconTwitter.vue";
import LinkedinIcon from "@/components/icons/IconLinkedin.vue";
import BaseInput from './BaseInput.vue';
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

const footerLinks = ref([
    {
        name: 'contact',
        path: ''
    },
    {
        name: 'terms of services',
        path: ''
    },
    {
        name: 'shipping and returns',
        path: ''
    }
])

const footerSocials = ref([
    {
        type: 'linkedin',
        url: '#'
    },
    {
        type: 'facebook',
        url: '#'
    },
    {
        type: 'instagram',
        url: '#'
    },
    {
        type: 'twitter',
        url: '#'
    }
])

const currentYear = computed(() => new Date().getFullYear());

const emailAddress = ref("");
</script>


<template>
    <footer class="footer">
        <div class="footer__top flex items-center space-between">
            <ul class="footer__navigation flex items-center space-between w-100">
                <li v-for="link in footerLinks" :key="link.name" class="navigation__item">
                    <router-link :to="link.path"
                        class="navigation__link navigation__link--light heading-5 text-capitalize">
                        {{ link.name }}</router-link>
                </li>
            </ul>
            <div class="footer__newletter">
                <form>
                    {{ emailAddress }}
                    <BaseInput v-model="emailAddress" type="text" id="newsletter-id" placeholder="Give an email, get the newsletter" />
                </form>
            </div>
        </div>
        <div class="footer__bottom flex items-center space-between">
            <p class="footer__copyright heading-5">
                &copy; {{ currentYear }} Shelly.
                <router-link to="" class="navigation__link navigation__link--light">Terms of use</router-link> and
                <router-link to="" class="navigation__link navigation__link--light">privacy policy</router-link>
            </p>
            <ul class="footer__socials flex items-center space-between">
                <li v-for="social in footerSocials" :key="social.type" class="navigation__item">
                    <a :href="social.url" target="_blank" rel="noopener noreferrer" class="navigation__link--light">
                        <LinkedinIcon v-if="social.type === 'linkedin'" />
                        <FacebookIcon v-if="social.type === 'facebook'" />
                        <InstagramIcon v-if="social.type === 'instagram'" />
                        <TwitterIcon v-if="social.type === 'twitter'" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>


<style lang="scss">
@mixin footer-flex($initial-direction) {
    flex-direction: $initial-direction;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
}

.footer {
    padding: 5.2rem 0;
    border-top: 1px solid var(--light-gray);

    &__top {
        @include footer-flex(column-reverse);
        margin-bottom: 48px;
    }

    &__navigation {
        @include footer-flex(column);

        @media screen and (min-width: 768px) {
            max-width: 478px;
        }
    }

    &__bottom {
        @include footer-flex(column-reverse);
    }

    &__copyright {
        @media screen and (max-width: 480px) {
            font-size: 12px;
            line-height: normal;
        }
    }

    &__socials {
        width: 100%;
        max-width: 156px;
    }
}
</style>