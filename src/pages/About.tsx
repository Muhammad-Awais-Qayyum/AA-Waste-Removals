import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Leaf, Clock, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description:
        'We are fully licensed and insured, giving you complete peace of mind with every job.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description:
        'We are committed to responsible waste disposal and recycling, protecting our environment.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description:
        'We understand that waste removal needs can arise at any time. That\'s why we\'re always available.',
    },
    {
      icon: Award,
      title: '100% Positive Reviews',
      description:
        'Our commitment to excellence has earned us 100% positive reviews from satisfied clients.',
    },
  ]

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
              About <span className="text-primary">AA Waste Removals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted waste removal experts serving Newcastle upon Tyne
              with professionalism, reliability, and environmental responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  AA Waste Removals has been serving the Newcastle upon Tyne
                  community with reliable and professional waste removal services.
                  We understand that waste management is not just about removing
                  unwanted items—it's about providing a service that is fast,
                  affordable, and environmentally responsible.
                </p>
                <p>
                  Our team of professional, polite, and punctual staff is dedicated
                  to making your waste removal experience as smooth and stress-free
                  as possible. Whether you need a house clearance, garden waste
                  removal, or building waste disposal, we're here to help.
                </p>
                <p>
                  We take pride in our 100% positive review rating and our
                  commitment to eco-friendly disposal practices. Every job is
                  handled with care, ensuring that waste is disposed of responsibly
                  and recycled whenever possible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-accent rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-xl text-gray-600">Positive Reviews</div>
                </div>
                <div className="border-t border-gray-300 pt-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Same-day waste removal service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Eco-friendly and responsible disposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Licensed and fully insured</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Professional, polite, and punctual staff</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Free quotes with no hidden fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch today for a free, no-obligation quote
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

