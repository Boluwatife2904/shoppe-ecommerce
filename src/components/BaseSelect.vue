<script setup lang="ts">
import { computed } from "vue";

interface Props {
    name: string;
    options: string[];
    placeholder?: string;
    modelValue: string;
    size?: string;
}

const props = defineProps<Props>();
defineEmits(["update:modelValue"]);

const fontClasses = computed(() => {
    switch (props.size) {
        case "large":
            return "input__field--large-font";
        default:
            break;
    }
});
</script>

<template>
    <div class="input select">
        <select class="input__field" :class="[fontClasses]" :name="name" :id="name" :value="modelValue" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
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

        &--large-font {
            font-size: 1.6rem;
        }
    }
}
</style>
