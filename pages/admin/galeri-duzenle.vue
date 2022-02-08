<template>
  <div>
    <div class="portfolio-component mini-spacer" style="padding-top:50px;">
      <v-container>
            <v-btn
                block
                large
                depressed
                color="black"
                class="text-uppercase rounded-t-0 font-weight-bold item-admin"
            >
            <p style="color:white;">GALERI DUZENLE</p>
               
            </v-btn>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
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
                <div @click="deleteImage(item.imageId.id,item.id)">
                <font-awesome-icon :icon="['fas', 'trash-alt']" class="font"/>
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
    layout:'admin',
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
  methods: {
    async deleteImage($id,$fotoId){
      await this.$axios.$delete(`api/foto/${$id}`,{data:{fotoId: $fotoId}}).then(response => {
        console.log($fotoId);
        this.$router.push('/admin')
         this.loaded = true;
                if (this.loaded) {
                        const Toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                        })
                        Toast.fire({
                        icon: 'success',
                        title: 'Silme Başarılı.'
                        })
                    }
      })
    }
  },
};
</script>
