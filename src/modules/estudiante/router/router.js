import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    { path: "/", component: () => import('../pages/Bienvenida') },
    { path: "/consultar", component: () => import('../pages/ConsultaEstudiante') },
    { path: "/actualizar", component: () => import('../pages/ActualizarEstudiante') },
    { path: "/eliminar", component: () => import('../pages/EliminarEstudiante') },
    { path: "/guardar", component: () => import('../pages/GuardaEstudiante') },
    { path: "/:pathMatch(.*)*", component: () => import('../pages/NotFound') },
    /*
    { path: "/juego", component: ()=> import('../modules/pokemon/page/JuegoPage') },
    { path: "/premios", component: ()=> import('../modules/pokemon/page/PremiosPage') },
    { path: "/pokemon", component: ()=> import('../modules/pokemon/page/PokemonPage.vue') },
    { path: "/:pathMatch(.*)*", component: ()=> import('../modules/pokemon/page/NoEncontrado') },
  */
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router