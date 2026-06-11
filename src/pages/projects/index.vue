<script setup>

const arr = [
   { id: 5, bg: 'bg-slate-500' }, // Note: Tailwind uses slate-50 or slate-100, slate-000 is invalid
   { id: 6, bg: 'bg-slate-600' },
   { id: 8, bg: 'bg-slate-800' },
   { id: 9, bg: 'bg-slate-900' }
];
</script>

<template>
   <div class="grid grid-cols-4 gap-2 justify-center h-svw mx-auto border border-orange-400">

      <p v-for="a in arr" :key="a" :class="['text-sm', 'text-[#A1A1A1]', a.bg]">hello projects</p>

   </div>

</template>