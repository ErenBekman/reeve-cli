<template>
  <div>
    <header class="v-sheet v-sheet--tile theme--dark v-toolbar v-toolbar--flat v-app-bar v-app-bar--fixed" style="height: 64px; margin-top: 0px; transform: translateY(0px); left: 0px; right: 0px;" data-booted="true">
      <div class="v-toolbar__content" style="height: 64px;">
          <div class="container mx-auto py-0">
            <div class="row align-center">
              <div class="v-responsive v-image mr-5" style="height: 48px; max-width: 48px; width: 48px;">
                <div class="v-responsive__sizer" style="padding-bottom: 82.9787%;">
                  </div><div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://blog-free.johnleider.com/img/logo.84165a2e.png&quot;); background-position: center center;"></div>
                  <div class="v-responsive__content" style="width: 376px;"></div>
                  </div>
                  <span class="v-btn__content" style="color:white;"> Admin Panel </span>

                  <nuxt-link to="/admin" class="hidden-sm-and-down v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                    <span class="v-btn__content"> Anasayfa </span>
                  </nuxt-link>
                    <div  v-if="$auth.loggedIn" class="hidden-sm-and-down v-btn v-btn--flat v-btn--text theme--dark v-size--default">
                      <span class="v-btn__content" @click.prevent="logout"> Çıkış Yap </span>
                    </div>
      
                      <div class="spacer"></div>
                </div>
            </div>
         </div>
 </header>

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
    },
     async logout(){
         await this.$auth.logout()
        //  this.$router.push('/auth/login')
    }
  }
};
</script>

