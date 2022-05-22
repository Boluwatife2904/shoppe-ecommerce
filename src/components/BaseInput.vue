<script setup lang="ts">
interface Props {
    id: string,
    type: string,
    label?: string,
    modelValue: string | number,
    placeholder?: string
}

defineProps<Props>();
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="input">
        <label v-if="!!label" :for="id" class="input__label">{{ label }}</label>
        <input class="input__field" :value="modelValue" :type="type" :name="id" :id="id" :placeholder="placeholder"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
    </div>
</template>


<style lang="scss" scoped></style>