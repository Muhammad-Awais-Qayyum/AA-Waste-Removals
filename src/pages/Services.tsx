import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Leaf, Trash2, Building2, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'House Clearances',
      description:
        'Complete house clearance services for properties of all sizes. We handle everything from furniture and appliances to personal belongings with care and professionalism.',
      features: [
        'Full property clearances',
        'Estate clearances',
        'Tenant move-out clearances',
        'Eco-friendly disposal',
      ],
      color: 'primary',
    },
    {
      icon: Leaf,
      title: 'Garden Waste Removal',
      description:
        'Professional garden waste removal including branches, leaves, grass clippings, and other organic materials. We ensure proper composting and recycling.',
      features: [
        'Garden debris removal',
        'Tree and branch disposal',
        'Composting services',
        'Seasonal cleanups',
      ],
      color: 'secondary',
    },
    {
      icon: Trash2,
      title: 'Rubbish Clearance',
      description:
        'Fast and efficient rubbish clearance for domestic and commercial properties. Same-day service available for urgent removals.',
      features: [
        'Domestic rubbish removal',
        'Commercial waste clearance',
        'Same-day service',
        'Regular collection services',
      ],
      color: 'primary',
    },
    {
      icon: Building2,
      title: 'Building Waste Removal',
      description:
        'Specialized building waste removal for construction and renovation projects. We handle bricks, concrete, timber, and other construction materials.',
      features: [
        'Construction waste removal',
        'Renovation debris clearance',
        'Heavy materials handling',
        'Skip hire alternatives',
      ],
      color: 'secondary',
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive waste removal solutions for homes and businesses in
              Newcastle upon Tyne
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isPrimary = service.color === 'primary'
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-all shadow-lg"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                      isPrimary ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}
                  >
                    <Icon
                      size={32}
                      className={isPrimary ? 'text-primary' : 'text-secondary'}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-700"
                      >
                        <CheckCircle
                          size={20}
                          className={`mr-3 mt-1 flex-shrink-0 ${
                            isPrimary ? 'text-primary' : 'text-secondary'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className={`inline-block mt-6 ${
                        isPrimary
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-secondary text-white hover:bg-secondary/90'
                      } px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      Get Quote
                    </Link>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
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
              Why Choose Our Services?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-xl text-gray-600">Always Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">
                Same-Day
              </div>
              <div className="text-xl text-gray-600">Fast Service</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">Free</div>
              <div className="text-xl text-gray-600">No Hidden Fees</div>
            </motion.div>
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
              Need a Quote?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free, no-obligation quote on any of our
              services
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

export default Services

