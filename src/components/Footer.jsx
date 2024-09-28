import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
      <p className="text-xs text-gray-400">TEXT</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs text-gray-400 hover:text-blue-400 transition-colors" href="#">
          TEXT
        </a>
        <a className="text-xs text-gray-400 hover:text-blue-400 transition-colors" href="#">
          TEXT
        </a>
      </nav>
    </footer>
  )
}

export default Footer