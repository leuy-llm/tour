<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Tours</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our carefully curated selection of world-class destinations
        </p>
      </div>

      <!-- Filters -->
      <div class="mb-8 flex flex-wrap gap-4 justify-center">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-6 py-2 rounded-full border transition-all duration-200"
          :class="selectedCategory === category 
            ? 'bg-primary-500 text-white border-primary-500' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Tours Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Show skeletons while loading -->
        <template v-if="loading">
          <TourSkeleton v-for="n in filteredTours.length || 6" :key="'skeleton-' + n" />
        </template>


        <!-- Show actual tour cards when not loading -->
        <template v-else>
            <div 
            v-for="tour in filteredTours" 
            :key="tour.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
            <div class="relative">
                <img :src="tour.image" :alt="tour.title" class="w-full h-64 object-cover" />
                <div class="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ tour.duration }} Days
                </div>
                <div class="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                {{ tour.category }}
                </div>
            </div>

            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ tour.title }}</h3>
                <p class="text-gray-600 mb-4">{{ tour.description }}</p>

                <div class="flex items-center mb-4 text-sm text-gray-500">
                <i class="pi pi-map-marker mr-2"></i>
                <span>{{ tour.location }}</span>
                </div>

                <div class="flex items-center mb-4">
                <div class="flex text-yellow-400 mr-2">
                    <i 
                    v-for="n in 5" 
                    :key="n" 
                    class="pi" 
                    :class="n <= tour.rating ? 'pi-star-fill' : 'pi-star'"
                    ></i>
                </div>
                <span class="text-sm text-gray-600">({{ tour.reviews }} reviews)</span>
                </div>

                <div class="flex justify-between items-center">
                <div>
                    <span class="text-2xl font-bold text-primary-600">${{ tour.price }}</span>
                    <span class="text-sm text-gray-500">/person</span>
                </div>
                <router-link
                    :to="`/tour/${tour.id}`"
                    class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
                >
                    Book Now
                </router-link>
                </div>
            </div>
            </div>
        </template>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import TourSkeleton from '../components/TourSkeleton.vue'

const selectedCategory = ref('All')
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})

const categories = ['All', 'Adventure', 'Cultural', 'Beach', 'City', 'Nature']

const tours = [
  {
    id: 1,
    title: 'Bali Paradise',
    description: '7 days exploring the beautiful islands of Bali with cultural experiences and pristine beaches.',
    price: 1299,
    duration: 7,
    location: 'Bali, Indonesia',
    category: 'Beach',
    rating: 5,
    reviews: 124,
    image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'European Adventure',
    description: '14 days through Paris, Rome, and Barcelona with luxury accommodations and guided tours.',
    price: 2499,
    duration: 14,
    location: 'Europe',
    category: 'Cultural',
    rating: 5,
    reviews: 89,
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Tokyo Discovery',
    description: '10 days experiencing traditional and modern Japan with authentic cultural immersion.',
    price: 1899,
    duration: 10,
    location: 'Tokyo, Japan',
    category: 'City',
    rating: 5,
    reviews: 156,
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Himalayan Trek',
    description: '12 days trekking through the majestic Himalayas with experienced mountain guides.',
    price: 1699,
    duration: 12,
    location: 'Nepal',
    category: 'Adventure',
    rating: 4,
    reviews: 73,
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'African Safari',
    description: '8 days wildlife safari in Kenya with luxury camping and game drives.',
    price: 2199,
    duration: 8,
    location: 'Kenya, Africa',
    category: 'Nature',
    rating: 5,
    reviews: 92,
    image: 'https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'Greek Islands',
    description: '9 days island hopping in Greece with beautiful beaches and ancient history.',
    price: 1599,
    duration: 9,
    location: 'Greece',
    category: 'Beach',
    rating: 5,
    reviews: 108,
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

const filteredTours = computed(() => {
  if (selectedCategory.value === 'All') {
    return tours
  }
  return tours.filter(tour => tour.category === selectedCategory.value)
})
</script>