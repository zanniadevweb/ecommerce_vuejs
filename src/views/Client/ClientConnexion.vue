<template>
<div>
    <div class="text-center"><h1>Espace Client Connexion</h1></div>

    <v-container fluid pa-0>
            <v-row align="center" justify="center"
                style="height:100vh" dense>
                <v-col cols="12" lg="6" md="6" class="white fill-height d-flex flex-column justify-center align-center">
                    <v-card flat tile>

                        <v-card-title>Se connecter</v-card-title>

                       <v-card-actions>
                           <v-btn @click="login"
                           color="light-green darken-2"
                           dark
                         >
                         Connexion
                         </v-btn>
                      </v-card-actions>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>

  <div class="text-center">

</div>

</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$store.dispatch('connexion').then(() => {
        this.$router.push('/ClientAccueil')
      })
    }
  }
}
</script>
