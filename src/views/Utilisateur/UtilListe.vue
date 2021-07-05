<template>
    <div class="text-center">

    <h1>{{ typeListing }}</h1>

    <v-card flat tile>
        <v-card-title>
          Listing {{ configuration[this.typeListing].nom }}
          <v-btn
            color="green accent-3"
            class="ma-2"
            @click="creerTuple"
            >
              Ajout Article
              <v-icon right dark>mdi-plus-circle</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-title>
         <v-data-table sm="12"
          :headers="headersSelected"
          :items="fichecourante"
          @click:row="editerTuple"
          :footer-props="{'items-per-page-options': [10, 20, 30, -1], 'items-per-page-text': 'Lignes par page', 'items-per-page-all-text': 'Tout'}"
          :items-per-page="-1"
         >
         <template v-slot:no-data>
           Pas encore de données
           </template>
         </v-data-table>
      </v-card>

      <v-flex d-flex>
         <v-layout wrap>
             <v-flex md4 v-for="item in this.fichecourante" :key="item.id">
                 <v-card class="mx-auto my-12" :loading="loading" max-width="374">
                   <template slot="progress">
                     <v-progress-linear
                       color="deep-purple"
                       height="10"
                       indeterminate
                     ></v-progress-linear>
                   </template>

                   <v-img
                     height="250"
                     src="https://loremflickr.com/320/240/food?random=1"
                   ></v-img>

                  <v-card-title>{{ item.nom_produit }}</v-card-title>
                  <v-card-subtitle>N° article : {{ item.numero_article }}</v-card-subtitle>
                  <v-card-text>
                    <v-row
                      align="center"
                      class="mx-0"
                    >
                    <!--
                      <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="grey--text ms-4">
                        4.5 (413)
                      </div>
                    -->
                    </v-row>

                    <div class="my-4 subtitle-1">
                      {{ item.devise }} • {{ item.tag_origine }} | {{ item.tag_typeproduit }}
                    </div>

                    <div>{{ item.description }}</div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

<!--
                  <v-card-title>Disponibilités de livraison</v-card-title>

                  <v-card-text>
                    <v-chip-group
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>Lundi</v-chip>

                      <v-chip>Mardi</v-chip>

                      <v-chip>Mercredi</v-chip>

                      <v-chip>Jeudi</v-chip>
                    </v-chip-group>
                  </v-card-text>
-->

<!--
                  <v-card-actions>
                    <v-btn
                      color="red accent-2"
                      text
                      @click="ajouterPanier"
                    >
                    <v-icon left dark>mdi-cart</v-icon> Ajouter au Panier
                    </v-btn>
                  </v-card-actions>
-->
                </v-card>
             </v-flex>
         </v-layout>
      </v-flex>

    </div>
</template>

<script>
import { Database } from '@/database/database'
import { mapGetters } from 'vuex'

export default {
  name: 'liste',

  created () {
    this.db = new Database(this.configuration[this.typeListing].nomBD)
    this.chargerListe()
    this.peuplerEntetesColonnes()
  },
  data () {
    return {
      dialogDelete: false,
      headers: [],
      headersSelected: [],
      fichecourante: [],
      deleteId: -1,
      typeListing: this.$route.params.typelisting,
      loading: false,
      selection: 1
    }
  },
  methods: {
    chargerListe () {
      this.db.listerFicheCourante().then(liste => {
        this.fichecourante = liste
      })
    },

    creerTuple () {
      this.$router.push({ name: 'UtilFormulaire', params: { typelisting: this.typeListing, idtuple: 0 } })
    },

    peuplerEntetesColonnes () {
      this.headers = this.configuration[this.typeListing].champs.map((element) => {
        return { text: element.label, value: element.champ }
      })
      this.headersSelected = this.headers
    },

    editerTuple (item) {
      this.$router.push({ name: 'UtilFormulaire', params: { typelisting: this.typeListing, idtuple: item.id } })
    },

    ajouterPanier () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }

  },
  computed: {
    ...mapGetters(['configuration'])
  }
}
</script>

<style>
.autocomplete {
  will-change: auto;
}
</style>
