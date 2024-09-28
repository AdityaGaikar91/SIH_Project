import React from 'react'
import { MapPin } from 'lucide-react'

function CollegeExplorer() {
  const colleges = [
    { name: "IIT MADRAS", location: "Madras" },
    { name: "IIT DELHI", location: "Delhi" },
    { name: "IIT BOMBAY", location: "Mumbai,Powai" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="colleges">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">Explore Top Colleges</h2>
        <p className="mt-4 mb-8 text-xl text-gray-400">
          Find detailed information about colleges and universities.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <div key={college.name} className="rounded-lg border border-gray-700 bg-gray-800 text-gray-100 shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-400">{college.name}</h3>
                <p className="mt-2 text-gray-400 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {college.location}
                </p>
                <button className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollegeExplorer