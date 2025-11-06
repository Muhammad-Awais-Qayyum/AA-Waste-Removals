import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery images - replace with your actual before/after photos
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/800/600?random=1',
      alt: 'House clearance before cleanup',
      category: 'Before',
      title: 'House Clearance',
    },
    {
      id: 2,
      src: 'https://picsum.photos/800/600?random=2',
      alt: 'House clearance after cleanup',
      category: 'After',
      title: 'House Clearance',
    },
    {
      id: 3,
      src: 'https://picsum.photos/800/600?random=3',
      alt: 'Garden waste before removal',
      category: 'Before',
      title: 'Garden Waste Removal',
    },
    {
      id: 4,
      src: 'https://picsum.photos/800/600?random=4',
      alt: 'Garden waste after removal',
      category: 'After',
      title: 'Garden Waste Removal',
    },
    {
      id: 5,
      src: 'https://picsum.photos/800/600?random=5',
      alt: 'Rubbish clearance before',
      category: 'Before',
      title: 'Rubbish Clearance',
    },
    {
      id: 6,
      src: 'https://picsum.photos/800/600?random=6',
      alt: 'Rubbish clearance after',
      category: 'After',
      title: 'Rubbish Clearance',
    },
    {
      id: 7,
      src: 'https://picsum.photos/800/600?random=7',
      alt: 'Building waste before removal',
      category: 'Before',
      title: 'Building Waste Removal',
    },
    {
      id: 8,
      src: 'https://picsum.photos/800/600?random=8',
      alt: 'Building waste after removal',
      category: 'After',
      title: 'Building Waste Removal',
    },
    {
      id: 9,
      src: 'https://picsum.photos/800/600?random=9',
      alt: 'Estate clearance before',
      category: 'Before',
      title: 'Estate Clearance',
    },
    {
      id: 10,
      src: 'https://picsum.photos/800/600?random=10',
      alt: 'Estate clearance after',
      category: 'After',
      title: 'Estate Clearance',
    },
    {
      id: 11,
      src: 'https://picsum.photos/800/600?random=11',
      alt: 'Commercial waste before',
      category: 'Before',
      title: 'Commercial Waste',
    },
    {
      id: 12,
      src: 'https://picsum.photos/800/600?random=12',
      alt: 'Commercial waste after',
      category: 'After',
      title: 'Commercial Waste',
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
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
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the results of our professional waste removal and cleanup
              services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement
                    target.src = `https://via.placeholder.com/800x600/2596be/ffffff?text=${encodeURIComponent(image.title)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">
                        {image.category} - {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                const target = e.target as HTMLImageElement
                target.src = `https://via.placeholder.com/800x600/2596be/ffffff?text=${encodeURIComponent(images[selectedImage].title)}`
              }}
            />
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-semibold text-gray-900">
                {images[selectedImage].category} - {images[selectedImage].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us help you achieve the same results. Get a free quote today.
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

export default Gallery

