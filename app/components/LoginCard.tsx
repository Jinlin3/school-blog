import React from 'react'
import { auth, signIn, signOut } from "@/auth"
import { redirect } from 'next/dist/server/api-utils';

const LoginCard = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center gap-2 mx-auto h-[50vh] w-[40vh] bg-gray-200 border border-red-500 rounded-2xl">
      {session && session?.user ? (
        <>
          <span className="text-black text-center">Thanks for logging in <b>{session?.user?.name}</b>!</span>
          <form action={async () => {
            "use server"
            await signOut()
          }}>
            <button type="submit" className="bg-blue-400 text-black p-3 rounded-lg">Logout</button>
          </form>
        </>
        

      ) : (

        <form action={async () => {
          "use server"
          await signIn("google")
        }}>
          <button type="submit" className="bg-blue-400 text-black p-3 rounded-lg">Login with Google</button>
        </form>

      )}
    </div>
  )
}

export default LoginCard