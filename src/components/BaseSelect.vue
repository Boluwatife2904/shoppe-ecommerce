<script setup lang="ts">
interface Props {
    name: string
    options: string[]
    placeholder?: string
    modelValue: string
}

defineProps<Props>();
defineEmits(["update:modelValue"])
</script>

<template>
    <div class="input select">
        <select class="input__field" :name="name" :id="name" :value="modelValue"
            @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
            <option v-if="!!placeholder" value="">{{ placeholder }}</option>
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<style lang="scss">
.select {
    .input__field {
        font-size: 1.2rem;
        color: var(--dark-gray);
    }
}
</style>