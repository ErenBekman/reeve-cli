<template>
  <div class="logo">
    <div class="logoo">

      <a href="https://www.facebook.com/mehmet.kupcuk.96" target="_blanck">
      <font-awesome-icon :icon="['fab', 'facebook']" class="font"/>
      </a>
      <font-awesome-icon :icon="['fab', 'instagram-square']" class="font"/>
      <font-awesome-icon :icon="['fab', 'twitter']" class="font"/>
      <!-- <font-awesome-icon :icon="['fab', 'youtube']" class="font"/> -->
      <!-- <nuxt-link to="/auth/login">
      <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="font"/>
      </nuxt-link> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.logo a {
  display: flex;
}
</style>