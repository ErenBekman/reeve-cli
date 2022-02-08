<template>
  <div>
    <v-col cols="12" md="12" sm="12">
      <Carousel />

      <Feature />
    </v-col>   
  </div>
</template>

<script>
  export default {
    components: {
      Carousel: () => import("@/components/custom/carousel/Carousel"),
      Feature: () => import("@/components/basic/UiCard2"),
    },
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'warning',
        'success',
        'secondary',
      ],
    }),
    
  }
</script>
