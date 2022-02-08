<template>
  <div>
    <div>
      <v-container>

        <v-row justify="start" class="feature2-spacer">

          <v-col cols="12" lg="6" class="mb-15">
            <v-card elevation="0" v-for="(item,index) in data" :key="index" class="mt-10">
              <v-row>
                <v-col cols="12" md="8" class="py-0">
                  <v-card-text>
                    <div>
                      <v-row>
                        <v-col cols="12" md="4">
                          <img
                            src="@/assets/images/features/2/img2.jpg"
                            class="img-fluid rounded"
                            alt="feature2"
                            width="50"
                            height="50"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="8"
                          class="px-md-0 d-flex align-center"
                        >
                          <h4 class="font-weight-medium font-18">
                            {{ item.content }}
                          </h4>
                          <nuxt-link :to="`/haber/${item.id}`">
                           devami                
                        </nuxt-link>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Haber",
      async mounted(){
      await this.$axios.$get('http://dadi-api.test/api/news')
      .then(response => {
        this.data = response.data
      });
    },
  data() {
    return {
      data:[],
    };
  },
  methods: {},
};
</script>
