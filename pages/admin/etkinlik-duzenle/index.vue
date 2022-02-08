<template>
  <div>
      <v-container style="padding-top:40px;">
        <v-row justify="start">
          <v-col cols="12" sm="12">
            <v-btn
                block
                large
                depressed
                color="black"
                class="text-uppercase rounded-t-0 container-admin-activity"
            >
            <p style="color:white;">ETKİNLİK TARİHLERİ</p>
                
            </v-btn>
            <v-card hover class="d-flex mb-15"  v-for="(item,index) in laravelData.data" :key="index">
              <div>
              <p class="text-activity"><span style="font-weight:600;" >Tarih: {{ item.date }}</span></p>
              <p class="text-activity">Etkinliğin Adı: {{ item.aName }}</p>
              <p class="text-activity">Etkinliği Düzenleyen: {{ item.organizer }}</p>
              <p class="text-activity">Adres: {{ item.address }}</p>
              <p class="text-activity">Açıklama: {{ item.content }}</p>
                <div class="mt-10">
                  <nuxt-link :to="`/admin/etkinlik-duzenle/${item.id}`" class="ml-10"> 
                      <font-awesome-icon :icon="['fas', 'edit']" class="fontpagin"/>
                      <font-awesome-icon :icon="['fas', 'trash-alt']" class="fontpagin"/>
                </nuxt-link>
                </div>
              </div>
            </v-card>
                <div class="text-center mt-10">
                  <v-pagination
                  v-model="page"
                  :length="Math.ceil(laravelData.meta.total / laravelData.meta.per_page)"
                  :total-visible="3"
                ></v-pagination>  
              </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
export default {
    layout:'admin',
    async mounted(){
      this.getResults();
    },
  data() {
    return {
      laravelData:{
        meta:{
        total:0,
        per_page:7
        }
      },
      page: 1,
    };
  },
    watch: {
      page(value , oldvalue){
        this.getResults(value);
      },
    },
    methods: {
      async getResults(page = 1) {
       await this.$axios.$get('api/activity/?page='+ page)
          .then(response => {
              this.laravelData = response;
          });
      },
  },
  
};
</script>
