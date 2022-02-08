<template>
  <div>
    <div>
     <v-btn
        block
        large
        depressed
        color="black"
        class="text-uppercase rounded-t-0 font-weight-bold"
    >
    <p style="color:white;">GELEN MESAJLAR</p>
    </v-btn>
      <v-container>
        <v-row justify="start">
          <v-col cols="12" sm="12">
            <v-card hover class="mb-12"  v-for="(item,index) in laravelData.data" :key="index">
                <v-card-subtitle>{{ item.nameSurname }}</v-card-subtitle>
              <div>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>{{ item.content }}
              </v-card-text>
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
  </div>
</template>
<script>
export default {
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
     await this.$axios.$get('api/commun/?page='+ page)
          .then(response => {
              this.laravelData = response;
          });
    },
  },
};
</script>
