<template>
  <div>
      <div class="item-admin">
        <ListInfo />
     </div>
  </div>
</template>

<script>
export default {
  components: {
    ListInfo: () => import("@/components/admin/List"),
  },
}
</script>

<style>

</style>