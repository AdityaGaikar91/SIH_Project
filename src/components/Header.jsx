import React from 'react'
import { GraduationCap } from 'lucide-react'

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
      <a className="flex items-center justify-center" href="#">
        <GraduationCap className="h-6 w-6 text-blue-400" />
        <span className="ml-2 text-lg font-bold text-blue-400">CareerCompass</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
          Home
        </a>
        <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
          Career Paths
        </a>
        <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
          Colleges
        </a>
        <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
          About
        </a>
      </nav>
    </header>
  )
}

export default Header