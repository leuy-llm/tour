<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing places around the world with our expert travel guides
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-if="loading">
          <DestinationSkeleton v-for="n in 6" :key="'skeleton-' + n" />
        </template>

        <template v-else>

        <div 
          v-for="destination in destinations" 
          :key="destination.id"
          class="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="destination.image" 
              :alt="destination.name" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-2xl font-bold">{{ destination.name }}</h3>
              <p class="text-sm opacity-90">{{ destination.country }}</p>
            </div>
            <div class="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
              {{ destination.tours }} Tours
            </div>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 mb-4">{{ destination.description }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center text-sm text-gray-500">
                <i class="pi pi-sun mr-2"></i>
                <span>{{ destination.climate }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="pi pi-calendar mr-2"></i>
                <span>{{ destination.bestTime }}</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-lg font-semibold text-primary-600">
                From ${{ destination.priceFrom }}
              </span>
              <router-link
                to="/tours"
                class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
              >
                View Tours
              </router-link>
            </div>
          </div>
        </div>
        </template>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-12">
  <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Ready to Explore?
  </h2>

  <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
    Let us help you plan the perfect trip to any of these amazing destinations
  </p>

  <div class="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
    <router-link
      to="/tours"
      class="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
    >
      Browse All Tours
    </router-link>

    <router-link
      to="/contact"
      class="inline-block border border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
    >
      Plan Custom Trip
    </router-link>
  </div>
</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DestinationSkeleton from '../components/DestinationSkeleton.vue';

const destinations = [
  {
    id: 1,
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical paradise with stunning beaches, ancient temples, and rich cultural heritage.',
    image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800',
    tours: 5,
    climate: 'Tropical',
    bestTime: 'Apr - Oct',
    priceFrom: 899
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    description: 'The City of Light with world-class museums, iconic landmarks, and exquisite cuisine.',
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    tours: 8,
    climate: 'Temperate',
    bestTime: 'May - Sep',
    priceFrom: 1299
  },
  {
    id: 3,
    name: 'Tokyo',
    country: 'Japan',
    description: 'Modern metropolis blending cutting-edge technology with traditional culture.',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    tours: 6,
    climate: 'Subtropical',
    bestTime: 'Mar - May',
    priceFrom: 1599
  },
  {
    id: 4,
    name: 'Santorini',
    country: 'Greece',
    description: 'Breathtaking island with white-washed buildings, blue domes, and stunning sunsets.',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    tours: 4,
    climate: 'Mediterranean',
    bestTime: 'May - Oct',
    priceFrom: 1199
  },
  {
    id: 5,
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'Ancient Inca citadel set high in the Andes Mountains, a UNESCO World Heritage site.',
    image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
    tours: 3,
    climate: 'Highland',
    bestTime: 'May - Sep',
    priceFrom: 1799
  },
  {
    id: 6,
    name: 'Dubai',
    country: 'UAE',
    description: 'Luxury desert oasis with futuristic skyline, world-class shopping, and pristine beaches.',
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
    tours: 7,
    climate: 'Desert',
    bestTime: 'Nov - Apr',
    priceFrom: 999
  }
]

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>