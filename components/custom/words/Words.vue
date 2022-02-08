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
                Özlü Sözler
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                      <v-list-item two-line>
                        <v-list-item-content>
                            <p class="text-h5 mb-5">
                                {{ data.content }}
                            </p>
                            <v-list-item-subtitle> {{ data.author }}</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
              </v-card-text>
            </v-card>
      </v-container>
 </div>
</template>

<script>
export default {
  async mounted(){
      await this.$axios.$get('api/words')
      .then(response => {
        console.log(response.data);
        let len = response.data.length;
        this.data = response.data[len - 1];
      });
    },
    data() {
      return {
        data : [],
      }
    },
}
</script>

<style>

</style>