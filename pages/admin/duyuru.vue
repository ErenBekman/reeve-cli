<template>
  <div>
      <v-container class="item" style="margin-top:40px;">
          <Form2 />
      </v-container>
  </div>
</template>

<script>
export default {
layout:'admin',
components: {
    Form2: () => import("@/components/admin/UiForm"),
},
data(){
    return{

    }
}
}
</script>

<style scoped>

</style>