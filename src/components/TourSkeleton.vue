<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <!-- Image placeholder -->
    <div class="relative h-64">
      <Skeleton width="100%" height="100%" borderRadius="0" />

      <!-- Duration badge -->
      <div class="absolute top-4 left-4">
        <Skeleton width="5rem" height="1.5rem" borderRadius="999px" />
      </div>

      <!-- Category badge -->
      <div class="absolute top-4 right-4">
        <Skeleton width="5rem" height="1.5rem" borderRadius="999px" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Title -->
      <Skeleton width="70%" height="1.5rem" class="mb-3" />

      <!-- Description -->
      <Skeleton width="100%" height="1rem" class="mb-2" />
      <Skeleton width="90%" height="1rem" class="mb-4" />

      <!-- Location -->
      <div class="flex items-center mb-4">
        <Skeleton shape="circle" size="1rem" class="mr-2" />
        <Skeleton width="6rem" height="1rem" />
      </div>

      <!-- Rating -->
      <div class="flex items-center mb-4">
        <div class="flex mr-2">
          <Skeleton shape="circle" size="1rem" v-for="n in 5" :key="n" class="mr-1" />
        </div>
        <Skeleton width="4rem" height="1rem" />
      </div>

      <!-- Price & Button -->
      <div class="flex justify-between items-center">
        <Skeleton width="5rem" height="1.5rem" />
        <Skeleton width="6rem" height="2rem" borderRadius="0.5rem" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
