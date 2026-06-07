import { UButton } from '../../.nuxt/components';
<script setup>
const count = ref(0);
</script>

<template>
  <div class="px-28">
    <div class="flex gap-4">
      <NavBar />
    </div>

    <!-- dito ilalagay ang lahat ng stacking ng components -->

    <Hero />
  </div>
</template>
