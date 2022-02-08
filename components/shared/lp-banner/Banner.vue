<template>
  <div class="banner-wrapper">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold black--text">
              İstanbul Bağcılar Göztepe Mahalle Muhtarlığı
            </h1>
            <h4 class="banner-subtitle black--text font-weight-regular">
              Muhtar Mehmet Küpçük
            </h4>
            <div class="mt-16 pt-2">
              <!-- <v-btn
                color="error"
                class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                nuxt
                large
                target="_blank"
                href="https://www.wrappixel.com/templates/nextkit-nuxtjs-free-uikit/"
                elevation="0"
              >
                Download Free
              </v-btn> -->
              <v-btn
                nuxt
                large
                to="/iletisim"
                class="btn-custom-md" 
                outlined
                color="black"
                elevation="0"
              >
                <p class="black--text"> İletişim </p>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <!-- <v-img
            :src="require('@/assets/images/muhtar/muhtarlik.jpeg')"
            alt="banner"
          /> -->
           
           <!-- <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :src="slide.src"
            >
            </v-carousel-item>
          </v-carousel> -->
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
        slides: [
          {
            src : require("~/assets/images/muhtar/ata.jpeg")

          },
          {
            src : require("~/assets/images/muhtar/ata4.jpeg")
          },
          {
            src : require("~/assets/images/muhtar/ata5.jpeg")
          },
          {
            src : require("~/assets/images/muhtar/ata6.jpeg")
          },
          {
            src : require("~/assets/images/muhtar/ata7.jpeg")
          },
          {
            src : require("~/assets/images/muhtar/ata8.jpg")
          },
        ],
    };
  }
};
</script>
