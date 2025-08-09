import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Optional: use a layout component if you want shared header/footer etc.
// If you don’t have a layout, just move the children up one level.

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import('../views/Tour.vue')
  },
  {
    path: '/tour/:id',
    name: 'TourDetail',
    component: () => import('../views/TourDetailView.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: () => import('../views/DestinationView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to: any, _from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
