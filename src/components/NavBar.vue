import { NuxtLink } from '../../.nuxt/components';
<template>

<nav class="min-w-[280px] flex justify-center m-[0_auto] bg-opacity-50 bg-[#242424] py-2 px-6 rounded-full mt-4 text-sm border border-[#353535] border-opacity-25">
   <ul class="flex gap-4">
      <li v-for="link of navList" :key="link.name">
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
   </ul>
</nav>


</template>




<script setup lang="ts">

const navList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

</script>