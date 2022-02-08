<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <Header />
    <Banner />
    <v-main>

    <v-container fluid class="container-layout">
    <v-row> 
        <v-col cols="12"  md="3" sm="12" class="mr-auto">
          <LeftSide />
        </v-col>
        <v-col cols="12" md="6" sm="12" >          
            <Nuxt />
              <transition name="fade">
                <a href="#" v-scroll-to="'#element'" class="scroll-top" v-show="isShow">
                    <font-awesome-icon :icon="['fas', 'chevron-circle-up']" class="font scroll-top__ico"/>
                </a>
            </transition>
        </v-col>

        <v-col cols="12" md="3" sm="12" class="ml-auto">
          <RightSide />
        </v-col>
      </v-row>
    </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
       scrollY: 0,
    };
  },
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer"),
    Banner: () => import("@/components/shared/lp-banner/Banner"),
    LeftSide: () => import("@/components/side/LeftSide"),
    RightSide: () => import("@/components/side/RightSide"),
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
  },
  computed: {
    isShow() {
      return this.scrollY > 200 ? true : false;
    }
  },
  methods: {
    onScroll() {
      this.scrollY = window.pageYOffset;
    }
  }
};
</script>

<style></style>
