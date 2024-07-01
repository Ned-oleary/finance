
export default async function addUser(): Promise<any>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/add_user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        display_name: "Bob the builder",
        password: "password"
      })
    })
    return response
}

// TODO