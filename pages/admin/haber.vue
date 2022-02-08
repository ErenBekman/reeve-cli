<template>
  <div>
      <v-container class="item" style="margin-top:35px;">
          <Form4 />
      </v-container>
  </div>
</template>

<script>
export default {
layout:'admin',
components: {
    Form4: () => import("@/components/admin/UiForm4"),
},
data(){
    return{

    }
}
}
</script>

<style scoped>

</style>