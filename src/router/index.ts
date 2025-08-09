// import  RouteRecordRaw  from 'vue-router'
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";
import LoadingComponent from "../components/LoadingComponent.vue";
// import PublicLayout from "../layouts/PublicLayout.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    // component: PublicLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          defineAsyncComponent({
            loader: () => import("../views/HomeView.vue"),
            loadingComponent: LoadingComponent,
            delay: 200, // optional delay before showing skeleton
          }),
      },
      {
        path: "tours",
        name: "Tours",
        component: () =>
          defineAsyncComponent({
            loader: () => import("../views/Tour.vue"),
            loadingComponent: LoadingComponent,
            delay: 200, // optional delay before showing skeleton
          }),
      },
      {
        path: "tour/:id",
        name: "TourDetail",
        component: () =>
          defineAsyncComponent({
            loader: () => import("../views/TourDetailView.vue"),
            loadingComponent: LoadingComponent,
            delay: 200, // optional delay before showing skeleton
          }),
        props: true,
      },
      {
        path: "about",
        name: "About",
        component: defineAsyncComponent({
          loader: () => import("../views/AboutView.vue"),
          loadingComponent: LoadingComponent,
          delay: 200,
        }),
      },
      {
        path: "contact",
        name: "Contact",
        component: defineAsyncComponent({
          loader: () => import("../views/ContactView.vue"),
          loadingComponent: LoadingComponent,
          delay: 200,
        }),
      },
      {
        path: "gallery",
        name: "Gallery",
        component: defineAsyncComponent({
          loader: () => import("../views/GalleryView.vue"),
          loadingComponent: LoadingComponent,
          delay: 200,
        }),
      },
      {
        path: "destinations",
        name: "Destinations",
        component: defineAsyncComponent({
          loader: () => import("../views/DestinationView.vue"),
          loadingComponent: LoadingComponent,
          delay: 200,
        }),
      },
      {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: defineAsyncComponent({
          loader: () => import("../views/NotFoundView.vue"),
          loadingComponent: LoadingComponent,
          delay: 200,
        }),
      },
    ],
  },
];

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
