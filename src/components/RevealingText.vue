<script setup>
import { computed } from 'vue'

const props = defineProps({
   text: { type: String, required: true },
   by: {
      type: String,
      default: 'letters',
      validator: (value) => ['letters', 'words'].includes(value)
   },
   staggerDelay: { type: Number, default: 50 }
})

// 3. Cleaned up: Removed the trailing space concatenation.
// Tailwind's 'gap-x' in the template handles the spaces now!
const items = computed(() => {
   if (props.by === 'words') {
      return props.text.split(' ')
   }
   return props.text.split('')
})
</script>

<template>
   <!-- <span class="text-5xl font-bold flex flex-wrap justify-center text-center mx-auto gap-x-[0.25em] gap-y-2"> -->
   <span
      class="leading-8 text-4xl md:leading-10 p-2 md:p-0 md:text-5xl font-bold flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 text-center mx-auto ">
      <span v-for="(item, index) in items" :key="index" v-motion :initial="{
         opacity: 0,
         y: 20,
         filter: 'blur(10px)'
      }" :enter="{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
               type: 'spring',
               stiffness: 100,
               damping: 15,
               delay: index * staggerDelay
            }
         }" class="inline-block whitespace-nowrap"> {{ item }}
      </span>
   </span>
</template>
