<template>
<v-tabs>
    <v-tab
      :value="route"
      v-for="(route, id) in routes" :key="id"
      v-show="route.actif===true"
      :to='{name:"UtilListe", params:{typelisting: route.name} }'
      id="nav"
      >
        <v-icon
        left
        >
        {{route.icone}}
        </v-icon>
        {{route.name}}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: {
    // la liste des champs
    config: {
      type: Object,
      default: function () { return [] }
    }
  },
  data () {
    return {
      routes: [
        {
          id: 1,
          name: 'Boissons',
          icone: 'mdi-bottle-wine',
          actif: true
        },
        {
          id: 2,
          name: 'Fruitslegumes',
          icone: 'mdi-fruit-cherries',
          actif: true
        },
        {
          id: 3,
          name: 'Boulangerie',
          icone: 'mdi-food-croissant',
          actif: true
        },
        {
          id: 4,
          name: 'Fromagerie',
          icone: 'mdi-cheese',
          actif: true
        }
      ]
    }
  },
  created () {
    this.verifierListingActif()
  },
  watch: {
    config: function (conf) {
      this.verifierListingActif()
    }
  },
  methods: {
    verifierListingActif () {
      for (var i in this.routes) {
        if (this.config[this.routes[i].name].tableActif === false) {
          this.routes[i].actif = false
        } else {
          this.routes[i].actif = true
        }
      }
    }
  }
}
</script>

<style>
#nav {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
</style>
