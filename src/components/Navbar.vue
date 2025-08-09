<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <i class="pi pi-compass text-2xl text-primary-500"></i>
            <span class="font-bold text-xl text-primary-900">Travel</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.path"
              class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              :class="{ 'text-primary-500 border-b-2 border-primary-500': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile Menu Button (Hamburger) -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors"
          >
            <i class="pi" :class="mobileMenuOpen ? 'pi-times' : 'pi-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation with Animation -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-colors"
            :class="{ 'text-primary-500 bg-primary-50': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/tours' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>
