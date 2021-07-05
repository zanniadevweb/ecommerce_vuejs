<template>
  <v-card-text>
    <v-container>
      <v-row>
        <v-col v-for="element in exclureChampsInactifs"  :key="element.champ"
          cols="12"
          :sm="element.largeur"
        >

          <v-text-field v-if="element.typeinput==='text' && element.champActif===true"
            :value="value[element.champ]"
            :label="element.label"
            :hint="element.hint"
            :disabled="element.compound===true ? true : false"
            @input.native="update(element.champ, $event.target.value)"
          ></v-text-field>

          <v-text-field v-if="element.typeinput==='number' && element.champActif===true"
            :value="value[element.champ]"
            :label="element.label"
            :hint="element.hint"
            :disabled="element.compound===true ? true : false"
            @input.native="update(element.champ, $event.target.value)"
          ></v-text-field>

          <v-select v-if="element.typeinput==='select' && element.champActif===true"
            v-model="value[element.champ]"
            :label="element.label"
            :items="element.items"
            outlined
          ></v-select>

        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    // la liste des champs
    config: {
      type: Array,
      default: function () { return [] }
    },
    // l'objet modifié par le formulaire (v-model)
    value: {
      type: Object,
      default: function () { return {} }
    }
  },
  methods: {
    update (key, value) {
      const miseajour = Object.assign({}, this.value, { [key]: value })
      this.$emit('input', miseajour)
    }
  },
  computed: {
    ...mapGetters(['configuration']),
    exclureChampsInactifs () {
      return this.config.filter(item => item.champActif === true)
    }
  }
}
</script>
