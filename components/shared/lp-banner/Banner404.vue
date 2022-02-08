<template>
  <div class="banner-wrapper" style="background-color:#a23131">
    <v-container>

      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          md="6"
          lg="4"
          class="d-flex align-center justify-center"
        >
          <div class="text-center">
            <h1 class="banner-title font-weight-bold white--text">
              Opps, 404 - Hatası
            </h1>
            <h4 class="banner-subtitle mr-0 white--text font-weight-regular">
              Böyle bir sayfa bulunamadı!
            </h4>
            <div class="mt-16 pt-2">
              <v-btn nuxt large to="/" color="error" elevation="0">
                Anasayfaya Dön
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner404",
  data() {
    return {};
  },
  methods: {}
};
</script>
