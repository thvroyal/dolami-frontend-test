import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function PasswordPage() {
  async function handlePassword(formData: FormData) {
    'use server'
    const password = formData.get('password')
    if (password === process.env.SITE_PASSWORD) {
      const cookieStore = await cookies()
      cookieStore.set('auth', 'true')
      redirect('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={handlePassword} className="space-y-4">
        <input
          type="password"
          name="password"
          className="border p-2 rounded text-black"
          placeholder="Enter password"
          autoFocus
        />
        <button type="submit" className="block w-full bg-primary p-2 rounded">
          Enter
        </button>
      </form>
    </div>
  );
} 