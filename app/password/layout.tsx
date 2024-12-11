import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cookies } from "next/dist/server/request/cookies";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Frontend Test",
};

export default async function PasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("auth");

  if (isAuthed) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
