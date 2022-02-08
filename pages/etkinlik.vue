<template>
  <div>
    <v-col cols="12" md="12" sm="12">
      <Activity />
    </v-col>   
  </div>
</template>

<script>
  export default {
    components: {
      Activity: () => import("@/components/custom/activity/Activity")
    },
    data: () => ({

    }),
    
  }
</script>
