import { FaShower, FaBath, FaWater, FaAccessibleIcon, FaHammer, FaCheckCircle } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
    

      {/* Main Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Bathroom Solutions
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              From complete renovations to specialized upgrades, we handle every aspect of your bathroom transformation.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12">
              {/* Bathroom Remodeling */}
              <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mr-4">
                        <FaShower className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Complete Bathroom Remodeling
                      </h3>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg text-gray-600">
                        Full-service bathroom renovations that transform your space from outdated to extraordinary. Our comprehensive approach includes:
                      </p>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Custom design consultation</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Demolition and structural work</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Plumbing and electrical updates</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Tile work and custom showers</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Vanity and fixture installation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Request Free Estimate
                      </a>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-lg overflow-hidden aspect-w-4 aspect-h-3 bg-gray-100">
                      {/* Replace with your actual image */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Bathroom Remodeling Image</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-sm font-medium text-white">Before & After Gallery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tub Replacement */}
              <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mr-4">
                        <FaBath className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Bathtub Replacement & Installation
                      </h3>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg text-gray-600">
                        Upgrade your bathing experience with our professional tub replacement services featuring:
                      </p>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Standard alcove tub replacements</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Freestanding soaking tubs</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Whirlpool and air jet tubs</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Custom tile surrounds</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Complete plumbing integration</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Explore Tub Options
                      </a>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-lg overflow-hidden aspect-w-4 aspect-h-3 bg-gray-100">
                      {/* Replace with your actual image */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Tub Replacement Image</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-sm font-medium text-white">Luxury Tub Collection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shower Conversion */}
              <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mr-4">
                        <FaWater className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Tub-to-Shower Conversions
                      </h3>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg text-gray-600">
                        Modernize your bathroom with a spacious walk-in shower featuring:
                      </p>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Custom shower base options</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Glass enclosure installation</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Multiple shower head systems</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Non-slip flooring solutions</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Seamless waterproofing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Schedule Consultation
                      </a>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-lg overflow-hidden aspect-w-4 aspect-h-3 bg-gray-100">
                      {/* Replace with your actual image */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Shower Conversion Image</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-sm font-medium text-white">Shower Design Gallery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Walk-in Tubs */}
              <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mr-4">
                        <FaAccessibleIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Walk-in Tub Installation
                      </h3>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg text-gray-600">
                        Safe, accessible bathing solutions designed for comfort and independence:
                      </p>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Low-step entry designs</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Therapeutic hydrotherapy options</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Quick-drain technology</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">ADA-compliant models</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1" />
                          <span className="ml-2 text-gray-700">Senior safety features</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Learn About Safety Features
                      </a>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative rounded-lg overflow-hidden aspect-w-4 aspect-h-3 bg-gray-100">
                      {/* Replace with your actual image */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Walk-in Tub Image</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-sm font-medium text-white">Accessible Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
    
    </div>
  );
}