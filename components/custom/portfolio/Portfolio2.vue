<template>
  <div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
               Fotoğraf Galerisi
              </h2>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-13">
          <v-col cols="12" md="12" lg="12" class="container-image">
            <v-card class="portfolio-card overflow-hidden mb-20" v-for="(item,index) in data" :key="index">
              <div class="portfolio-img">
                <img
                  :src="`${item.image}`"
                  class="img-fluid"
                  width="250"
                  height="200"
                  alt="portfolio"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
        back: {
            image:{
                default: ' '
            }
        },
        loaded:false,
        data:[],
    };
  },
  async mounted(){
    await this.$axios.$get('api/foto').then(response => {
      // console.log(response.data[0].id);
          this.data = response.data
      })
  },
  // async asyncData({$axios}) {
  //     return await $axios.$get('api/foto').then(response => {
  //         let data = response.data
  //         this.name = response.data.imageName;
  //         return { data }
  //     })
  // },
};
</script>
