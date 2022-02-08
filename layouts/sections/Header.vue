<template>
  <div>
    <v-app-bar app absolute class="app-header" flat elevate-on-scroll>
      <v-container class="py-0 fill-height" id="element">
        <!-- Logo -->
        <Logo />

        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon class="white--text" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <nuxt-link class="black--text nav-link" nuxt to="/"> Anasayfa </nuxt-link>
            </li>
            <li class="nav-item" text>
              <nuxt-link class="black--text nav-link" nuxt to="/iletisim">
                İletişim
              </nuxt-link>
            </li>
            <li class="nav-item" text>
              <nuxt-link class="black--text nav-link" nuxt to="/etkinlik">
                Etkinlik
              </nuxt-link>
            </li>
            <li class="nav-item" text>
              <nuxt-link class="black--text nav-link" nuxt to="/foto-galeri">
                Fotoğraf Galerisi
              </nuxt-link>
            </li>
            <li class="nav-item">
              <!-- login-regiter -->
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>

  </div>
</template>

<script>
export default {
  name: "Header",

  components: {
    Logo: () => import("@/layouts/sections/Logo")
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>
