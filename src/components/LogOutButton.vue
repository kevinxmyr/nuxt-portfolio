<script lang="ts" setup>
const handleLogout = async () => {
  await fetch('/api/logout', { method: 'POST' });
  navigateTo('/login');
}
</script>

<template>
  <UButton class="mt-4 hover:cursor-pointer" @click="handleLogout" variant="outline" color="error">
    Log Out
  </UButton>
</template>

<style scoped>

</style>