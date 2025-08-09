<template>
    <div>
         <HeroSkeleton v-if="loading" />
        <section v-else
            class="relative h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-r from-blue-600 to-teal-600"
            :style="{
            backgroundImage:
                `url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            }"
        >
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>

            <div class="relative z-10 flex items-center min-h-screen">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Content -->
                <div class="text-white">
                    <div class="mb-8">
                    <h1 class="text-8xl md:text-9xl font-black mb-6 tracking-tight">
                        BALI
                    </h1>
                    <p class="text-lg md:text-xl leading-relaxed text-white/90 max-w-lg">
                        Discover the magical island of Bali, where ancient temples meet
                        pristine beaches, lush rice terraces cascade down volcanic
                        slopes, and vibrant culture comes alive through traditional
                        ceremonies and warm hospitality.
                    </p>
                </div>

                    <div class="space-x-4">
                        
                            <router-link
                                to="/tours"
                                class="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <ArrowRight class="inline-block ml-2" /> Explore Tours
                            </router-link>
                            <router-link
                                to="/contact"
                                class="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                            >
                                Plan Your Trip
                            </router-link>
                        </div>
                </div>

                <!-- Right Gallery Cards -->
                <div class="relative max-w-md ml-auto">
                    <!-- Slider Container -->
                    <div class="overflow-hidden rounded-2xl">
                    <div
                        class="flex transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                    >
                        <div
                        v-for="(_slide, slideIndex) in Math.ceil(destinations.length / 2)"
                        :key="slideIndex"
                        class="w-full flex-shrink-0"
                        >
                        <div class="grid grid-cols-2 gap-4">
                            <div
                            v-for="(destination, cardIndex) in destinations.slice(slideIndex * 2, slideIndex * 2 + 2)"
                            :key="`${slideIndex}-${cardIndex}`"
                            class="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
                            :class="{
                                'mt-8': cardIndex === 1,
                                '-mt-4': cardIndex === 0 && slideIndex % 2 === 1,
                            }"
                            >
                            <div
                                class="h-32 bg-cover bg-center"
                                :style="{ backgroundImage: `url('${destination.image}')` }"
                            ></div>
                            <div class="p-4">
                                <h3 class="font-semibold text-gray-800 text-sm">
                                {{ destination.name }}
                                </h3>
                                <p class="text-gray-600 text-xs mt-1">
                                {{ destination.type }}
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- Navigation Controls -->
                    <div class="flex items-center justify-between mt-6">
                    <button
                        @click="prevSlide"
                        class="group flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                        <ChevronLeft
                        :size="20"
                        class="text-white group-hover:scale-110 transition-transform duration-300"
                        />
                    </button>

                    <!-- Slide Indicators -->
                    <div class="flex space-x-2">
                        <button
                        v-for="(_, index) in Math.ceil(destinations.length / 2)"
                        :key="index"
                        @click="currentSlide = index"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        :class="index === currentSlide ? 'bg-white w-6' : 'bg-white/40'"
                        />
                    </div>

                    <button
                        @click="nextSlide"
                        class="group flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                        <ChevronRight
                        :size="20"
                        class="text-white group-hover:scale-110 transition-transform duration-300"
                        />
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <!-- Bottom Navigation Dots -->
            <div class="absolute bottom-8 left-6 flex space-x-3">
            <div class="w-3 h-3 bg-white rounded-full"></div>
            <div class="w-3 h-3 bg-white/40 rounded-full"></div>
            <div class="w-3 h-3 bg-white/40 rounded-full"></div>
            </div>

            <!-- Side Navigation -->
            <div
            class="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block"
            >
            <div class="flex flex-col space-y-4">
                <div class="w-2 h-8 bg-white/40 rounded-full"></div>
                <div class="w-2 h-16 bg-white rounded-full"></div>
                <div class="w-2 h-8 bg-white/40 rounded-full"></div>
            </div>
            </div>
  </section>

        <!-- Features Section -->
        <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose WanderLust?</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                We create unforgettable experiences with attention to every detail
            </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="pi pi-users text-3xl text-primary-600"></i>
                </div>
                <h3 class="text-xl font-semibold mb-4">Expert Guides</h3>
                <p class="text-gray-600">Professional local guides who know every hidden gem and story</p>
            </div>

            <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="pi pi-shield text-3xl text-primary-600"></i>
                </div>
                <h3 class="text-xl font-semibold mb-4">Safe & Secure</h3>
                <p class="text-gray-600">Your safety is our priority with comprehensive insurance coverage</p>
            </div>

            <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="pi pi-star text-3xl text-primary-600"></i>
                </div>
                <h3 class="text-xl font-semibold mb-4">Premium Experience</h3>
                <p class="text-gray-600">Luxury accommodations and authentic local experiences</p>
            </div>
            </div>
        </div>
        </section>

        <!-- Popular Tours Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Popular Tours</h2>
                    <p class="text-xl text-gray-600">Discover our most popular tours</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="tour in popularTours" :key="tour.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img :src="tour.image" :alt="tour.title" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">{{ tour.title }}</h3>
                            <p class="text-gray-600 mb-4">{{ tour.description }}</p>
                            <div class="flex items-center justify-between">
                                <span class="text-2xl font-bold text-primary-600">${{ tour.price }}</span>
                                <!-- <span class="text-sm text-gray-500">{{ tour.duration }}</span> -->

                                <router-link
                                    :to="`/tour/${tour.id}`"
                                    class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                                    >
                                    View Details
                                    </router-link>
                                </div>
                                <span class="text-2xl font-bold text-pirmary-600"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action Section -->
        <!-- <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Ready to Explore?</h2>
                    <p class="text-xl text-white">Discover the world with us</p>
                </div>

                <div class="flex justify-center">
                    <router-link
                        to="/tours"
                        class="inline-block bg-white hover:bg-gray-100 text-primary-600 hover:text-primary-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                    >
                        Explore Tours
                    </router-link>
                </div>
            </div>
        </section> -->

        <!-- Testimonials Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p class="text-xl text-gray-600">Testimonials from our satisfied customers</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8" >
                    <div v-for="testimonials in testimonials" :key="testimonials.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">"{{ testimonials.message }}"</p>
                            <div class="flex items-center">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Customer 1" class="w-12 h-12 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">{{ testimonials.name }}</p>
                                    <p class="text-gray-600">{{ testimonials.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">"Excellent tour! The tour guide was very knowledgeable and made the experience enjoyable. Highly recommended!"</p>
                            <div class="flex items-center">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Customer 2" class="w-12 h-12 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">Jane Smith</p>
                                    <p class="text-gray-600">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">"Great tour! The tour guide was very knowledgeable and made the experience enjoyable. Highly recommended!"</p>
                            <div class="flex items-center">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Customer 3" class="w-12 h-12 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">Michael Johnson</p>
                                    <p class="text-gray-600">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-vue-next";
    import HeroSkeleton from '../components/HeroSkeleton.vue';
    const popularTours = ref([
        {
            id: 1,
            title: 'Bali Paradise',
            description: '7 days exploring the beautiful islands of Bali with cultural experiences.',
            price: 1299,
            duration: '7 days',
            image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 2,
            title: 'European Adventure',
            description: '14 days through Paris, Rome, and Barcelona with luxury accommodations.',
            price: 2499,
            duration: '14 days',
            image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 3,
            title: 'Tokyo Discovery',
            description: '10 days experiencing traditional and modern Japan.',
            price: 1899,
            duratin: '10 days',
            image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 4,
            title: 'Machu Picchu Adventure',
            description: '7 days exploring the breathtaking mountains of Machu Picchu.',
            price: 1499,
            duration: '7 days',
            image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 5,
            title: 'Santorini Island Escape',
            description: '14 days exploring the beautiful island of Santorini with luxurious accommodations.',
            price: 1999,
            duration: '14 days',
            image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ])

    const testimonials = ref([
        {
            id: 1,
            name: 'John Doe',
            message: 'Great experience! The tour was amazing and the guides were knowledgeable and friendly. Highly recommended!',
            role: 'customer',
            image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 2,
            name: 'Jane Smith',
            message: 'Excellent tour! The tour guide was very knowledgeable and made the experience enjoyable. Highly recommended!',
            role: 'customer',
            image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            message: 'Great tour! The tour guide was very knowledgeable and made the experience enjoyable. Highly recommended!',
            role: 'customer',
            image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ])

    const currentSlide = ref(0);
    const destinations = ref([
        {
      name: "Tegallalang",
      type: "Rice Terraces",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Kelingking",
      type: "Beach View",
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Uluwatu",
      type: "Temple",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Seminyak",
      type: "Beach Club",
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Mount Batur",
      type: "Volcano Sunrise",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Nusa Penida",
      type: "Island Paradise",
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ]);
   function prevSlide() {
    currentSlide.value =
        (currentSlide.value - 1 + Math.ceil(destinations.value.length / 2)) %
        Math.ceil(destinations.value.length / 2);
    }

function nextSlide() {
  currentSlide.value =
    (currentSlide.value + 1) % Math.ceil(destinations.value.length / 2);
}

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>