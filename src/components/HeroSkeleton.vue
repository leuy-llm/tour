<template>
  <section
    class="relative h-screen bg-gradient-to-r from-blue-600 to-teal-600"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>

    <div class="relative z-10 flex items-center min-h-screen">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Left Content Skeleton -->
          <div class="text-white space-y-6">
            <div class="h-24 bg-white/20 rounded animate-pulse w-2/3"></div>
            <div class="space-y-3">
              <div class="h-4 bg-white/20 rounded animate-pulse w-full"></div>
              <div class="h-4 bg-white/20 rounded animate-pulse w-5/6"></div>
              <div class="h-4 bg-white/20 rounded animate-pulse w-2/3"></div>
            </div>
            <div class="flex space-x-4 pt-4">
              <div class="h-12 w-36 bg-white/20 rounded-lg animate-pulse"></div>
              <div class="h-12 w-36 bg-white/20 rounded-lg animate-pulse"></div>
            </div>
          </div>

          <!-- Right Gallery Skeleton -->
          <div class="relative max-w-md ml-auto">
            <div class="overflow-hidden rounded-2xl">
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="bg-white/20 rounded-2xl overflow-hidden shadow-lg animate-pulse"
                >
                  <div class="h-32 bg-white/30"></div>
                  <div class="p-4 space-y-2">
                    <div class="h-3 bg-white/30 rounded w-2/3"></div>
                    <div class="h-3 bg-white/30 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Controls Skeleton -->
            <div class="flex items-center justify-between mt-6">
              <div class="h-10 w-10 bg-white/20 rounded-full animate-pulse"></div>
              <div class="flex space-x-2">
                <div v-for="dot in 3" :key="dot" class="h-2 w-6 bg-white/20 rounded-full animate-pulse"></div>
              </div>
              <div class="h-10 w-10 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed — this is purely a skeleton placeholder
</script>
