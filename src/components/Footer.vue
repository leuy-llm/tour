<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <i class="pi pi-compass text-2xl text-primary-400"></i>
            <span class="text-xl font-bold">WanderLust</span>
          </div>
          <p class="text-gray-300 text-sm">
            Discover the world with our expertly crafted tours. Create memories that last a lifetime.
          </p>
          <div class="flex space-x-4">
            <i class="pi pi-facebook text-primary-400 cursor-pointer hover:text-primary-300 transition-colors"></i>
            <i class="pi pi-twitter text-primary-400 cursor-pointer hover:text-primary-300 transition-colors"></i>
            <i class="pi pi-instagram text-primary-400 cursor-pointer hover:text-primary-300 transition-colors"></i>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><router-link to="/" class="hover:text-primary-400 transition-colors">Home</router-link></li>
            <li><router-link to="/tours" class="hover:text-primary-400 transition-colors">Tours</router-link></li>
            <li><router-link to="/destinations" class="hover:text-primary-400 transition-colors">Destinations</router-link></li>
            <li><router-link to="/gallery" class="hover:text-primary-400 transition-colors">Gallery</router-link></li>
          </ul>
        </div>

        <!-- Popular Destinations -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Popular Destinations</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="hover:text-primary-400 transition-colors cursor-pointer">Bali, Indonesia</li>
            <li class="hover:text-primary-400 transition-colors cursor-pointer">Paris, France</li>
            <li class="hover:text-primary-400 transition-colors cursor-pointer">Tokyo, Japan</li>
            <li class="hover:text-primary-400 transition-colors cursor-pointer">Santorini, Greece</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <p class="flex items-center space-x-2">
              <i class="pi pi-phone text-primary-400"></i>
              <span>+1 (555) 123-4567</span>
            </p>
            <p class="flex items-center space-x-2">
              <i class="pi pi-envelope text-primary-400"></i>
              <span>info@wanderlust.com</span>
            </p>
            <p class="flex items-center space-x-2">
              <i class="pi pi-map-marker text-primary-400"></i>
              <span>123 Travel Street, Adventure City</span>
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 WanderLust Tours. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>