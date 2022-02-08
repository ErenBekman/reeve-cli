<template>
  <div>
    <div>
     <v-btn
        block
        large
        depressed
        color="info"
        class="text-uppercase rounded-t-0 mt-15"
    >
        Bizden Haberler 
    </v-btn>
      <v-container>
        <v-row justify="start">
          <v-col cols="12" sm="12">
            <v-card hover class="d-flex mb-12"  v-for="(item,index) in laravelData.data" :key="index">
              <div>
                  <v-img
                class="white--text align-end"
                height="200"
                width="200"
                :src="`${item.image}`"
                v-if="item.image"
              >
              </v-img>
                  <v-img
                class="white--text align-end"
                height="200"
                width="200"
                :src="require('@/assets/images/muhtar/default.jpeg')"
                v-else
              >
              </v-img>
              </div>
              <div>
              <v-card-title>{{ item.title  }} </v-card-title>
              <v-card-text v-if="item.content && item.hasOwnProperty('content')">{{ item.content | readMore(175, ' ') }}
                <nuxt-link :to="`/haber/${item.id}`"> 
                   devami..
                </nuxt-link>
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
      // laravelData:[],
      page: 1,

    };
  },
  // async asyncData({$axios}){
  //   return await $axios.$get('api/news/?page=1').then(response => {
  //     let laravelData = response.data
  //     return { laravelData }
  //   })
  // },
  methods: {
    async getResults(page = 1) {
     await this.$axios.$get('api/news/?page='+ page)
          .then(response => {
            // console.log(response);
              this.laravelData = response;
          });
    },
  },
  watch: {
      page(value , oldvalue){
        this.getResults(value);
      },
    },
};
</script>
