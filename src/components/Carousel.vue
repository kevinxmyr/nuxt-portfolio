<script setup>
const pics = [
   "/run.JPG",
   "/drone.JPG",
   "/keyboard.JPG",
   "/nightsky.JPG",
   "/kimm.png",
   "/kevin.JPG",
   // "https://picsum.photos/468/468?random=13",
   // "https://picsum.photos/468/468?random=24",
   // "https://picsum.photos/468/468?random=35",
   // "https://picsum.photos/468/468?random=40",
   // "https://picsum.photos/468/468?random=20",
   // "https://picsum.photos/468/468?random=10",
];
</script>

<template>
   <div class="relative max-w-250 mx-auto">
      <div
         class="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-[#171717] via-transparent to-[#171717]">
      </div>

      <UCarousel
         loop
         v-slot="{ item, index }"
         :auto-scroll="{ speed: 0.35, }"
         :items="pics"
         indicators
         :ui="{ item: 'basis-[237px]', container: '' }"
         class="rounded-lg w-full overflow-hidden"
         >
         <div class="m-2">
            <img :src="item" width="237" height="237" alt="CarouselImages" :class="[
               'rounded-lg', 'aspect-square', 'object-cover',
               item === '/run.JPG' &&  'object-top',
               index % 2 === 0 ? 'rotate-3' : '-rotate-3',
            ]" loading="lazy" />
         </div>
         </UCarousel>
      </div>
   </template>

<style scoped>
.inline-block {
   display: inline-block;
   white-space: pre-wrap;
}
</style>
