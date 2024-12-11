import { handlePassword } from "@/actions/password";

export default function PasswordPage() {

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