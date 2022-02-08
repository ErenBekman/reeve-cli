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
            <p style="color:white;">ÖZLÜ SÖZLER EKLE </p>
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
                    solo
                    name="content"
                    label="Sözü (*)"
                ></v-textarea>
                <div class="mt-10">
                  <v-btn @click.prevent="word"  block large depressed color="black" class="text-uppercase rounded-t-0" style="color:white;">Gönder</v-btn>
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
    data: {
        content: "",
        author: "",
      },
      valid: true,
      loaded:false,
    };
  },
  methods: {
    async word(){
      await this.$axios.$post('api/word' , this.data)
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
                        title: 'Özlü Söz Eklendi'
                        })
                    }
      })
    }
  },
};
</script>
