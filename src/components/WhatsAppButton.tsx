import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '447470161724' // WhatsApp number without + or spaces
  const message = encodeURIComponent('Hello! I would like to get a quote for waste removal services.')

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-lg whitespace-nowrap hidden sm:block pointer-events-none"
      >
        Chat on WhatsApp
        <span className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-900 w-2 h-2"></span>
      </motion.span>
    </motion.a>
  )
}

export default WhatsAppButton

