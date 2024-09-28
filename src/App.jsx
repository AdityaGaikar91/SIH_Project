import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import CareerRoadmaps from './components/CareerRoadmaps'
import CollegeExplorer from './components/CollegeExplorer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CareerRoadmaps />
        <CollegeExplorer />
      </main>
      <Footer />
    </div>
  )
}

export default App