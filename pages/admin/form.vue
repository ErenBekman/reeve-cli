<template>
  <div>
      <v-container class="item-admin" style="padding-top:65px;">
          <Form5 />
      </v-container>
  </div>
</template>

<script>
export default {
layout:'admin',
components: {
    Form5: () => import("@/components/admin/UiForm5"),
},
data(){
    return{

    }
}
}
</script>

<style scoped>

</style>