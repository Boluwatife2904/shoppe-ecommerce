<script setup lang="ts">
interface Props {
    variant?: string
}

defineProps<Props>()
</script>


<template>
    <button class="button">
        <slot></slot>
    </button>
</template>