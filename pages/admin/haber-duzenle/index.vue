<template>
  <div>
    <div>
      <v-container style="margin-top:50px;">
            <v-btn
                block
                large
                depressed
                color="black"
                class="text-uppercase rounded-t-0 container-admin"
            >
            <p style="color:white;">HABER DÜZENLE</p>
                
            </v-btn>
        <v-row justify="start">
          <v-col cols="12" sm="12">
            <v-card hover class="d-flex mt-12 container-admin"  v-for="(item,index) in laravelData.data" :key="index">
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
              <v-card-title>{{ item.title }} </v-card-title>
              <v-card-text>{{ item.content | readMore(175, ' ')}}
                <div class="mt-10">
                  <nuxt-link :to="`/admin/haber-duzenle/${item.id}`"> 
                      <font-awesome-icon :icon="['fas', 'edit']" class="fontpagin"/>
                      <font-awesome-icon :icon="['fas', 'trash-alt']" class="fontpagin"/>
                </nuxt-link>
                </div>
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
    // layout: (context) => context.route.path.indexOf('/admin/') != -1 ? 'adminerror' : 'error',
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
      // async asyncData({params, $axios}, page=1) {
      //   return await $axios.$get('api/news/?page=' + page)
      //       .then(response => {
      //           let laravelData = response.data
      //           return { laravelData }
      //       }).catch(error => {
      //         console.log('Request cancelled' , error)
      //     })
      // },
  methods: {
    async getResults(page = 1) {
     await this.$axios.$get('api/news/?page='+ page)
          .then(response => {
              this.laravelData = response;
          });
    },
  },
};
</script>
