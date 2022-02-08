<template>
   <v-app>

         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title class="text-center">Admin Giriş</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="email"
                              label="Email"
                              type="text"
                              v-model="form.email"
                           ></v-text-field>
                           <v-text-field
                              name="password"
                              label="Password"
                              type="password"
                              v-model="form.password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <nuxt-link to="/" color="primary" class="mr-10">Anasayfa</nuxt-link>
                        <v-btn @click.prevent="login" color="primary">Giriş Yap</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
   </v-app>
</template>

<script>
  export default {
    layout: "main",
    data: () => ({
      form :{
        email : '',
        password : '',
      }
    }),
    methods: {
      async login () {
        await this.$auth.loginWith('local' , {data:this.form})
        .then(response => {
            // localStorage.setItem("token", response.data);
            // this.$router.push('/admin')
        })
      },
    },
  }
</script>

<style scoped>
</style>