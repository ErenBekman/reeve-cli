<template>
  <div>
    <v-container>
        <TebligatSonuc />
    </v-container>
  </div>
</template>

<script>
export default {
    components: {
        TebligatSonuc: () => import("@/components/basic/tebligatSonuc"),
    },
}
</script>

<style>

</style>