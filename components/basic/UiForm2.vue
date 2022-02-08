<template>
  <div>
      <v-container>
          <div class="text-center">
              <h2 class="ui-title font-weight-bold">  İLETİŞİM FORMU </h2>
          <h2 v-if="err" class="font-weight-bold">Günde sadece 1 ileti gönderebilirsiniz.</h2>
            </div>

        <v-row justify="center">
          <v-col cols="12" sm="12" md="12">
            <v-card>
              <v-card-text>
                <v-form
                ref="form"
                v-model="valid"
              >
                <v-text-field
                  label="Ad Soyad"
                  :rules="[v => !!v || 'Bu alanı doldurmak zorundadır.']"
                  v-model="data.nameSurname"
                  placeholder="Enter username"
                  required
                ></v-text-field>
                <v-text-field
                  label="Konu"
                  :rules="[v => !!v || 'Bu alanı doldurmak zorundadır.']"
                  v-model="data.title"
                  placeholder="Enter username"
                  required
                ></v-text-field>
                <v-textarea
                    solo
                    :rules="[v => !!v || 'Bu alanı doldurmak zorundadır.']"
                    v-model="data.content"
                    name="input-7-4"
                    label="Mesajınız (*)"
                    required
                ></v-textarea>
                <div class="mt-10">
                  <v-btn @click.prevent="send" block large depressed color="primary" class="text-uppercase rounded-t-0">Gönder</v-btn>
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
      valid: true,
      data: {
        nameSurname: "",
        title: "",
        content: "",
      },
      err:false,
    };
  },
  methods: {
    async send(){
      await this.$axios.$post('api/commun', this.data)
      .then((result) => {
        // console.log(result);
          // setInterval(function(){
          //   this.$refs.form.reset();
          //   }.bind(this), 7000);

      }).catch((err) => {
        console.log(err); 
        this.err = true   
        setInterval(function(){
            this.err = false   
            this.$refs.form.reset();
            }.bind(this), 4000);
      });
    }
  },
};
</script>
