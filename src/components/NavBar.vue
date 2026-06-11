<script setup lang="ts">
import { useRoute } from 'vue-router';
import {ref, watch} from 'vue'
const navList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const route = useRoute();
const activeLink = ref(route.path)


watch(() => route.path, (newPath) => {
  activeLink.value = newPath;
})


</script>
<template>

  <nav
    class="flex justify-center m-[0_auto] bg-opacity-50 bg-[#242424] py-2 px-6 rounded-full mt-4 text-sm border border-[#353535] border-opacity-25">
    <ul class="flex gap-4">
      <li v-for="link of navList" :key="link.name"
        :class="activeLink === link.path ? 'text-[#A1A1A1] font-bold' : 'text-[#A1A1A1] opacity-35'">
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>


</template>
