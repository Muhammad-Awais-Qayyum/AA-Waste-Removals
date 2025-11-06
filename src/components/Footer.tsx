import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              AA Waste Removals
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted waste removal experts in Newcastle upon Tyne. Fast,
              reliable, and eco-friendly disposal services.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>House Clearances</li>
              <li>Garden Waste Removal</li>
              <li>Rubbish Clearance</li>
              <li>Building Waste Removal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:07918121461"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    07918 121461
                  </a>
                  <br />
                  <a
                    href="tel:+447470161724"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    +44 7470 161724
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:kylefradgley11@icloud.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  kylefradgley11@icloud.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Newcastle upon Tyne, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} AA Waste Removals. All rights reserved. | Fully
            Insured | Licensed Waste Carriers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

