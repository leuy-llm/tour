<template>
  <div class="group relative bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Image Skeleton -->
    <div class="relative h-64">
      <Skeleton width="100%" height="100%" borderRadius="0" />

      <!-- Badge placeholder -->
      <div class="absolute top-4 right-4">
        <Skeleton width="4rem" height="1.5rem" borderRadius="999px" />
      </div>

      <!-- Title & Country placeholder -->
      <div class="absolute bottom-4 left-4">
        <Skeleton width="8rem" height="1.5rem" class="mb-2" />
        <Skeleton width="5rem" height="1rem" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Description -->
      <Skeleton width="100%" height="1rem" class="mb-3" />
      <Skeleton width="80%" height="1rem" class="mb-4" />

      <!-- Climate & Best Time -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <Skeleton shape="circle" size="1rem" />
          <Skeleton width="5rem" height="1rem" />
        </div>
        <div class="flex items-center space-x-2">
          <Skeleton shape="circle" size="1rem" />
          <Skeleton width="5rem" height="1rem" />
        </div>
      </div>

      <!-- Price & Button -->
      <div class="flex items-center justify-between">
        <Skeleton width="6rem" height="1.5rem" />
        <Skeleton width="5rem" height="2rem" borderRadius="0.5rem" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
