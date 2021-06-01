import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Utilisateur/UtilAccueil.vue'
import UtilListe from '../views/Utilisateur/UtilListe.vue'
import UtilFormulaire from '../views/Utilisateur/UtilFormulaire.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: { ecranConnecte: false }
  },

  {
    path: '/ClientConnexion',
    name: 'clientconnexion',
    component: () =>
      import(/* webpackChunckName: "clientonnexion" */ '../views/Client/ClientConnexion.vue')
  },

  {
    path: '/ClientAccueil',
    name: 'clientaccueil',
    component: () =>
      import(/* webpackChunckName: "clientaccueil" */ '../views/Client/ClientAccueil.vue'),
    meta: { ecranConnecte: true }
  },

  {
    path: '/UtilListe/:typelisting',
    name: 'UtilListe',
    component: UtilListe,
    meta: { ecranConnecte: false }
  },

  {
    path: '/UtilFormulaire/:typelisting/:idtuple',
    name: 'UtilFormulaire',
    component: UtilFormulaire,
    meta: { ecranConnecte: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
