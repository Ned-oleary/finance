export interface SessionData {
    message: string;
    user_id: number;
    display_name: string;
  }

/* don't think this is in use anymore */
export default async function updateUser(): Promise<any>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/update_self`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({
        username: "79bb2172-4b50-48a2-a301-3fb558dde95f",
        display_name: "changed display name"
      })
    })
    return response
}