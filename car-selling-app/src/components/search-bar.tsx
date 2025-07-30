'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, DollarSign, Car } from 'lucide-react'

export function SearchBar() {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    make: '',
    model: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    
    Object.entries(searchData).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    
    router.push(`/cars?${params.toString()}`)
  }

  const popularMakes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 
    'Audi', 'Volkswagen', 'Nissan', 'Hyundai'
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Make */}
          <div className="relative">
            <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={searchData.make}
              onChange={(e) => setSearchData({ ...searchData, make: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Any Make</option>
              {popularMakes.map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              value={searchData.location}
              onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Min Price */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="number"
              placeholder="Min Price"
              value={searchData.minPrice}
              onChange={(e) => setSearchData({ ...searchData, minPrice: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Max Price */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="number"
              placeholder="Max Price"
              value={searchData.maxPrice}
              onChange={(e) => setSearchData({ ...searchData, maxPrice: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium"
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </button>
        </div>

        {/* Quick Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Popular:</span>
          {['Under $10k', 'Under $20k', 'SUVs', 'Electric', 'Luxury'].map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                if (filter === 'Under $10k') {
                  setSearchData({ ...searchData, maxPrice: '10000' })
                } else if (filter === 'Under $20k') {
                  setSearchData({ ...searchData, maxPrice: '20000' })
                }
                // Add more filter logic as needed
              }}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </form>
    </div>
  )
}