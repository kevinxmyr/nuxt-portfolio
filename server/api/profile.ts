export default defineEventHandler(async (event) => {
  const token = getCookie(event, "auth_token")

  if(!token) {
    return { success: false, message: "No token found" }
  }

  return {name: 'kevin', role: 'admin'}
})
