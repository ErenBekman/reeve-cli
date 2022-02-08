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
            <p style="color:white;">
                TEBLIGAT EKLE (.csv)
            </p>
            </v-btn>
              <v-card-text>
                 <v-form v-model="valid">
                  <v-file-input
                    label="File input"
                    filled
                    name="tebligat"
                    v-model="data.tebligat"
                    show-size
                ></v-file-input>
                <div class="mt-10">
                  <v-btn @click.prevent="addTebligat" block large depressed color="black" class="text-uppercase rounded-t-0" style="color:white;">Gönder</v-btn>
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
data(){
    return{
        data:{
            tebligat:{}
        },
        valid:true
    }
},
methods:{
    async addTebligat(){
        let formData = new FormData();
          Object.keys(this.data).forEach(element => {
          formData.append(element, this.data[element])
        });

        await this.$axios.$post('/api/test', formData).then(response => {
            // console.log(response);=
            this.$router.push('/admin')
        });
    }
}
}
</script>

<style scoped>

</style>