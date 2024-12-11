'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function handlePassword(formData: FormData) {
  const password = formData.get('password')
  if (password === process.env.SITE_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set('auth', 'true')
    redirect('/')
  }
}