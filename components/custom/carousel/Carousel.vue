<template>
  <div>
           <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(s, i) in data"
              :key="i"
              :src="`${s.image}`"
              height="400"
              width="700"
            >
            </v-carousel-item>
          </v-carousel>
  </div>
</template>

<script>
  export default {
    async mounted(){
      await this.$axios.$get('api/foto').then(response => {
        this.data = response.data
      })
    },
    data: () => ({
        data: [],
    }),
  }
</script>

<style>

</style>