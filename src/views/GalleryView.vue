<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Travel Gallery</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the beauty of our destinations through stunning photography
        </p>
      </div>

      <!-- Category Filters -->
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

      <!-- Image Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div 
          v-for="(image, index) in filteredImages" 
          :key="index"
          @click="openLightbox(index)"
          class="group relative overflow-hidden rounded-lg cursor-pointer"
          :class="getGridItemClass(index)"
        >
          <img 
            :src="image.url" 
            :alt="image.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          />
          <div class="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
            <div class="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="font-semibold">{{ image.title }}</h3>
              <p class="text-sm opacity-90">{{ image.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
     <!-- Lightbox Modal -->
<!-- Lightbox Overlay -->
<div 
  v-if="lightboxOpen" 
  class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
  @click="closeLightbox"
>
  <!-- Lightbox Content -->
  <div 
    class="relative max-w-6xl w-full max-h-screen p-6 animate-fadeIn"
    @click.stop
  >
    <!-- Displayed Image -->
    <img 
      :src="filteredImages[currentImageIndex]?.url" 
      :alt="filteredImages[currentImageIndex]?.title"
      class="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
    />

    <!-- Close Button -->
    <button 
      @click="closeLightbox"
      class="absolute top-8 right-8 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
    >
      <i class="pi pi-times text-2xl"></i>
    </button>

    <!-- Previous Button -->
    <button 
      v-if="currentImageIndex > 0"
      @click.stop="previousImage"
      class="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
    >
      <i class="pi pi-chevron-left text-2xl"></i>
    </button>

    <!-- Next Button -->
    <button 
      v-if="currentImageIndex < filteredImages.length - 1"
      @click.stop="nextImage"
      class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all">
      <i class="pi pi-chevron-right text-2xl"></i>
    </button>

    <!-- Image Info -->
    <div class="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md p-4 rounded-lg text-white">
      <h3 class="text-2xl font-semibold mb-1">{{ filteredImages[currentImageIndex]?.title }}</h3>
      <p class="text-sm text-gray-200">{{ filteredImages[currentImageIndex]?.location }}</p>
    </div>
  </div>
</div>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const categories = ['All', 'Beaches', 'Mountains', 'Cities', 'Nature', 'Culture']

const images = [
  {
    url: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bali Rice Terraces',
    location: 'Bali, Indonesia',
    category: 'Nature'
  },
  {
    url: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Eiffel Tower',
    location: 'Paris, France',
    category: 'Cities'
  },
  {
    url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tokyo Skyline',
    location: 'Tokyo, Japan',
    category: 'Cities'
  },
  {
    url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Santorini Sunset',
    location: 'Santorini, Greece',
    category: 'Beaches'
  },
  {
    url: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Mountain Valley',
    location: 'Nepal',
    category: 'Mountains'
  },
  {
    url: 'https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    title: 'African Safari',
    location: 'Kenya',
    category: 'Nature'
  },
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Traditional Temple',
    location: 'Thailand',
    category: 'Culture'
  },
  {
    url: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Crystal Clear Waters',
    location: 'Maldives',
    category: 'Beaches'
  },
  {
    url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Desert Landscape',
    location: 'Morocco',
    category: 'Nature'
  },
  {
    url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Ancient Architecture',
    location: 'Rome, Italy',
    category: 'Culture'
  },
  {
    url: 'https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tropical Paradise',
    location: 'Hawaii',
    category: 'Beaches'
  },
  {
    url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Snowy Peaks',
    location: 'Swiss Alps',
    category: 'Mountains'
  }
]

const filteredImages = computed(() => {
  if (selectedCategory.value === 'All') {
    return images
  }
  return images.filter(image => image.category === selectedCategory.value)
})

const getGridItemClass = (index: number) => {
  // Create varied grid item sizes for a masonry-like effect
  const patterns = [
    'col-span-1 row-span-1 h-64',
    'col-span-1 row-span-2 h-96',
    'col-span-2 row-span-1 h-64',
    'col-span-1 row-span-1 h-64'
  ]
  return patterns[index % patterns.length]
}

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  }
}
</script>