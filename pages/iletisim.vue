<template>
  <div>
      <v-container class="">
            <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                İstanbul Bağcılar Göztepe Mahalle Muhtarlığı Mehmet Küpçük
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center">
                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5"> Adres : </v-list-item-title>                                    
                                </v-list-item-content>
                            </v-list-item>     
                        </v-col>
                        <v-col cols="6" class="text-contact"> Göztepe Mahallesi 2371 sokak (Saadet Sokak) No:16 Bağcılar/İstanbul </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5"> Telefon : </v-list-item-title>                                    
                                </v-list-item-content>
                            </v-list-item>     
                        </v-col>
                        <v-col cols="6" class="text-contact"> 
                          <p>0 (212) 445 95 87 </p>
                          <p>0 (532) 381 28 62 </p>
                        </v-col>
                    </v-row>

                    <v-row align="center">
                        <v-col
                        class="text-h2"
                        cols="6"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5"> Mail : </v-list-item-title>                                    
                                </v-list-item-content>
                            </v-list-item>     
                        </v-col>
                        <v-col cols="6" class="text-contact"> <div> goztepemahallesimuhtarligi @gmail.com  </div> </v-col>
                    </v-row>
              </v-card-text>
            </v-card>

            <div>
                <GmapMap
                :center="center"
                :zoom="17"
                map-type-id="terrain"
                style="width: 580px; height: 400px"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GmapMap>
            </div>

            <div>
                <Form2 />
            </div>
            
      </v-container>
  </div>
</template>

<script>
export default {
    // layout:"main",
    scrollY: 0,
    components: {
        Form2: () => import("@/components/basic/UiForm2"),
        // Form2: () => import("@/components/custom/contact/Contact2"),
    },
    data(){
        return {
            center: { lat:41.0573559, lng: 28.8338317 },
            markers: [ { position : { lat:41.0573559, lng: 28.8338317 } }, ],

        }
    },
    mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
  },
  computed: {
    isShow() {
      return this.scrollY > 200 ? true : false;
    }
  },
  methods: {
    onScroll() {
      this.scrollY = window.pageYOffset;
    }
  }
}
</script>

<style>

</style>