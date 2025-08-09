<script setup lang="ts">
const stats = [
  { number: '10,000+', label: 'Happy Travelers' },
  { number: '150+', label: 'Destinations' },
  { number: '500+', label: 'Tours Completed' },
  { number: '4.9', label: 'Average Rating' }
]

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    bio: 'Travel enthusiast with 15+ years of experience in creating exceptional tour experiences.'
  },
  {
    name: 'Sarah Martinez',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    bio: 'Expert in logistics and customer service, ensuring every tour runs smoothly.'
  },
  {
    name: 'David Thompson',
    role: 'Lead Guide',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
    bio: 'Certified guide with extensive knowledge of global destinations and cultures.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 shadow-2xl py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">About Use</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
           Creating extraordinary travel experiences since 2025
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4  ">
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              TourVue was born from a passion for exploration and a desire to share the world's most incredible destinations with fellow travelers. Founded in 2020, we've quickly become a trusted name in adventure travel.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is simple: to create transformative travel experiences that connect people with new cultures, breathtaking landscapes, and unforgettable moments. Every tour is carefully crafted by our team of travel experts who know these destinations intimately.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              We believe that travel has the power to change perspectives, build bridges between cultures, and create memories that last a lifetime. That's why we're committed to responsible tourism that benefits local communities and preserves the natural beauty of our destinations.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" 
              alt="Travel team planning"
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="mb-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{{ stat.number }}</div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </section>

      <!-- Our Values -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card class="text-center h-full">
            <template #content>
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-heart text-2xl text-primary-600"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p class="text-gray-600 leading-relaxed">
                We're passionate about travel and sharing the world's wonders with our guests. Every tour is planned with love and attention to detail.
              </p>
            </template>
          </Card>

          <Card class="text-center h-full">
            <template #content>
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-shield text-2xl text-secondary-600"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
              <p class="text-gray-600 leading-relaxed">
                Your safety is our top priority. We maintain the highest safety standards and work with certified guides and trusted partners.
              </p>
            </template>
          </Card>

          <Card class="text-center h-full">
            <template #content>
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-globe text-2xl text-accent-600"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p class="text-gray-600 leading-relaxed">
                We're committed to responsible tourism that protects the environment and supports local communities.
              </p>
            </template>
          </Card>
        </div>
      </section>

      <!-- Our Team -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card v-for="member in team" :key="member.name" class="text-center">
            <template #content>
              <div class="mb-4">
                <Avatar 
                  :image="member.image" 
                  class="w-24 h-24 mx-auto" 
                  shape="circle" 
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ member.name }}</h3>
              <p class="text-primary-600 font-medium mb-4">{{ member.role }}</p>
              <p class="text-gray-600 leading-relaxed">{{ member.bio }}</p>
            </template>
          </Card>
        </div>
      </section>
    </div>
  </div>
</template>