<script setup lang="ts">
type TabChoices = "description" | "additional-information" | "reviews";

interface Props {
    selectedTab: TabChoices;
}

defineProps<Props>();
const emit = defineEmits<{
    (e: "change-tab", tab: TabChoices): void;
}>();

const tabChoices: TabChoices[] = ["description", "additional-information", "reviews"];

const changeTab = (tab: TabChoices) => {
    emit("change-tab", tab);
};
</script>

<template>
    <ul class="tab flex items-center">
        <li v-for="option in tabChoices" :key="option" class="tab__item">
            <button class="tab__button text-capitalize button heading-3" :class="{ active: option === selectedTab }" @click="changeTab(option)">
                <template v-if="option === 'additional-information'">Additional Information</template>
                <template v-else-if="option === 'reviews'">Reviews</template>
                <template v-else>{{ option }}</template>
            </button>
        </li>
        <span class="indicator position-absolute" :class="selectedTab"></span>
    </ul>
</template>

<style lang="scss">
.tab {
    border-bottom: 0.1rem solid var(--gray);
    transform: matrix(0.71, 0, inf, nan, 0, 0);
    gap: 9.6rem;
    position: relative;
    margin-top: 9.9rem;
    margin-bottom: 3.9rem;

    &__button {
        padding-bottom: 3.4rem;
        color: var(--dark-gray);
        transition: all 0.2s linear;
        border-bottom: 0.1rem solid transparent;
    }

    .indicator {
        position: absolute;
        content: "";
        height: 0.1rem;
        width: 100%;
        bottom: -1px;
        background-color: var(--black-color);
        transition: all 0.2s linear;
        z-index: 1;

        &.description {
            left: 0;
            width: 10.7rem;
        }

        &.additional-information {
            left: 20rem;
            width: 20.7rem;
        }

        &.reviews {
            left: 50rem;
            width: 7.5rem;
        }
    }
}
</style>
