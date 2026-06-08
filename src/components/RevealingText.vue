<template>
   <!-- class name dito sa span ↙️↙️ staggered-text-container -->
   <span class="text-5xl font-bold">
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
            delay: index * staggerDelay // Dynamic stagger delay
         }
      }" class="inline-block">
         <template v-if="item === ' '">&nbsp;</template>
         <template v-else>{{ item }}</template>
      </span>
   </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
   text: {
      type: String,
      required: true
   },
   // Split by 'letters' or 'words'
   by: {
      type: String,
      default: 'letters',
      validator: (value) => ['letters', 'words'].includes(value)
   },
   // Delay between each element in milliseconds
   staggerDelay: {
      type: Number,
      default: 25
   }
})

// Split the text based on the prop configuration
const items = computed(() => {
   if (props.by === 'words') {
      return props.text.split(' ').map(word => word + ' ')
   }
   return props.text.split('')
})
</script>