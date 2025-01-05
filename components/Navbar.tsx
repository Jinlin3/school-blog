import Link from 'next/link';
import React from 'react';
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-red-400 px-5 py-3 shadow-sm">
      <nav className="flex justify-between text-white">
        <div className="flex gap-7">
          <Link href="/">
            <div>RUBlogs</div>
          </Link>
        </div>
        <div className="flex gap-7">
          {session && session?.user ? (
            <>
              <div>Welcome <b>{session.user.name}</b>!</div>
              <form 
                action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/" })
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
