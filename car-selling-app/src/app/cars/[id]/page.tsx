'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Gauge, 
  Fuel,
  Settings,
  Shield,
  Phone,
  MessageCircle,
  User,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react'

// Sample car data - in a real app, this would be fetched from the API
const carData = {
  id: '1',
  title: '2022 BMW X5 xDrive40i',
  price: 65000,
  year: 2022,
  make: 'BMW',
  model: 'X5',
  mileage: 15000,
  location: 'New York, NY',
  fuelType: 'PETROL',
  transmission: 'AUTOMATIC',
  bodyType: 'SUV',
  condition: 'EXCELLENT',
  color: 'Black',
  description: 'This pristine 2022 BMW X5 xDrive40i is a perfect blend of luxury and performance. With only 15,000 miles, this vehicle has been meticulously maintained and comes with a comprehensive service history. Features include premium leather seats, panoramic sunroof, advanced driver assistance systems, and much more.',
  images: [
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=600&fit=crop'
  ],
  features: [
    'Premium Leather Seats',
    'Panoramic Sunroof',
    'Navigation System',
    'Bluetooth Connectivity',
    'Backup Camera',
    'Heated Seats',
    'Keyless Entry',
    'Cruise Control',
    'Lane Departure Warning',
    'Automatic Emergency Braking'
  ],
  specifications: {
    engine: '3.0L Turbo Inline-6',
    horsepower: '335 hp',
    torque: '330 lb-ft',
    drivetrain: 'All-Wheel Drive',
    fuelEconomy: '22 city / 29 highway',
    seating: '5 passengers',
    cargo: '33.9 cubic feet',
    warranty: 'Factory warranty remaining'
  },
  seller: {
    id: 'seller1',
    name: 'John Smith',
    rating: 4.8,
    reviewCount: 23,
    memberSince: '2020',
    isVerified: true,
    phone: '+1 (555) 123-4567',
    location: 'New York, NY'
  }
}

export default function CarDetailPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === carData.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? carData.images.length - 1 : prev - 1
    )
  }

  const ContactForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Contact Seller</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="I'm interested in this vehicle..."
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/cars" className="text-blue-600 hover:text-blue-700">
            ← Back to Cars
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative">
                <Image
                  src={carData.images[currentImageIndex]}
                  alt={carData.title}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {carData.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {carData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${carData.title} ${index + 1}`}
                        width={80}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {carData.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{carData.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Listed 3 days ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`p-2 rounded-full border ${
                      isFavorited 
                        ? 'bg-red-50 border-red-200 text-red-600' 
                        : 'bg-gray-50 border-gray-200 text-gray-600'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full border bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-6">
                ${carData.price.toLocaleString()}
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-gray-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Year</div>
                  <div className="font-semibold">{carData.year}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Gauge className="h-6 w-6 text-gray-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Mileage</div>
                  <div className="font-semibold">{carData.mileage.toLocaleString()}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Fuel className="h-6 w-6 text-gray-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Fuel</div>
                  <div className="font-semibold">{carData.fuelType}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Settings className="h-6 w-6 text-gray-600 mx-auto mb-1" />
                  <div className="text-sm text-gray-600">Transmission</div>
                  <div className="font-semibold">{carData.transmission}</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{carData.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <div className="grid grid-cols-2 gap-2">
                  {carData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(carData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Seller Info and Actions */}
          <div className="space-y-6">
            {/* Price and Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="text-3xl font-bold text-blue-600 mb-6">
                ${carData.price.toLocaleString()}
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact Seller</span>
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Schedule Test Drive
                </button>
              </div>

              {/* Seller Info */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{carData.seller.name}</span>
                      {carData.seller.isVerified && (
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span>{carData.seller.rating}</span>
                        <span>({carData.seller.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Member since {carData.seller.memberSince}</div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{carData.seller.location}</span>
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="border-t pt-6 mt-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-900">Safety Tips</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Meet in a public place</li>
                  <li>• Inspect the vehicle thoroughly</li>
                  <li>• Verify ownership documents</li>
                  <li>• Consider a professional inspection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm />}
    </div>
  )
}