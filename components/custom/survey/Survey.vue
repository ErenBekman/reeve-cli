<template>
  <div>    
      <v-container>
            <v-btn
                block
                large
                depressed
                color="info"
                class="text-uppercase rounded-t-0"
              >
                Anket
                
              </v-btn>
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <v-form lazy-validation>
                  <p v-if="rules"> {{ rulesText }}</p>
                  <v-radio-group>
                    <div>
                      <input type="radio" v-model="data.options" label="Çok iyi" name="options" value="1" required />
                      <label for="Çok iyi">Çok iyi</label>
                    </div>
                    <div>
                      <input type="radio" v-model="data.options" label="Memnunum" name="options" value="2" />
                      <label for="Memnunum">Memnunum</label>
                    </div>
                    <div>
                      <input type="radio" v-model="data.options" label="Daha iyi olabilirdi" name="options" value="3" />
                      <label for="Daha iyi olabilirdi">Daha iyi olabilirdi</label>
                    </div>
                    <div>
                      <input type="radio" v-model="data.options" label="Beğenmiyorum" name="options" value="4" />
                      <label for="Beğenmiyorum">Beğenmiyorum</label>
                    </div>
                  </v-radio-group>
               <v-btn @click.prevent="oy" depressed color="primary"> Oy Ver </v-btn>
               <!-- <v-btn @click.prevent="resultOy" depressed color="primary"> Sonuc </v-btn> -->
                </v-form>
               <div class="navigation" v-bind:class="[isActive ? 'd-block' : '']" :v-model="isActive" v-show="isActive">
                 <p> Teşekkürler... </p>
                 <div> <span>Çok İyi</span> <p>% {{ item.Avg1 }} - {{ item.Count1 }} kişi</p> </div>
                 <div> <span>Memnunum</span> <p>% {{ item.Avg2 }} - {{ item.Count2 }} kişi</p> </div>
                 <div> <span>Daha iyi olabilirdi</span> <p>% {{ item.Avg3 }} - {{ item.Count3 }} kişi</p> </div>
                 <div> <span>Beğenmiyorum</span> <p>% {{ item.Avg4 }} - {{ item.Count4 }} kişi</p> </div>
                 <div> <span>Toplam Oy</span> <p> {{ item.total }} kişi oy verdi.</p> </div>
               </div>
              </v-card-text>
            </v-card>
      </v-container>
 </div>
</template>

<script>
export default {
 data () {
   return {
      radioGroup: null,
      data: {
        options : "",
      },
      item:[],
      isActive: false,
      rules:false,
      rulesText:"Lütfen seçim yapınız.",
   }
 },
 methods: {
   async oy(){
     if(this.data.options.length > 0){
       await this.$axios.$post('api/survey' , this.data)
        .then(response => {        
          this.rules = false

              this.$axios.$get('api/survey')
              .then(response => {        
                let len = response.data.length;
                this.item = response.data[len - 1];
              });
          
              // this.isActive = this.isActive ? false : true;
              this.isActive = true;
        });
     }else{
      this.rules = true
     }
   },
  //  async resultOy(){
  //    await this.$axios.$get('api/survey')
  //     .then(response => {        
  //       let len = response.data.length;
  //       this.item = response.data[len - 1];
  //       // console.log(response.data);
  //       this.isActive = this.isActive ? false : true;
  //     });
  //  },
 },
 computed: {
    radioRules() {
      return [
        this.data.options.length >= 0 || "Lütfen seçim yapınız."
      ];
    }
  }
}
</script>

<style>

</style>