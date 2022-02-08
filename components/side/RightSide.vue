<template>
  <div>
    <div>
        <Questioning />
    </div>

    <div class="item">
        <Msg />
     </div>

    <div class="item">
        <Banner />
    </div>
    
    <div class="item">
        <News />
     </div>
    
    <div class="item">
        <Links />
     </div>
    
  </div>
</template>

<script>
export default {
  components: {
    Banner: () => import("@/components/custom/c2a/C2a4"), 
    Msg: () => import("@/components/custom/c2a/C2a3"), 
    News: () => import("@/components/custom/news/News"), 
    Questioning: () => import("@/components/custom/questioning/Questioning"),
    Links: () => import("@/components/custom/pricing/Pricing3"),  
  },
}
</script>

<style>

</style>