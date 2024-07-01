
export default async function getSession(): Promise<any> {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate_session`, {method:"GET", credentials: "include"})
    //const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {method: "POST", credentials: "include"})

    return response
}