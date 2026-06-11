<template>
  <div>
    <h1>
      const name = useState('globalName') is
      <span class="text-primary font-bold uppercase">{{ name }}</span>
    </h1>
    <h1>Contact Us Page</h1>
    <p>It works!</p>
    <NuxtLink to="/">Go Home</NuxtLink>
  </div>
</template>

<script setup>
const name = useState("globalName");
</script>
