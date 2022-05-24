<script setup lang="ts">
interface Props {
    label?: string
    id: string,
    modelValue: boolean
}

defineProps<Props>();
defineEmits(["update:modelValue"])
</script>

<template>
    <div class="checkbox">
        <label class="checkbox__label flex items-center" :for="id">
            <input class="checkbox__input" type="checkbox" :name="id" :id="id"
                @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" :checked="modelValue">
            <span v-if="!!label" class="heading-5">{{ label }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.checkbox {
    max-width: max-content;

    &__input {
        accent-color: var(--black-color);
        cursor: pointer;
        margin-right: .8rem;
    }

    &__label {
        cursor: pointer;
    }
}
</style>