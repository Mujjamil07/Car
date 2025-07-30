import Link from 'next/link'
import { Search, Shield, Zap, Users, ArrowRight, Star } from 'lucide-react'
import { SearchBar } from '@/components/search-bar'
import { FeaturedCars } from '@/components/featured-cars'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover thousands of quality vehicles from trusted sellers. Buy with confidence, sell with ease.
            </p>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CarHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make buying and selling cars simple, secure, and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                All transactions are protected with advanced security measures and verified seller profiles.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick & Easy</h3>
              <p className="text-gray-600">
                List your car in minutes or find your dream vehicle with our advanced search filters.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Community</h3>
              <p className="text-gray-600">
                Join thousands of satisfied buyers and sellers in our trusted automotive marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Cars
              </h2>
              <p className="text-lg text-gray-600">
                Handpicked vehicles from our premium collection
              </p>
            </div>
            <Link 
              href="/cars" 
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All Cars</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <FeaturedCars />

          <div className="text-center mt-8 md:hidden">
            <Link 
              href="/cars" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>View All Cars</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Cars Listed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Dealers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're buying or selling, CarHub makes it simple and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/cars" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Browse Cars
            </Link>
            <Link 
              href="/sell" 
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              Sell Your Car
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
