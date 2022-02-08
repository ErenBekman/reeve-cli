<template>
  <div>
    <div>
      <v-container>
        <v-row justify="start">
          <v-col cols="12" sm="12">
              <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                  Online Tebligat Sorgulaması
              </v-btn>

                  <v-progress-circular
                  class="progress"
                  v-if="loading"
                  indeterminate
                  :size="10"
                  :width="5"
                  color="info"
                ></v-progress-circular>
            <v-card v-if="total>0">
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">AdSoyad</th>
                        <th class="text-left">Gelen Tarihi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(i,index) in data" :key="index">
                        <td>{{ i.NameSurname }} </td>
                        <td>{{ i.ComeDate }} </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>     
            <h3 v-if="total==0" class="mt-5  ml-3"> Girdiğiniz Ad Soyad ile Eşleşen Kayıt Bulunamadı. </h3> 
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
      async mounted(){
          this.$nuxt.$on('input', (val) => {
            this.loading = true;
            let name = val;  
            this.NameSurname = val;
             this.$axios.$get(`http://dadi-api.test/api/noti?q=${name}`).then((response) => {
              let total = response.data.length;
              this.data = response.data;
              this.total = total; 
              this.loading = false;
          })  
          })
      },
  data() {
    return {
      data:[],
      total:null,
      date:null,
      NameSurname:'',
      err:false,
      loading:false
    }
  },
};
</script>

<style scoped>
  .progress{
    /* margin: auto!important; */
    /* margin-left: 250px; */
    /* margin-left: auto; */
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
</style>
