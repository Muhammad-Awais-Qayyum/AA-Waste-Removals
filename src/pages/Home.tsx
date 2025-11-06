import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Trash2, Home as HomeIcon, Leaf, Building2 } from 'lucide-react'

const Home = () => {

  const floatingIcons = [
    { icon: Trash2, x: 10, y: 20, delay: 0 },
    { icon: HomeIcon, x: 80, y: 60, delay: 0.5 },
    { icon: Leaf, x: 50, y: 80, delay: 1 },
    { icon: Building2, x: 20, y: 40, delay: 1.5 },
  ]

  const features = [
    {
      icon: Phone,
      title: '24/7 Service',
      description: 'Always available when you need us',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Responsible disposal and recycling',
    },
    {
      icon: HomeIcon,
      title: 'Fully Insured',
      description: 'Licensed and fully insured operations',
    },
    {
      icon: Trash2,
      title: 'Same-Day Service',
      description: 'Fast response and quick removal',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="absolute opacity-10"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              >
                <Icon size={80} className="text-primary" />
              </motion.div>
            )
          })}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Your Local Waste
              <br />
              <span className="text-primary">Removal Experts</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Fast, reliable, and eco-friendly waste removal services in
              Newcastle upon Tyne. Same-day service, fully insured, 100% positive
              reviews.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 150, 190, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-primary/90 transition-colors inline-block"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a
                href="tel:07918121461"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(138, 182, 106, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-secondary/90 transition-colors"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional service you can trust, every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-accent p-8 rounded-xl text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free, no-obligation quote. We're here to
              help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
            </motion.div>
              <motion.a
                href="tel:07918121461"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Call 07918 121461
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

