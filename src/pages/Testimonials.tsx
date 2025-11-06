import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Newcastle upon Tyne',
      rating: 5,
      text: 'AA Waste Removals provided an excellent service for our house clearance. They were professional, punctual, and handled everything with care. Highly recommended!',
      service: 'House Clearance',
    },
    {
      name: 'Michael Thompson',
      location: 'Newcastle upon Tyne',
      rating: 5,
      text: 'Fast, reliable, and eco-friendly. They cleared our garden waste in no time and at a great price. Will definitely use them again!',
      service: 'Garden Waste Removal',
    },
    {
      name: 'Emma Williams',
      location: 'Newcastle upon Tyne',
      rating: 5,
      text: 'Outstanding service! They removed all our building waste from a renovation project quickly and efficiently. Professional team and great value.',
      service: 'Building Waste Removal',
    },
    {
      name: 'David Brown',
      location: 'Newcastle upon Tyne',
      rating: 5,
      text: 'Same-day service when we needed it most. The team was polite, professional, and left everything spotless. Couldn\'t ask for more!',
      service: 'Rubbish Clearance',
    },
    {
      name: 'Lisa Anderson',
      location: 'Newcastle upon Tyne',
      rating: 5,
      text: '100% satisfied! They handled our estate clearance with sensitivity and professionalism. Fair pricing and excellent communication throughout.',
      service: 'House Clearance',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              100% positive reviews from satisfied clients across Newcastle upon
              Tyne
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-accent rounded-2xl p-8 md:p-12 text-center"
              >
                <Quote
                  size={48}
                  className="text-primary mx-auto mb-6 opacity-50"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-primary mt-2">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-primary mt-1">
                    {testimonial.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Satisfied Customers
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the same excellent service. Get your free quote today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

