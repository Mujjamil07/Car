'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, MapPin, Calendar, Gauge } from 'lucide-react'

// Sample data - in a real app, this would come from the database
const featuredCars = [
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
    transmission: 'AUTOMATIC'
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
    transmission: 'AUTOMATIC'
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
    transmission: 'AUTOMATIC'
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
    transmission: 'AUTOMATIC'
  }
]

export function FeaturedCars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredCars.map((car) => (
        <Link key={car.id} href={`/cars/${car.id}`}>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="relative">
              <Image
                src={car.image}
                alt={car.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
              </button>
              <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                Featured
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                {car.title}
              </h3>
              
              <div className="text-2xl font-bold text-blue-600 mb-3">
                ${car.price.toLocaleString()}
              </div>

              <div className="space-y-2 text-sm text-gray-600">
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

                <div className="flex items-center justify-between pt-2">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {car.fuelType}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {car.transmission}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}