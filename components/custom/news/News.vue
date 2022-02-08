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
                Günlük Gazeteler
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text>
                    <v-row align="center">
                        <v-col cols="12">
                          <a href="https://www.haberler.com/gazeteler/" target="_blanck">
                          <v-img
                          :src="require('@/assets/images/muhtar/gazete1.png')"
                          alt="banner"
                          class="img-msj"
                          /> 
                        </a>
                         <div class="text-center mt-12">
                         <a href="https://www.haberler.com/gazeteler/" target="_blanck">
                         <v-btn outlined color="primary"> Gazete Oku </v-btn>
                         </a>
                         </div>
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
