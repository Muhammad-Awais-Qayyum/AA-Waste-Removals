import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission - replace with actual email service
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const serviceTypes = [
    'House Clearances',
    'Garden Waste Removal',
    'Rubbish Clearance',
    'Building Waste Removal',
    'Other',
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
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote. We're here to
              help 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent. We'll get back to you
                    soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:07918121461"
                      className="text-primary hover:underline block"
                    >
                      07918 121461
                    </a>
                    <a
                      href="tel:+447470161724"
                      className="text-primary hover:underline block"
                    >
                      +44 7470 161724
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:kylefradgley11@icloud.com"
                      className="text-primary hover:underline"
                    >
                      kylefradgley11@icloud.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Newcastle upon Tyne, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <motion.a
                  href="tel:07918121461"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/447470161724"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-secondary text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.5!2d-1.6178!3d54.9783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e70c9c297e1d5%3A0x1f8b6b6b6b6b6b6b!2sNewcastle%20upon%20Tyne!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

