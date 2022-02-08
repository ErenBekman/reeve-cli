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
                Yararlı Linkler
              </v-btn>

            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <v-card-text class="text-center pa-15">
                <v-list-item>
                    <ul class="BoxContent">
                        <li>
                            <a href="https://www.turkiye.gov.tr/" class="text1 fontSize12 hv1" target="_blank">E-Devlet Sitesine Giriş</a>
                        </li>
                        <li>
                            <a href="https://www.ibb.istanbul/icerik/sosyal-hizmetler" class="text1 fontSize12 hv1" target="_blank">İBB Sosyal Hizmetler</a>
                        </li>
                        <li>
                            <a href="https://uyg.sgk.gov.tr/nezaman/" class="text1 fontSize12 hv1" target="_blank">Ne Zaman Emekli Olurum?</a>
                        </li>
                        <li>
                            <a href="https://reservation.tuvturk.com.tr/Web.UI/Index.aspx" class="text1 fontSize12 hv1" target="_blank">Araç Muayene Randevu Al </a>
                        </li>
                        <li>
                            <a href="https://intvd.gib.gov.tr/internetvd/template.jsp?page=IVD_MTV_SORGU" class="text1 fontSize12 hv1" target="_blank">Araç Vergi Borcunu Öğrenin</a>
                        </li>
                        <li>
                            <a href="https://www.egm.gov.tr/sayfalar/trafik_sorgulari.aspx" class="text1 fontSize12 hv1" target="_blank">Trafik Cezası Sorgulama </a>
                        </li>
                        <li>
                            <a href="https://hgsmusteri.ptt.gov.tr" class="text1 fontSize12 hv1" target="_blank">HGS Kaçak Geçiş İhlali Sor</a>
                        </li>
                        <li>
                            <a href="https://uygulama.kgm.gov.tr/ihlal/Sayfalar/ihlal.aspx" class="text1 fontSize12 hv1" target="_blank">OGS Kaçak Geçiş İhlali Sor</a>
                        </li>
                        <li>
                            <a href="https://www.hastanerandevu.gov.tr/Vatandas/" class="text1 fontSize12 hv1" target="_blank">Hastane Randevu Alma</a>
                        </li>
                   </ul>
                </v-list-item>

              </v-card-text>
            </v-card>
            
      </v-container>
 </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {};
  },
  methods: {},
};
</script>
