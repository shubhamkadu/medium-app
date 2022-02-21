import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
          ></img>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>about</h3>
          <h3>contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white ">
            follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sigin</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Get started
        </h3>
      </div>
    </header>
  )
}

export default Header
