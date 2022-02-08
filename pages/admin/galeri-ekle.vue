<template>
  <div>
      <v-container style="margin-top:50px;">
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-card class="container-admin">
                <v-btn
                block
                large
                depressed
                color="black"
                class="text-uppercase rounded-t-0 font-weight-bold item-admin"
            >
            <p style="color:white;">GALERİ EKLE</p>
            </v-btn>
              <v-card-text>
                 <v-form v-model="valid">
                  <v-file-input
                    label="File input"
                    filled
                    name="image"
                    prepend-icon="mdi-camera"
                    show-size
                    v-model="data.image"
                ></v-file-input>
                <div class="mt-10">
                  <v-btn @click.prevent="addnew" block large depressed color="black" class="text-uppercase rounded-t-0" style="color:white;">Gönder</v-btn>
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
    layout:'admin',
  data() {
    return {
      data: {
        title: 'image',
        image:{},
      },
      valid: true,
      loaded:false,
    };
  },
  methods: {
    async addnew(){
        let formData = new FormData();
          Object.keys(this.data).forEach(element => {
          formData.append(element, this.data[element])
        });
        // formData.append('image', this.data.image);

       await this.$axios.$post('api/foto' , formData , {
         headers : {'Content-Type': 'multipart/form-data'}
       }).then(response => {
        this.$router.push('/admin/galeri-duzenle')
      })
      
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
                  title: 'Yeni Resim Eklendi'
                })
              }
    }
  },
};
</script>
