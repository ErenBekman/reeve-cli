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
                Hava Durumu
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
              v-if="item"
            >
              <v-card-text class="text-center pa-15">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5">
                       {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <!-- Mon, 12:30 PM, Mostly sunny -->
                          {{item.weather && item.weather[0].main}}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                         <p>{{ Math.round(item.main && item.main.temp) }}&deg;C</p>
                        <!-- 23&deg;C -->
                        </v-col>
                        <v-col cols="6">
                          <!-- :src="this.$theIcon(weather.weather[0].icon)" -->
                            <!-- :src='`${item.weather[0].icon}`' -->
                            <!-- :src='this.$theIcon(item.weather[0].icon)' -->
                            <!-- src="https://cdn.vuetifyjs.com/images/cards/sun.png" -->
                        <v-img
                            :src='`http://openweathermap.org/img/w/${item.weather[0].icon}.png`'
                            alt="weather icon"
                            width="92"
                            v-if="item.weather"
                        ></v-img>
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sun.png" 
                            alt="weather icon"
                            width="92"
                            v-else
                        ></v-img>
                        </v-col>
                    </v-row>
              </v-card-text>
                                    
            </v-card>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
              v-else
            >
              <v-card-text class="text-center pa-15">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5">
                          Istanbul
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Bulutlu
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                        13&deg;C
                        </v-col>
                        <v-col cols="6">
                          <!-- :src="this.$theIcon(weather.weather[0].icon)" -->
                            <!-- :src='`${item.weather[0].icon}`' -->
                            <!-- :src='this.$theIcon(item.weather[0].icon)' -->
                            <!-- :src='`http://openweathermap.org/img/w/${item.weather[0].icon}.png`' -->
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                            alt="weather icon"
                            width="92"
                        ></v-img>
                        </v-col>
                    </v-row>
              </v-card-text>
                                    
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
  async mounted(){
    const key = '92073dc5bc2ed65c13686862e83e848e';
    await this.$axios.$get('api3/weather?q=İstanbul,34214&units=metric&appid=92073dc5bc2ed65c13686862e83e848e')
    .then(response => {
      this.item = response
    })
  },
  data(){
        return{
            item:[]
        }
    },
}
</script>

<style>

</style>