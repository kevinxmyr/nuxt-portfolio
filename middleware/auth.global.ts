export default defineNuxtRouteMiddleware((to, from) => {
  // Read the cookie. Nuxt safely maps this on both server headers and client headers.
  const token = useCookie('auth_token');

  if(token.value && to.path === '/login') {
    console.log('token: from auth.global.ts:: ', token.value)
    return navigateTo('/dashboard')
  }

  if(!token.value && to.path === '/dashboard') {
    console.log('NO token: from auth.global.ts:: ', token.value)
    return navigateTo('/login')
  }

  // Define your protected routes
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  // If the user tries to access a protected page and has no token
  if (protectedRoutes.includes(to.path) && !token.value) {
    // Redirect them to the login page immediately
    return navigateTo('/login');
  }
});