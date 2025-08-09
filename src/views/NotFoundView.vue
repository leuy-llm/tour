<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-slate-100 to-white px-4">
    <div class="max-w-md text-center">
      <div class="text-7xl font-extrabold text-primary-600 mb-6">404</div>
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Oops! Page not found</h1>
      <p class="text-gray-600 text-base mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 text-gray-900 bg-primary-600 hover:bg-primary-700 rounded-lg transition duration-300 shadow-md"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
