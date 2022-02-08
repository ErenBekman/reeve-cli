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
                Duyurular
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <v-list-item two-line>
                    <marquee  direction="up" onmouseover="this.stop(); this.style.cursor = 'default'" onmouseout="this.start();" height="100" scrollamount="1" scrolldelay="1" style="cursor: default;">
                          <span class="Verdana fontSize12 normal" v-for="(item,index) in data" :key="index"> 
                              {{ item.author }}
                              <br>
                              {{ item.content }}
                            <hr>
                          </span>
                  </marquee>
                    </v-list-item>
              </v-card-text>
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {

    async mounted(){
      await this.$axios.$get('api/announce?page=1')
      .then(response => {
        this.data = response.data;
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