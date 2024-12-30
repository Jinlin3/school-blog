import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-red-400 px-5 py-3 font-sans shadow-sm">
      <nav className="flex items-center justify-start gap-7">
        <Link href="/">
          <div className="text-white">RUBlogs</div>
        </Link>
        <Link href="/posts">
          <div className="text-white">Recent Posts</div>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
