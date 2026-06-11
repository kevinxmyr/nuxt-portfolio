<!-- <script setup lang="ts">
// useFetch will automatically send the cookie up to the server
// on layout load



const { data: user, error } = await useFetch("/api/me", {
  transform: (response) => response?.user,
})

// If server rejects the session cookie/cache, boot them back to login
if (error.value || !user.value) {
  navigateTo("/login");
}
</script>

<template>
  <div v-if="user" style="max-width: 600px; margin: 100px auto; padding: 20px">
    <h1>Dashboard</h1>
    <div v-if="user">
      <p>
        Welcome back, <strong>{{ user.username }}</strong
        >!
      </p>
      <p>Your Database User ID is: {{ user.userId }}</p>
      <p>
        This data was pulled directly out of lightning-fast server cache memory.
      </p>
      <LogOutButton/>
    </div>
    <div v-else>
      <p>Loading your profile...</p>
    </div>
  </div>
</template> -->
