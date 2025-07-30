'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Filter, 
  Grid, 
  List, 
  Heart, 
  MapPin, 
  Calendar, 
  Gauge, 
  Fuel,
  Settings,
  ChevronDown
} from 'lucide-react'

// Sample data - in a real app, this would come from the API
const sampleCars = [
  {
    id: '1',
    title: '2022 BMW X5 xDrive40i',
    price: 65000,
    year: 2022,
    make: 'BMW',
    model: 'X5',
    mileage: 15000,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    bodyType: 'SUV',
    condition: 'EXCELLENT',
    color: 'Black'
  },
  {
    id: '2',
    title: '2021 Tesla Model 3 Long Range',
    price: 45000,
    year: 2021,
    make: 'Tesla',
    model: 'Model 3',
    mileage: 25000,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop',
    fuelType: 'ELECTRIC',
    transmission: 'AUTOMATIC',
    bodyType: 'SEDAN',
    condition: 'GOOD',
    color: 'White'
  },
  {
    id: '3',
    title: '2023 Mercedes-Benz C-Class',
    price: 55000,
    year: 2023,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    mileage: 8000,
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    bodyType: 'SEDAN',
    condition: 'EXCELLENT',
    color: 'Silver'
  },
  {
    id: '4',
    title: '2020 Audi Q7 Premium Plus',
    price: 52000,
    year: 2020,
    make: 'Audi',
    model: 'Q7',
    mileage: 35000,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    bodyType: 'SUV',
    condition: 'GOOD',
    color: 'Blue'
  },
  {
    id: '5',
    title: '2019 Toyota Camry Hybrid',
    price: 28000,
    year: 2019,
    make: 'Toyota',
    model: 'Camry',
    mileage: 45000,
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
    fuelType: 'HYBRID',
    transmission: 'CVT',
    bodyType: 'SEDAN',
    condition: 'GOOD',
    color: 'Red'
  },
  {
    id: '6',
    title: '2022 Ford F-150 Lightning',
    price: 72000,
    year: 2022,
    make: 'Ford',
    model: 'F-150',
    mileage: 12000,
    location: 'Dallas, TX',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=300&fit=crop',
    fuelType: 'ELECTRIC',
    transmission: 'AUTOMATIC',
    bodyType: 'PICKUP',
    condition: 'EXCELLENT',
    color: 'Gray'
  }
]

export default function CarsPage() {
  const searchParams = useSearchParams()
  const [cars, setCars] = useState(sampleCars)
  const [filteredCars, setFilteredCars] = useState(sampleCars)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('price-asc')
  
  const [filters, setFilters] = useState({
    make: searchParams?.get('make') || '',
    minPrice: searchParams?.get('minPrice') || '',
    maxPrice: searchParams?.get('maxPrice') || '',
    location: searchParams?.get('location') || '',
    year: '',
    fuelType: '',
    transmission: '',
    bodyType: '',
    condition: ''
  })

  useEffect(() => {
    applyFilters()
  }, [filters, sortBy])

  const applyFilters = () => {
    let filtered = cars.filter(car => {
      return (
        (!filters.make || car.make.toLowerCase().includes(filters.make.toLowerCase())) &&
        (!filters.minPrice || car.price >= parseInt(filters.minPrice)) &&
        (!filters.maxPrice || car.price <= parseInt(filters.maxPrice)) &&
        (!filters.location || car.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.year || car.year.toString() === filters.year) &&
        (!filters.fuelType || car.fuelType === filters.fuelType) &&
        (!filters.transmission || car.transmission === filters.transmission) &&
        (!filters.bodyType || car.bodyType === filters.bodyType) &&
        (!filters.condition || car.condition === filters.condition)
      )
    })

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'year-desc':
          return b.year - a.year
        case 'mileage-asc':
          return a.mileage - b.mileage
        default:
          return 0
      }
    })

    setFilteredCars(filtered)
  }

  const resetFilters = () => {
    setFilters({
      make: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      year: '',
      fuelType: '',
      transmission: '',
      bodyType: '',
      condition: ''
    })
  }

  const CarCard = ({ car, isListView = false }: { car: any, isListView?: boolean }) => (
    <Link href={`/cars/${car.id}`}>
      <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group ${
        isListView ? 'flex' : ''
      }`}>
        <div className={`relative ${isListView ? 'w-64 flex-shrink-0' : ''}`}>
          <Image
            src={car.image}
            alt={car.title}
            width={500}
            height={300}
            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
              isListView ? 'w-full h-48' : 'w-full h-48'
            }`}
          />
          <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        <div className={`p-4 ${isListView ? 'flex-1' : ''}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
            {car.title}
          </h3>
          
          <div className="text-2xl font-bold text-blue-600 mb-3">
            ${car.price.toLocaleString()}
          </div>

          <div className={`space-y-2 text-sm text-gray-600 ${isListView ? 'grid grid-cols-2 gap-2' : ''}`}>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{car.year}</span>
              <span>•</span>
              <Gauge className="h-4 w-4" />
              <span>{car.mileage.toLocaleString()} miles</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{car.location}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Fuel className="h-4 w-4" />
              <span>{car.fuelType}</span>
              <span>•</span>
              <Settings className="h-4 w-4" />
              <span>{car.transmission}</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                {car.bodyType}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                {car.condition}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Cars</h1>
            <p className="text-gray-600">{filteredCars.length} cars found</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Year: Newest First</option>
                <option value="mileage-asc">Mileage: Low to High</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="flex bg-white border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 bg-white rounded-xl shadow-sm p-6 h-fit">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Reset All
                </button>
              </div>

              <div className="space-y-6">
                {/* Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                  <select
                    value={filters.make}
                    onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Make</option>
                    <option value="BMW">BMW</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Audi">Audi</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Body Type</label>
                  <select
                    value={filters.bodyType}
                    onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Type</option>
                    <option value="SEDAN">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="HATCHBACK">Hatchback</option>
                    <option value="COUPE">Coupe</option>
                    <option value="PICKUP">Pickup</option>
                  </select>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                  <select
                    value={filters.fuelType}
                    onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Fuel</option>
                    <option value="PETROL">Petrol</option>
                    <option value="DIESEL">Diesel</option>
                    <option value="ELECTRIC">Electric</option>
                    <option value="HYBRID">Hybrid</option>
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                  <select
                    value={filters.transmission}
                    onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Transmission</option>
                    <option value="MANUAL">Manual</option>
                    <option value="AUTOMATIC">Automatic</option>
                    <option value="CVT">CVT</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Cars Grid/List */}
          <div className="flex-1">
            {filteredCars.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No cars found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-blue-600 hover:text-blue-700"
                >
                  Reset filters to see all cars
                </button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} isListView={viewMode === 'list'} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}