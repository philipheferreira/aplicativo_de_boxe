const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/boxeadores", component: () => import("pages/Boxeadores.vue") },
      {
        path: "/estilosdeluta",
        component: () => import("pages/EstilosDeLuta.vue"),
      },
      { path: "/movimentos", component: () => import("pages/Movimentos.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
