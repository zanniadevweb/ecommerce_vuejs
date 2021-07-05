<template>
<v-app>
    <v-card flat tile>
      <v-app-bar
        color="#333333"
        dark
        shrink-on-scroll
        src="https://picsum.photos/id/163/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to bottom left, rgba(40,150,150,.9), rgba(40,20,150,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <themenuitems :config="configuration" v-if="(configuration!==null) && (!this.$route.meta.ecranConnecte)"/>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        app
        fixe
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >

          <!-- Image source icône => URL : https://icons8.com/icon/112534/successful-delivery ; Auteur : 'Successful Delivery icon by Icons8'-->
          <div class="d-flex align-center">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/images/ecommerce_logo.png"
                transition="scale-transition"
                width="40"
              />
                <v-toolbar-title>E-Commerce</v-toolbar-title>
          </div>

<!--
          <v-chip
          class="ma-2"
          :color="connected ? 'green' : 'red'"
          >
          Connecté
          </v-chip>
          <v-chip
          class="ma-2"
          :color="configured ? 'green' : 'red'"
          >
          Configuré
          </v-chip>
          <v-btn @click="logout" color="green" >
           Déconnexion
         </v-btn>
-->

<!--
          <router-link style="text-decoration: none; color: inherit;" to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>
          </router-link>
-->

<!--
            <router-link style="text-decoration: none; color: inherit;" to="/ClientAccueil">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Espace Client</v-list-item-title>
            </v-list-item>
            </router-link>
-->
            <router-link style="text-decoration: none; color: inherit;" to="/">
            <v-list-item>
              <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-list-item>
            </router-link>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      </v-card>
      <v-container fluid>
                      <v-card flat tile>
                        <v-main>
                          <v-container fluid>
                            <transition name="fade" mode="out-in">
                              <router-view :key="$route.fullPath"></router-view> <!-- Clé recharge composants à chaque chargement via une route dynamique -->
                            </transition>
                          </v-container>
                        </v-main>
                      </v-card>
       </v-container>
  </v-app>
</template>

<script>
import CONFIGINIT from '@/configuration/configParDefaut'
import TheMenuItems from '@/components/UtilTheMenuItems'
import { cloneDeep } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  components: {
    themenuitems: TheMenuItems
  },
  data: () => ({
    drawer: false,
    group: null,
    jsonModele: {},
    config: {
      type: Array,
      default: function () { return [] }
    }
  }),

  created () {
    this.chargerConfModele()
  },

  methods: {
    logout () {
      this.$store.dispatch('deconnexion').then(() => {
        if (this.$route.meta.ecranConnecte) {
          this.$router.push('/ClientConnexion')
        }
      })
    },
    chargerConfModele () {
      this.$store.dispatch('ecrireConfModele', cloneDeep(CONFIGINIT))
    }
  },
  computed: {
    ...mapGetters(['connected', 'configured', 'pending', 'configuration'])
  }
}
</script>

<style>
#nav v-tabs.linkExactActiveClass {
  color: green;
}
#nav v-tabs.linkActiveClass {
  color: red;
}

.fade-enter-active,

.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,

.fade-leave-to {
  opacity: 0;
}

</style>
