// import { db } from '../utils/db';
// import { randomUUID } from 'crypto';

// interface LoginRequestBody {
//   username: string;
//   password: string;
// }

// interface User {
//   id: number;
//   username: string;
// }

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event) as LoginRequestBody;

//   // 1. Look up user in SQLite
//   const stmt = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?');
//   const user = stmt.get(body.username, body.password) as { id: number; username: string } | undefined;

//   if (!user) {
//     throw createError({ statusCode: 401, statusMessage: 'Invalid username or password' });
//   }

//   // 2. Generate a unique Session ID (The ticket stub)
//   const sessionId = randomUUID();

//   // 3. Save user profile data to Server Cache (The coat rack)
//   const storage = useStorage(); // Nitro's global built-in storage
//   await storage.setItem(`session:${sessionId}`, {
//     userId: user.id,
//     username: user.username,
//     loggedInAt: new Date().toISOString()
//   });

//   // 4. Send the Session ID to the browser as a secure Cookie
//   setCookie(event, 'session_id', sessionId, {
//     httpOnly: true, // Client JavaScript cannot touch this cookie
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     maxAge: 60 * 60 * 2 // Active for 2 hours
//   });

//   return { success: true, message: 'Logged in successfully!' };
// });

export default defineEventHandler(async (event) => {
  return {name: 'John AppleSeed', role: 'admin'}
})