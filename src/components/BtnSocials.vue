<script setup>
defineProps({
   size: {
      type: String,
      default: 'md'
   },
   icon: {          // Fixed: Removed the accidental '(' syntax error here
      type: String,
      required: true,
      default: "i-simple-icons-instagram"
   },
   color: {
      type: String,
      default: "neutral"
   },
   variant: {
      type: String,
      default: "ghost"
   }
})
</script>

<template>
  <UButton
    :icon="icon"
    :color="color"
    :variant="variant"
    :size="size"
  />
</template>