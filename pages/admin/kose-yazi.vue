<template>
  <div>
      <v-container class="item-admin" style="padding-top:65px;">
          <Form3 />
      </v-container>
  </div>
</template>

<script>
export default {
layout:'admin',
components: {
    Form3: () => import("@/components/admin/UiForm3"),
},
data(){
    return{

    }
}
}
</script>

<style scoped>

</style>