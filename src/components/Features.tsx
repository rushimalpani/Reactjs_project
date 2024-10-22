import React, { useState } from 'react'

const plants = [
  {
    title: 'Colorful Flowers',
    description: 'Brighten up your garden with our wide variety of vibrant flowers.',
    image: 'https://via.placeholder.com/400x300?text=Colorful+Flowers',
    details: 'Our collection includes roses, tulips, sunflowers, and many more seasonal blooms.'
  },
  {
    title: 'Lush Indoor Plants',
    description: 'Bring nature indoors with our selection of easy-to-care-for houseplants.',
    image: 'https://via.placeholder.com/400x300?text=Indoor+Plants',
    details: 'From low-light tolerant plants to air-purifying varieties, we have the perfect indoor plant for every space.'
  },
  {
    title: 'Organic Herbs',
    description: 'Grow your own fresh herbs for cooking with our organic herb seedlings.',
    image: 'https://via.placeholder.com/400x300?text=Organic+Herbs',
    details: 'Our herb collection includes basil, rosemary, thyme, mint, and many other culinary favorites.'
  },
  {
    title: 'Fruit Trees',
    description: 'Enjoy homegrown fruits with our selection of fruit trees perfect for your climate.',
    image: 'https://via.placeholder.com/400x300?text=Fruit+Trees',
    details: 'We offer a variety of apple, pear, cherry, and citrus trees suitable for different growing zones.'
  },
]

const Features: React.FC = () => {
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);

  return (
    <section id="our-plants" className="py-20 bg-paradise-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-paradise-green-800">Our Plant Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plants.map((plant, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedPlant(selectedPlant === index ? null : index)}
            >
              <img src={plant.image} alt={plant.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-paradise-green-700">{plant.title}</h3>
              <p className="text-gray-600">{plant.description}</p>
              {selectedPlant === index && (
                <div className="mt-4 text-paradise-green-600 animate-fadeIn">
                  <p>{plant.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features