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
            <p style="color:white;">  HABER DÜZENLE  #{{ id }}</p>
               
            </v-btn>
              <v-card-text>
                 <v-form
                v-model="valid"
              >
                  <v-file-input
                    label="File input"
                    filled
                    name="image"
                    prepend-icon="mdi-camera"
                    show-size
                    v-model="data.image"
                ></v-file-input>
               <v-text-field
                  label="Yazarı"
                  v-model="data.author"
                  name="author"
                  placeholder="Yazarı"
                ></v-text-field>
               <v-text-field
                  label="Konu Baslığı"
                  v-model="data.title"
                  name="title"
                  placeholder="Konu Baslığı"
                ></v-text-field>
                <v-textarea
                    v-model="data.content"
                    solo
                    name="content"
                    label="Mesajınız (*)"
                ></v-textarea>
                <div class="mt-10">
                  <v-btn @click.prevent="newsUpdate" block large depressed color="primary" class="text-uppercase rounded-t-0">Düzenle</v-btn>
                </div>
                <div class="mt-10">
                  <v-btn @click.prevent="newsDelete" block large depressed color="warning" class="text-uppercase rounded-t-0">Sil</v-btn>
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
layout: 'admin',
  data() {
    return {
      data: {
        content: "",
        author: "",
        title: "",
        image:""
      },
      valid: true,
      id:null,
    };
  },
  mounted(){
      this.id = this.$route.params.id  
  },
  async asyncData({params, $axios}) {
        return await $axios.$get(`api/news/${params.id}`)
            .then(response => {
                let data = response.data
                return { data }
            }).catch(error => {
              console.log('Request cancelled' , error)
          })
      },
methods: {
    async newsUpdate(){
        let formdata = new FormData();
          Object.keys(this.data).forEach(e => {
          formdata.append(e, this.data[e])
        });
          //  await this.$axios.$put(`api/news/${this.id}` , formdata, {
            //   headers : {'Content-Type': 'multipart/form-data'}
            // })
            await this.$axios.$put(`api/news/${this.id}` , this.data).then(response => {
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
          async newsDelete(){
              await this.$axios.$delete(`api/news/${this.id}`)
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
      },
};
</script>
