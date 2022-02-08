<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <v-main>
    <v-container fluid class="container-layout">
    <Header />
    <v-row> 
        <v-col cols="12"  md="4" sm="12" class="mr-auto">
          <LeftSideAdmin />
        </v-col>
        <v-col cols="12" md="8" sm="12" >
            <Nuxt />
        </v-col>
      </v-row>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware : "admin",
  data() {
    return {
    };
  },
  components: {
    Header: () => import("@/components/admin/Header"),
    LeftSideAdmin: () => import("@/components/side/AdminLeftSide"),
  },
  methods: {}
};
</script>

<style></style>
