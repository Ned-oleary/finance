
export default async function addUser(displayName: string, password: string): Promise<any>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/add_user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        display_name: displayName,
        password: password
      })
    })
    return response
}

// TODO