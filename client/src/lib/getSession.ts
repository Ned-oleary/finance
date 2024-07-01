export interface SessionData {
    message: string;
    user_id: number;
    display_name: string;
  }

export default async function getSession(): Promise<any> {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate_session`, {method:"GET", credentials: "include"})

    return response
}