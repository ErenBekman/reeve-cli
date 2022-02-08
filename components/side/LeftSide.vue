<template>
  <div>
      <div>
      <ListInfo />
      </div>
      <div class="item">
        <Announcement />
     </div>
      <div class="item">
        <Weather />
     </div>
      <div class="item">
        <Survey />
     </div>
      <div class="item">
        <Currency />
     </div>
      <div class="item">
        <Words />
     </div>
      <!-- <div class="item">
        <Links />
     </div> -->
    
  </div>
</template>

<script>
export default {
  components: {
    Weather: () => import("@/components/custom/weather/Weather"),
    ListInfo: () => import("@/components/custom/pricing/Pricing2"), 
    Survey: () => import("@/components/custom/survey/Survey"), 
    Currency: () => import("@/components/custom/currency/Currency"), 
    Words: () => import("@/components/custom/words/Words"), 
    Announcement: () => import("@/components/custom/announcement/Announcement"), 
  },
}
</script>

<style>

</style>