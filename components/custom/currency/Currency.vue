<template>
  <div>
      <v-container>
            <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                Döviz Bilgieri
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5">
                                USD
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>     
                        </v-col>
                        <v-col cols="6" v-if="dolar">
                            {{ dolar }}
                        </v-col>
                        <v-col cols="6" v-else>
                            Null
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5">
                                EURO
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>     
                        </v-col>
                        <v-col cols="6" v-if="euro">
                          {{ euro }}
                        </v-col>
                        <v-col cols="6" v-else>
                            Null
                        </v-col>
                    </v-row>
              </v-card-text>
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
    
     async mounted() {
         
         const config = {
                method: 'GET',
                mode: 'no-cors',
                headers : {    
                    'Accept': 'application/xml',
                    "Content-Type": "application/xml",
                    'Access-Control-Allow-Origin': '*' ,
                },
                withCredentials: true,
                credentials: 'same-origin',
         };

            await this.$axios.$get('api4/latest/EUR')
                .then(response => {
                    this.euro = response.conversion_rates.TRY
                }).catch(error => {
                    console.log('Request cancelled' , error)
                })

            await this.$axios.$get('api4/latest/USD')
                .then(response => {
                    this.dolar = response.conversion_rates.TRY;
                }).catch(error => {
                    console.log('Request cancelled' , error)
                })
      },
      data: () => ({
        data: [],
        euro:'',
        dolar:'',
    }),

}
</script>

<style>

</style>