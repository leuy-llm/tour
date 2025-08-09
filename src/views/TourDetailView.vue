<template>
  <div v-if="tour" class="min-h-screen bg-white">
    <!-- Hero Image Gallery -->
    <div class="max-w-7xl mx-auto px-4 pt-8">
      <!-- Main Image -->
      <div class="relative h-80 md:h-[500px] mb-4">
        <img
          :src="selectedImage"
          :alt="tour.title"
          class="w-full h-full object-cover rounded-lg"
        />
        <div
          class="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-md text-sm text-gray-700 shadow"
        >
          {{ tour.gallery.indexOf(selectedImage) + 1 }} / {{ tour.gallery.length }}
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="flex gap-4 overflow-x-auto pb-2">
        <img
          v-for="(img, index) in tour.gallery"
          :key="index"
          :src="img"
          :alt="`${tour.title} thumbnail ${index + 1}`"
          class="h-20 w-28 object-cover rounded-lg cursor-pointer border-2 flex-shrink-0"
          :class="selectedImage === img ? 'border-primary-500' : 'border-transparent'"
          @click="selectedImage = img"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold mb-4">About This Tour</h2>
            <p class="text-gray-600 mb-6">{{ tour.fullDescription }}</p>

            <h3 class="text-xl font-semibold mb-4">What's Included</h3>
            <ul class="space-y-2 mb-6">
              <li
                v-for="item in tour.included"
                :key="item"
                class="flex items-center"
              >
                <i class="pi pi-check text-green-500 mr-3"></i>
                <span>{{ item }}</span>
              </li>
            </ul>

            <h3 class="text-xl font-semibold mb-4">Itinerary</h3>
            <div class="space-y-4">
              <div
                v-for="(day, index) in tour.itinerary"
                :key="index"
                class="border-l-4 border-primary-500 pl-6 pb-4"
              >
                <h4 class="font-semibold text-primary-600">
                  Day {{ index + 1 }}: {{ day.title }}
                </h4>
                <p class="text-gray-600">{{ day.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="lg:col-span-1">
          <div
            class="bg-white border border-gray-200 rounded-lg p-6 sticky top-6"
          >
            <div class="text-center mb-6">
              <span class="text-3xl font-bold text-primary-600"
                >${{ tour.price }}</span
              >
              <span class="text-gray-500">/person</span>
            </div>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-600">Duration:</span>
                <span class="font-semibold">{{ tour.duration }} days</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Group Size:</span>
                <span class="font-semibold">Max {{ tour.maxGroupSize }} people</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Difficulty:</span>
                <span class="font-semibold">{{ tour.difficulty }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Rating:</span>
                <div class="flex items-center">
                  <div class="flex text-yellow-400 mr-2">
                    <i
                      v-for="n in 5"
                      :key="n"
                      class="pi"
                      :class="n <= tour.rating ? 'pi-star-fill' : 'pi-star'"
                    ></i>
                  </div>
                  <span class="text-sm text-gray-600"
                    >({{ tour.reviews }} reviews)</span
                  >
                </div>
              </div>
            </div>

            <button
              class="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
            >
              Book Now
            </button>

            <router-link
              to="/contact"
              class="w-full block text-center border border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Ask Questions
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tour Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
      <p class="text-gray-600 mb-8">
        The tour you're looking for doesn't exist.
      </p>
      <router-link
        to="/tours"
        class="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Browse All Tours
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ id: string }>()

// Mock tours (replace with API later)
const tours = [
  {
    id: 1,
    title: 'Bali Paradise',
    location: 'Bali, Indonesia',
    fullDescription:
      "Discover the magic of Bali on this comprehensive 7-day adventure...",
    price: 1299,
    duration: 7,
    maxGroupSize: 12,
    difficulty: 'Easy',
    rating: 5,
    reviews: 124,
    gallery: [
      'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg',
      'https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg',
      'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg'
    ],
    included: [
      'Luxury accommodation for 6 nights',
      'All meals as specified',
      'Professional English-speaking guide'
    ],
    itinerary: [
      { title: 'Arrival in Denpasar', description: 'Airport pickup and hotel transfer.' },
      { title: 'Ubud Cultural Tour', description: 'Visit rice terraces and Monkey Forest.' }
    ]
  }
]

const tour = computed(() => tours.find(t => t.id === parseInt(props.id)))

// Gallery state
const selectedImage = ref(tour.value?.gallery[0] || '')
</script>
