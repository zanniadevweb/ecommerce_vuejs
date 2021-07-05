<template>
  <div class="text-center">
  <v-container fluid pa-0 ma-0>
  <v-row align="center" justify="center" dense>
    <v-col cols="12" lg="10" md="10" class="white d-flex flex-column align-center ma-0 pa-0">
    <h1>{{ typeListing }}</h1>

    <span>
        <v-dialog v-model="dialogSaveBeforeReturn" max-width="500px">
          <v-card>
            <v-card-title class="headline">Enregistrer cette ligne avant de quitter ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text  @click="retourVueListeSansEnregistrer">Non</v-btn>
              <v-btn color="blue darken-1" text @click="enregistrerTupleCourantEtRetourVueListe">Oui</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </span>

    <v-card>
      <v-card-title>
        <span class="headline">
        <v-container fluid>
          {{ formTitle }}
          <v-btn @click="retourVueListeNormal"
            rounded
            outlined
            color="primary"
            class="ma-2">
            <v-icon left>mdi-keyboard-return</v-icon>
              Retour vue Liste {{ typeListing }}
            </v-btn>
              <v-btn
                :label="item"
                :value="item"
                v-for="(item, idBouton) in items" :key="idBouton"
                :color="item.color"
                class="ma-2"
                @click="lancerActionBouton(item.action)"
                >
                  {{item.name}}
                  <v-icon
                  right
                  dark
                  >
                  {{item.icone}}
                  </v-icon>
              </v-btn>
        </v-container>

        </span>
      </v-card-title>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline">Supprimer cette ligne ?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text  @click="fermerDialogueSuppression">Annuler</v-btn>
            <v-btn color="blue darken-1" text @click="supprimerTupleConfirmer">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>

    <v-card>
      <the-formulaire :config="configuration[this.typeListing].champs" v-model="fichecourante" />
    </v-card>

    </v-col>

  </v-row>
  </v-container>
  </div>
</template>

<script>
import { Database } from '@/database/database'
import { mapGetters } from 'vuex'
import TheFormulaire from '@/components/UtilTheFormulaire'

export default {

  components: {
    'the-formulaire': TheFormulaire
  },

  data () {
    return {
      dialogDelete: false,
      dialogSaveBeforeReturn: false,
      idTuple: this.$route.params.idtuple,
      typeListing: this.$route.params.typelisting,
      deleteId: -1,
      incrementBasiqueCourant: '',
      fichecourante: { // Vide au départ puis copie de defaultItem qui a été initialisé dans Created
      },
      defaultItem: { // Création vide -> Created : remplit avec champs configuration actuelle
      },
      items: [
        {
          idBouton: 1,
          name: 'Précédent',
          icone: 'mdi-chevron-left',
          color: 'light-grey accent-1',
          action: 'precedentTuple'
        },
        {
          idBouton: 2,
          name: 'Supprimer',
          icone: 'mdi-trash-can',
          color: 'red lighten-1',
          action: 'supprimerTupleAction'
        },
        {
          idBouton: 3,
          name: 'Enregistrer',
          icone: 'mdi-content-save',
          color: 'light-blue accent-1',
          action: 'enregistrerTupleCourantEtRetourVueListe'
        },
        {
          idBouton: 4,
          name: 'Nouveau',
          icone: 'mdi-plus',
          color: 'green accent-3',
          action: 'nouveauTuple'
        },
        {
          idBouton: 5,
          name: 'Suivant',
          icone: 'mdi-chevron-right',
          color: 'light-grey accent-1',
          action: 'suivantTuple'
        }
      ]
    }
  },

  created () {
    if (this.configuration[this.typeListing].composeede !== undefined) {
      this.nomficheliee = this.configuration[this.typeListing].composeede
      console.log('fiche liée : ' + this.nomficheliee)
      this.db = new Database(this.nomficheliee)
      this.chargerListe(this.nomficheliee)
    }
    this.db = new Database(this.configuration[this.typeListing].nomBD)
    this.indexCourant = this.configuration[this.typeListing].index
    this.labelIndexConfig = this.configuration[this.typeListing].incrementSecondaire
    this.incrementBasiqueCourant = this.configuration[this.typeListing].incrementBasique
    this.incrementSecondaireCourant = this.indexCourant.slice(1, -1).split('+')[0]
    if ((typeof (this.idTuple) !== 'undefined') && (parseInt(this.idTuple) !== 0)) { // Modifier une fiche
      this.id = this.idTuple
      this.db.chargerFiche(parseInt(this.id)).then((fiche) => {
        this.fichecourante = fiche
      })
    } else { // Nouvelle fiche
      this.reinitialiserFormulaireCreation()
    }
  },

  methods: {
    chargerListe (nomfiche) {
      this.db.listerFicheCourante().then(liste => {
        this.ficheliee = liste
      })
    },

    peuplerEntetesColonnes () {
      var prefUtilisateurs = JSON.parse(localStorage.getItem('PREF_UTIL_' + this.typeListing))
      this.headers = this.exclureTitresCheckbox.map((element) => {
        return { text: element.label, value: element.champ }
      })
      this.headers.push({ text: 'Actions', value: 'actions', sortable: false })
      if (!prefUtilisateurs) {
        this.headersSelected = this.headers
      } else {
        this.headersSelected = prefUtilisateurs
      }
    },

    retourVueListeSuppression () {
      this.$router.push({ name: 'UtilListe', params: { idtuple: this.idTuple } })
    },

    retourVueListeNormal () {
      this.dialogSaveBeforeReturn = true
    },

    lancerActionBouton (actionBouton) {
      this[actionBouton]()
    },

    precedentTuple () {
      this.db.fichecourante.where(this.indexCourant).below([this.fichecourante[this.incrementSecondaireCourant], this.fichecourante[this.incrementBasiqueCourant]]).desc().limit(1).first().then(val => {
        if (val !== undefined) {
          var tupleSuivant = val.id
          this.$router.push({ name: 'UtilFormulaire', params: { idtuple: tupleSuivant } })
        } else {
          console.log('Snackbar : Il n\'y a pas de fiche précédente')
        }
      }).catch(function (error) {
        alert('Ooops: ' + error)
      })
    },

    supprimerTupleAction () {
      this.deleteId = this.idTuple
      this.dialogDelete = true
    },

    supprimerTupleConfirmer () {
      this.db.effacerFiche(this.deleteId).then(() => {
        this.retourVueListeSuppression()
        this.fermerDialogueSuppression()
      })
    },

    fermerDialogueSuppression () {
      this.dialogDelete = false
    },

    retourVueListeSansEnregistrer () {
      this.$router.push({ name: 'UtilListe', params: { idtuple: this.idTuple } })
    },

    enregistrerTupleCourant () {
      this.fichecourante[this.incrementBasiqueCourant] = parseInt(this.fichecourante[this.incrementBasiqueCourant])
      this.fichecourante[this.incrementSecondaireCourant] = parseInt(this.fichecourante[this.incrementSecondaireCourant])
      if (this.id !== 0) {
        return this.db.modifierFiche(this.fichecourante)
      } else { // nouveau si id == 0
        return this.db.ajouterFiche(this.fichecourante)
      }
    },

    enregistrerTupleCourantEtRetourVueListe () {
      this.enregistrerTupleCourant().then(() => {
        this.$router.push({ name: 'UtilListe', params: { idtuple: this.idTuple } })
      })
    },

    nouveauTuple () {
      this.enregistrerTupleCourant().then(() => {
        this.reinitialiserFormulaireNouveau()
      })
    },

    reinitialiserFormulaireCreation () {
      for (var i in this.configuration[this.typeListing].champs) { // Assignation des propriétés vides (sans valeur) du listing courant à this.defaultItem afin que this.fichecourante puisse en faire une recopie
        if (this.configuration[this.typeListing].champs[i].increment !== undefined) {
          var propriete = this.configuration[this.typeListing].champs[i].champ
          this.defaultItem[propriete] = ''
        }
      }
      this.id = 0 // Met Id à zéro, permettant de créer un nouvel ID => voir code enregistrerTupleCourant, si id == 0, dialogue 'Nouvelle fiche'
      this.fichecourante = Object.assign({}, this.defaultItem) // Fait un clone de default item sur lequel on travaille pour éviter les problèmes de recopie

      this.db.fichecourante.orderBy(this.indexCourant).desc().first().then((dernierefiche) => { // Tri du numéro complet (ex : US + EA) de manière ascendante / croissant / plus petit - plus grand
        if (dernierefiche !== undefined) { // Nouvelle fiche quand il y a au moins un tuple
          this.fichecourante[this.incrementBasiqueCourant] = parseInt(dernierefiche[this.incrementBasiqueCourant]) + 1
          this.numeroBasique = this.fichecourante[this.incrementBasiqueCourant]
          this.fichecourante[this.incrementSecondaireCourant] = parseInt(dernierefiche[this.incrementSecondaireCourant])
        } else { // Nouvelle fiche quand il n'y aucun tuple
          this.fichecourante[this.incrementBasiqueCourant] = 1
          this.fichecourante[this.incrementSecondaireCourant] = 1
        }
      }).catch(function (error) {
        alert('Ooops: ' + error)
      })
    },

    reinitialiserFormulaireNouveau () {
      this.id = 0 // Met Id à zéro, permettant de créer un nouvel ID => voir code enregistrerTupleCourant, si id == 0, dialogue 'Nouvelle fiche'
      delete this.fichecourante.id // Résout le problème qui empêchait la création d'une nouvelle fiche (substitut de 'Object.assign({}, this.defaultItem)')
      this.db.fichecourante.where(this.incrementSecondaireCourant).equals(this.fichecourante[this.incrementSecondaireCourant]).desc().first().then((dernierefiche) => { // Tri du numéro complet (ex : US + EA) de manière ascendante / croissant / plus petit - plus grand
        this.fichecourante[this.incrementBasiqueCourant] = parseInt(dernierefiche[this.incrementBasiqueCourant]) + 1
      }).catch(function (error) {
        alert('Ooops: ' + error)
      })
    },

    suivantTuple () {
      this.db.fichecourante.where(this.indexCourant).above([this.fichecourante[this.incrementSecondaireCourant], this.fichecourante[this.incrementBasiqueCourant]]).limit(1).first().then(val => {
        if (val !== undefined) {
          var tupleSuivant = val.id
          this.$router.push({ name: 'UtilFormulaire', params: { idtuple: tupleSuivant } })
        } else {
          console.log('Snackbar : Il n\'y a pas de fiche suivante')
        }
      }).catch(function (error) {
        alert('Ooops: ' + error)
      })
    }
  },
  computed: {
    ...mapGetters(['configuration']),
    formTitle () {
      return this.id === 0 ? 'Nouvelle fiche' : 'Modifier fiche'
    }
  }
}
</script>
