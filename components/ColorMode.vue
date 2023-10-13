<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="ghost-gray square"
    size="xs"
    @click="toggleDark()"
    label="i-heroicons-sun-20-solid dark:i-heroicons-moon-20-solid"
    icon
  >
  </NButton>
</template>
