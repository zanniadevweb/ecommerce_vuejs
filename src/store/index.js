import Vue from 'vue'
import Vuex from 'vuex'

// import { chargerConfModele, ecrireConfModele, effacerConfModele } from '@/configuration'
import { get, set, remove } from '@/configuration'

Vue.use(Vuex)

/* Store vuex avec trois variables d'état:
  connected: le fait d'étre connecté ou pas
  configuration: la configuration (null si n'existe pas encore)
  pending: état d'attente du chargement de la conf (le temps de vérifier si la conf existe ou pas)
 */

/* Mutations (changements d'état) possible) */
const APPLIPRETE = 'APPLIPRETE'
const CONFDETRUITE = 'CONFDETRUITE'
const CONNEXION = 'CONNEXION'
const DECONNEXION = 'DECONNEXION'

export default new Vuex.Store({
  /* variable d'états */
  state: {
    pending: true,
    connected: false,
    configuration: null
  },
  getters: {
    pending: state => {
      return state.pending
    },
    connected: state => {
      return state.connected
    },
    configured: state => {
      return (state.configuration !== null)
    },
    configuration: state => {
      return state.configuration
    }
  },
  /* mutations (changements d'état) */
  mutations: {
    [APPLIPRETE] (state, config) {
      state.pending = false
      state.configuration = config
    },
    [CONFDETRUITE] (state) {
      state.configuration = null
    },
    [CONNEXION] (state) {
      state.connected = true
    },
    [DECONNEXION] (state) {
      state.connected = false
    }
  },
  actions: {
    verifierConfModele ({ commit }) {
      // var conf = chargerConfModele()
      // commit(APPLIPRETE, conf)
      get().then((conf) => {
        commit(APPLIPRETE, conf)
      })
    },
    ecrireConfModele ({ commit }, conf) {
      // ecrireConfModele(conf)
      // commit(APPLIPRETE, conf)
      set(conf).then(() => {
        commit(APPLIPRETE, conf)
      })
    },
    effacerConfModele ({ commit }) {
      // effacerConfModele()
      // commit(CONFDETRUITE)
      remove().then(() => {
        commit(CONFDETRUITE)
      })
    },
    connexion ({ commit }) {
      commit(CONNEXION)
    },
    deconnexion  ({ commit }) {
      commit(DECONNEXION)
    }
  },
  modules: {
  }
})
