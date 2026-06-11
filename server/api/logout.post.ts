export default defineEventHandler(async (event) => {
  const sessionId = getCookie(event, 'session_id');

  if(sessionId) {
    const storage = useStorage();
    await storage.removeItem(`session:${sessionId}`);
  }

  deleteCookie(event, 'session_id', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return { success: true, message: 'Logged out successfully!' };
})
