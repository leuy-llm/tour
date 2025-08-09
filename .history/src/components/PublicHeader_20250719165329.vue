<script setup lang="ts">
import { defineProps, defineEmits, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axiosApi from '../axios/index'


defineProps<{
  mobileMenuOpen: boolean
}>()

const emit = defineEmits<{
  toggleMobileMenu: []
}>()

const router = useRouter()
const route = useRoute()

const navigation = ref([])
</script>

<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <i class="pi pi-map text-white text-sm"></i>
            </div>
            <span class="text-xl font-bold text-gray-900">TourVue</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.path"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              :class="route.path === item.path 
                ? 'text-primary-600 bg-primary-50' 
                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <Button label="Book Now" class="p-button-sm" />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden ">
          <button
            @click="emit('toggleMobileMenu')"
            class="inline-flex items-centerjustify-center p-2  rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none "
          >
            <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-dropdown border-t border-gray-200">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            @click="emit('toggleMobileMenu')"
            class="block px-3 py-2 text-base font-medium  rounded-md transition-colors duration-200"
            :class="route.path === item.path 
              ? 'text-primary-600 bg-primary-50' 
              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'"
          >
            {{ item.name }}
          </router-link>
          <div class="pt-4 pb-3 border-t border-gray-200 space-y-2">
            <Button label="Book Now" class="w-full" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>