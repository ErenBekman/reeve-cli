<template>
  <div>
      <v-container>
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                  Online Tebligat <br> Sorgulaması
              </v-btn>

              <v-card-text class="text-center pa-15">
                <v-list-item two-line>
                    <v-list-item-content>
                        <p class="text-h5">
                       Adınıza gelmiş olan tebligatları online olarak sorgulayabilirsiniz.
                        </p>
                    </v-list-item-content>
                    </v-list-item>
                    <v-form v-model="valid" ref="form">
                    <v-row align="center">
                        <v-col cols="12">
                        <v-text-field
                            v-model="NameSurname"
                            label="Ad Soyad"
                            name="NameSurname"
                            :rules="[v => !!v || 'Bu alanı doldurmak zorundadır.']"
                            required
                        ></v-text-field>
                         <v-btn
                            :disabled="!valid"
                            color="primary"
                            class="mr-4"
                            to="/tebligatSonuc"
                            @click="$nuxt.$emit('input',NameSurname)"
                            >
                            Sorgula
                            </v-btn>
                        </v-col>
                    </v-row>
                    </v-form>
              </v-card-text>
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
 data: () => ({
    valid: true,
    NameSurname: '',
     isActive: false,
     total:null,
     date:null,
  }), 
  methods : {}
}
</script>

<style>

</style>
