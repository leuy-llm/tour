<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axiosApi from "../../axios";

const router = useRouter();
const isLoaded = ref(false);

const goToTours = () => {
  router.push("/tours");
};

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

const loading = ref(true);
onMounted(() => {
  fetchHeroData();
});

interface Stat {
  label: string;
  value: string;
  color_class: string;
  position_order: number;
}

const hero = ref<any>(null);
const stats = ref<Stat[]>([]);
const fetchHeroData = async () => {
  try {
    loading.value = true;
    const res = await axiosApi.post("/webtour/data/hero");
    hero.value = res.data.hero_section;
    stats.value = res.data.hero_stats;
    console.log("Hero Data:", hero.value, stats.value);
  } catch (error) {
    console.error("Error fetching hero data:", error);
  } finally {
    loading.value = false;
    isLoaded.value = true;
  }
}
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with Overlay -->
    <div class="absolute inset-0">
      <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <Image preview :src="hero?.background_image" alt="Beautiful landscape" class="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-110"/>
        </div>

      <!-- Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-secondary-900/70"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      <!-- Animated Particles -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-400/40 rounded-full animate-ping" style="animation-delay: 1s"></div>
            <div class="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary-400/30 rounded-full animate-pulse" style="animation-delay: 2s"></div>
            <div class="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style="animation-delay: 3s"></div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-1000 transform" :class="
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'">
            <i class="pi pi-star-fill text-accent-400 mr-2 text-sm"></i>
            <span class="text-sm font-medium">{{ hero?.badge_text }}</span>
        </div>

      <!-- Main Heading -->
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-all duration-1000 transform"
            :class=" isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'" style="transition-delay: 200ms">
            <span class="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            {{ hero?.title_line1 }}
            </span>
            <span class="block bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500 bg-clip-text text-transparent mt-2">
            {{ hero?.title_line2 }}
            </span>
        </h1>

      <!-- Subtitle -->
        <p class="text-xl sm:text-2xl lg:text-3xl mb-12 text-gray-100 leading-relaxed max-w-3xl mx-auto font-light transition-all duration-1000 transform"
            :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'" style="transition-delay: 400ms">
            {{ hero?.subtitle }}
        </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'" style="transition-delay: 600ms">
        <Button @click="goToTours" class="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 border-0 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span class="relative z-10 flex items-center">
                <i class="pi pi-compass mr-3 text-xl"></i>
                {{ hero?.button_primary_label }}
            </span>
            <divv class="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></divv>
        </Button>

        <Button :label="hero?.button_secondary_label" icon="pi pi-play" class="group bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 font-semibold text-lg px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"/>
      </div>
        <div class="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 transform" :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'" style="transition-delay: 800ms">
        <div v-for="stat in stats" :key="stat.label" class="text-center" :class="{ 'border-x border-white/20': stat.position_order === 2 }">
            <div
            class="text-3xl sm:text-4xl font-bold mb-2"
            :class="stat.color_class"
            >
            {{ stat.value }}
            </div>
            <div class="text-sm text-gray-300 font-medium">
            {{ stat.label }}
            </div>
        </div>
        </div>

    </div>

    <!-- Enhanced Scroll Indicator -->
    <Button @click="scrollToContent" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer transition-all duration-1000"
      :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'" style="transition-delay: 1000ms"
    >
      <div class="flex flex-col items-center space-y-2">
        <span class="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
          Scroll to explore
        </span>
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
          <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
        </div>
      </div>
    </Button>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 hidden lg:block">
      <div class="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
        <i class="pi pi-map text-white/40 text-2xl"></i>
      </div>
    </div>

    <div class="absolute bottom-32 right-16 hidden lg:block">
      <div class="w-16 h-16 border border-accent-400/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse" style="animation-delay: 1s">
        <i class="pi pi-heart text-accent-400/60 text-xl"></i>
      </div>
    </div>
  </section>
</template>