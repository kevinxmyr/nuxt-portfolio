<script setup>

const pics = [
   'https://picsum.photos/468/468?random=1',
   'https://picsum.photos/468/468?random=2',
   'https://picsum.photos/468/468?random=3',
   'https://picsum.photos/468/468?random=4',
   'https://picsum.photos/468/468?random=5',
   'https://picsum.photos/468/468?random=6'
]
</script>

<template>
   <div class="relative w-full">
      <div
         class="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#171717] via-transparent via-transparent to-[#171717]">
      </div>

      <UCarousel v-slot="{ item, index }" loop arrows :auto-scroll="{ speed: 0.5 }" :items="pics"
         :ui="{ item: 'basis-1/3', container: '' }" class="">
         <div class="m-2">
            <img :src="item" width="237" height="237"
               :class="['rounded-lg', index % 2 === 0 ? 'rotate-3' : 'rotate-[-3deg]']" loading="lazy">
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