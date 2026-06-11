export default defineEventHandler(async (event) => {

  const sessionId = getCookie(event, "session_id")

  if(!sessionId) {
    return { success: false, message: "No session ID found" }
  }

  const storage = useStorage();
  const cachedUser = await storage.getItem(`session:${sessionId}`) as { userId: number; username: string; loggedInAt: string } | null;

  if(!cachedUser) {
    return { success: false, message: "Invalid session ID" }
  }

  return { success: true, user: cachedUser }

})
