<script setup>
defineProps({
    value: String,
    subLabel: String
});
</script>

<template>
    <label class="block font-medium text-sm text-gray-700 dark:text-gray-300">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <span v-if="subLabel" class="text-gray-400 block w-full text-sm">{{ subLabel }}</span>
    </label>
</template>
