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
                Göztepe Mahalle <br> Muhtarlığı
              </v-btn>
              <v-card-text class="text-center pa-15">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/" class="list-item">Mahallemiz</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/" class="list-item">Muhtarımızı Tanıyalım</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/" class="list-item">Muhtarlık İşlemleri</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/etkinlik" class="list-item">Etkinlik Tarihleri</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/" class="list-item">Bizden Haberler</nuxt-link>
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
  name: "Pricing",
  data() {
    return {};
  },
  methods: {},
};
</script>
