<script setup lang="ts">
const username = ref('');
const password = ref('');
const errorMessage = ref('');

async function handleLogin() {
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: { username: username.value, password: password.value }
    });
    // Redirect to dashboard on success
    navigateTo('/dashboard');
  } catch (err: any) {
    errorMessage.value = err.statusMessage || 'Login failed';
  }
}
</script>

<template>
<div>
  <NuxtLink to="/dashboard">
    <UButton variant="outline" color="primary">
      Dashboard
    </UButton>
  </NuxtLink>
</div>
  <div style="max-width: 400px; margin: 100px auto; padding: 20px; border: 1px solid #ccc;">
    <h2>Login Page</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Username: </label>
        <input v-model="username" type="text" required />
      </div>
      <br />
      <div>
        <label>Password: </label>
        <input v-model="password" type="password" required />
      </div>
      <br />
      <button type="submit">Log In</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>