import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://via.placeholder.com/600x400?text=About+Paradise+Nursery" alt="About Paradise Nursery" className="rounded-lg shadow-lg hover:shadow-xl transition duration-300" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-paradise-green-800">About Paradise Nursery</h2>
            <p className="text-gray-700 mb-4">
              At Paradise Nursery, we're passionate about bringing the beauty of nature to your home and garden. With over 20 years of experience, our team of expert horticulturists is dedicated to providing you with the highest quality plants and exceptional service.
            </p>
            <p className="text-gray-700 mb-4">
              We offer a wide selection of plants, from vibrant flowers to lush indoor plants, organic herbs, and fruit trees. Our nursery is committed to sustainable practices, ensuring that your garden not only looks beautiful but also contributes to a healthier environment.
            </p>
            <p className="text-gray-700 mb-6">
              Visit us today and let us help you create your own piece of paradise!
            </p>
            <div className="flex space-x-4">
              <a href="#visit-us" className="bg-paradise-green-600 text-white py-2 px-4 rounded-full hover:bg-paradise-green-700 transition duration-300">Visit Us</a>
              <a href="#" className="bg-paradise-green-100 text-paradise-green-700 py-2 px-4 rounded-full hover:bg-paradise-green-200 transition duration-300">Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About