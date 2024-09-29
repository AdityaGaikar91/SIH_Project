import React from 'react'
import { Search } from 'lucide-react'

function HeroSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://64.media.tumblr.com/1972a18bebff1d80af4e8f25f3325f16/tumblr_o6tkwjAGsQ1smqdb1o1_400.gifv)',
      }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#CBE4DE]">
            Navigate Your Future
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            Explore career paths, discover colleges, and plan your academic journey with confidence.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-100"
                placeholder="Search careers or colleges"
                type="text"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-[#0E8388] text-white hover:bg-[#2E4F4F] h-10 py-2 px-4"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
  </section>
  
  )
}

export default HeroSection
