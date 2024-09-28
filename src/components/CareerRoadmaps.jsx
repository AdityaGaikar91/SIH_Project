import React from 'react'

function CareerRoadmaps() {
  const fields = ["Technology", "Healthcare", "Business"]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="career-paths">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">Career Roadmaps</h2>
        <p className="mt-4 mb-8 text-xl text-gray-400">
          Explore various career paths and plan your journey to success.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {fields.map((field) => (
            <div key={field} className="rounded-lg border border-gray-800 bg-gray-800 text-gray-100 shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-400">{field}</h3>
                <p className="mt-2 text-gray-400">Discover career paths in {field.toLowerCase()}.</p>
                <button className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-gray-700 text-gray-100 hover:bg-gray-700 h-10 py-2 px-4">
                  View Roadmap
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerRoadmaps