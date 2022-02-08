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
                Muhtarımız
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                    <v-row align="center">
                        <v-col cols="12">
                        <v-img
                        :src="require('@/assets/images/muhtar/muhtar2.jpg')"
                        alt="banner"
                        class="img-msj"
                          height="200"
                        />
                        </v-col>
                    </v-row>
                      <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5">
                        MEHMET KÜPÇÜK
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
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
