<!-- src/views/ComingSoonView.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-slate-100">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-yellow-500 mb-4">🚧 Coming Soon</h1>
      <p class="text-lg text-gray-600 mb-6">
        This page is under development. Please check back soon.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
      >
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
