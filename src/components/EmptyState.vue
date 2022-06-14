<script setup lang="ts">
interface Props {
    heading: string,
    message: string
}

defineProps<Props>();
</script>

<template>
    <div class="empty-state text-center">
        <div class="empty-state__icon">
            <img src="@/assets/images/crying-face.png" alt="Crying Face Emoji">
        </div>
        <h5 class="empty-state__heading heading-2">{{ heading }}</h5>
        <p class="empty-state__message heading-5">{{ message }}</p>
    </div>
</template>

<style lang="scss">
.empty-state {
    max-width: 50rem;
    margin: 5rem auto;
    padding: 3rem 1rem;

    &__icon {
        max-width: 8rem;
        max-height: 8rem;
        margin: 0 auto 2rem;

        img {
            height: auto;
            width: 100%;
            display: block;
            margin: 0 auto;
        }
    }

    &__heading {
        margin-bottom: 2rem;
    }
}
</style>
