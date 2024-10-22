import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-paradise-green-600 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img src="https://via.placeholder.com/1920x1080?text=Nursery+Background" alt="Nursery background" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 shadow-text animate-fadeIn">Welcome to Paradise Nursery</h1>
        <p className="text-xl md:text-2xl mb-8 shadow-text animate-fadeIn animation-delay-300">Discover the beauty of nature in your own backyard</p>
        <a 
          href="#our-plants" 
          className="bg-white text-paradise-green-700 py-3 px-8 rounded-full text-lg font-semibold hover:bg-paradise-green-100 transition duration-300 shadow-md animate-fadeIn animation-delay-600"
        >
          Explore Our Collection
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero