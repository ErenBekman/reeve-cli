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
                İstek Öneri Formu
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <v-list-item two-line>
                    <v-list-item-content>
                        <p class="text-h6">
                       Mahallemiz hakkında istek, öneri, şikayetlerinizi buradan iletebilirsiniz.
                        </p>
                    </v-list-item-content>
                    </v-list-item>
                    <v-row align="center">
                            <v-col cols="12">
                                <nuxt-link to="/iletisim">
                                <v-img
                                :src="require('@/assets/images/muhtar/istek.jpeg')"
                                alt="banner"
                                class="img-msj"
                                />
                                </nuxt-link>
                            </v-col>
                        
                    </v-row>
              </v-card-text>
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
