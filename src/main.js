import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!store.state.pending) {
    if (to.meta.ecranConnecte) {
      if (store.state.connected) {
        next()
      } else {
        next('/clientconnexion')
      }
    } else { // Si ecranConnecte : 'undefined' ou false
      if ((to.name === 'clientconnexion') || (store.state.configuration !== null)) {
        next()
      } else {
        next('/ClientAccueil')
      }
    }
  } else {
    store.dispatch('verifierConfModele').then(() => {
      if (to.meta.ecranConnecte) {
        if (store.state.connected) {
          next()
        } else {
          next('/clientconnexion')
        }
      } else {
        if ((to.name === 'clientconnexion') || (store.state.configuration !== null)) {
          next()
        } else {
          next('/ClientAccueil')
        }
      }
    })
  }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
