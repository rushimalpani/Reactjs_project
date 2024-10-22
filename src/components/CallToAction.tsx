import React, { useState } from 'react'

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section id="visit-us" className="bg-paradise-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Visit Paradise Nursery Today!</h2>
        <p className="text-xl mb-8">Come see our beautiful plants and get expert advice from our gardening specialists.</p>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg inline-block mb-8">
          <p className="font-semibold mb-2 text-paradise-green-700">Our Location:</p>
          <address className="not-italic">
            123 Green Street<br />
            Gardenville, GR 12345
          </address>
          <p className="mt-4 text-sm text-paradise-green-600">
            Open 7 days a week, 9 AM - 6 PM
          </p>
        </div>
        <div className="mb-8">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-paradise-green-700 py-3 px-8 rounded-full text-lg font-semibold hover:bg-paradise-green-100 transition duration-300 shadow-md"
          >
            Get Directions
          </a>
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          {subscribed ? (
            <p className="text-paradise-green-200 animate-fadeIn">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-paradise-green-400"
                required
              />
              <button
                type="submit"
                className="bg-white text-paradise-green-700 py-2 px-6 rounded-full font-semibold hover:bg-paradise-green-100 transition duration-300 shadow-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default CallToAction