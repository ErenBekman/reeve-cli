<template>
  <div>
      <v-btn
        block
        large
        depressed
        color="black"
        class="text-uppercase rounded-t-0 font-weight-bold"
    >
        <p style="color:white;"> ETKİNLİK EKLE </p> 
    </v-btn>
      <v-container>

        <v-row justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-card>
              <v-card-text>
                <v-form
                v-model="valid"
                ref="form"
                lazy-validation
              >
               <v-text-field
                  label="Etkinliğin Adı"
                  v-model="data.aName"
                  name="aName"
                  placeholder="Etkinliğin Adı"
                ></v-text-field>
               <v-text-field
                  label="Etkinliği Düzenleyen"
                  v-model="data.organizer"
                  name="organizer"
                  placeholder="Etkinliği Düzenleyen"
                ></v-text-field>
               <v-text-field
                  label="Adres"
                  v-model="data.address"
                  name="address"
                  placeholder="Adres"
                ></v-text-field>
               <v-text-field
                  label="Açıklama"
                  v-model="data.content"
                  name="content"
                  placeholder="Açıklama"
                ></v-text-field>
               <v-text-field
                  label="Tarih-Saat"
                  v-model="data.date"
                  name="date"
                  placeholder="Tarih-Saat"
                ></v-text-field>
                <div class="mt-10">
                  <v-btn @click.prevent="addActivity" block large depressed color="black" class="text-uppercase rounded-t-0" style="color:white;">Gönder</v-btn>
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
  name: "UiForm",
  data() {
    return {
      data:{
        aName: '',
        organizer: '',
        address: '',
        content: '',
        date: '',
      },
      valid: true,
      loaded:false,
    };
  },
  methods: {
      async addActivity(){
       await this.$axios.$post('api/activity' , this.data)
      .then(response => {
         this.$router.push('/admin/etkinlik-duzenle')
        //  this.$refs.form.reset()
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
                  title: 'Etkinlik Eklendi'
                })
              }
      })
    }
  },
  mounted(){
          
  }
};
</script>
