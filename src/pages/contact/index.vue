<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>Contact Us Page</h1>
    <p>It works!</p>
    <NuxtLink to="/">Go Home</NuxtLink>
  </div>
</template>

<script setup>
const name = useState('globalName')


</script>