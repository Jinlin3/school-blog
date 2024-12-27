import React from 'react'
import { auth, signIn } from "@/auth"

const LoginCard = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-center mx-auto h-[50vh] w-[40vh] bg-white border border-red-500 rounded-2xl">
      {session && session?.user ? (
        <span className="text-black text-center">Thanks for logging in {session?.user?.name}</span>
      ) : (
        <>
          Please log in.
        </>
      )}
      <form action={async () => {
        "use server"
        await signIn("google")
      }}>
        <button type="submit" className="bg-blue-400 text-black p-3 rounded-lg">Login with Google</button>
      </form>
    </div>
  )
}

export default LoginCard