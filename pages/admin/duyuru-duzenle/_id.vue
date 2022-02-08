<template>
  <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-card class="container-admin">
              <v-btn
                block
                large
                depressed
                color="black"
                class="text-uppercase rounded-t-0 font-weight-bold"
            >
            <p style="color:white;">
                DUYURU DÜZENLE #{{ id }}
            </p>
            </v-btn>
              <v-card-text>
                 <v-form
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  label="Yazarı"
                  v-model="data.author"
                  name="author"
                  placeholder="Yazarı"
                ></v-text-field>
                <v-textarea
                    v-model="data.content"
                    name="content"
                    solo
                    label="Mesajınız (*)"
                ></v-textarea>
                <div class="mt-10">
                  <v-btn @click.prevent="annoUpdate" block large depressed color="black" class="text-uppercase rounded-t-0" style="color:white;">Düzenle</v-btn>
                </div>
                <div class="mt-10">
                  <v-btn @click.prevent="annoDelete" block large depressed color="warning" class="text-uppercase rounded-t-0">Sil</v-btn>
                </div>
                 </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
export default {
  layout: "admin",
  name: "Duyuru",
  data() {
    return {
      data: {
        content: "",
        author: "",
      },
      valid:true,
      loaded:false,
    };
  },
    mounted(){
    this.id = this.$route.params.id  
  },
  async asyncData({params, $axios}) {
        return await $axios.$get(`api/announce/${params.id}`)
            .then(response => {
                // console.log(response)
                let id = params.id
                let data = response.data
                return { data }
            }).catch(error => {
              console.log('Request cancelled' , error)
          })
      },
      methods: {
         async annoUpdate(){
              await this.$axios.$put(`api/announce/${this.id}` , this.data)
              .then(response => {
                  this.$router.push('/admin')
                  this.loaded = true;
                if (this.loaded) {
                        const Toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                        })
                        Toast.fire({
                        icon: 'success',
                        title: 'Güncelleme Başarılı.'
                        })
                    }
                    })
          },
          async annoDelete(){
              await this.$axios.$delete(`api/announce/${this.id}`)
              .then(response => {
                   this.$router.push('/admin')
                this.loaded = true;
                if (this.loaded) {
                        const Toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                        })
                        Toast.fire({
                        icon: 'success',
                        title: 'Silme Başarılı.'
                        })
                    }
                    
              })
          }
      }

};
</script>

