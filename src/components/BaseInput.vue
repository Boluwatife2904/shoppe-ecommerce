<script setup lang="ts">
interface Props {
    id: string,
    type: string,
    label?: string,
    modelValue: string | number,
    placeholder?: string,
    error?: boolean
}

defineProps<Props>();
defineEmits(['update:modelValue', 'focus'])
</script>

<template>
    <div class="input position-relative w-100">
        <label v-if="!!label" :for="id" class="input__label">{{ label }}</label>
        <input class="input__field" :value="modelValue" :type="type" :name="id" :id="id" :placeholder="placeholder"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @focus="$emit('focus')"
            >
        <small v-if="error" class="input__error position-absolute block error-text">Required field</small>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/abstract/mixins";
.input {
    &__field {
        @include typeface(400, 1.6rem, 2.7rem);

        background-color: transparent;
        border: none;
        color: var(--black-color);
        border-bottom: 0.1rem solid var(--black-color);
        outline: none;
        padding-bottom: 1.3rem;
        width: 100%;

        &::placeholder {
            color: var(--dark-gray);
        }
    }

    &__error {
        @include typeface(400, 1.4rem, 2rem);
        left: 0;
        bottom: -3rem;
    }
}
</style>