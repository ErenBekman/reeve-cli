<template>
  <div>    
      <v-container>
        <div class="v-navigation-drawer__image">
        <div class="v-image v-responsive" style="height: 100%; width: 100%;">
        <div class="v-image__image v-image__image--preload v-image__image--cover" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); background-position: center center;">
        </div><div class="v-responsive__content"></div></div></div>
        <div class="v-navigation-drawer__content"><div class="px-2"><div tabindex="-1" class="mb-0 justify-space-between pl-3 v-list-item">
        <div class="v-avatar v-list-item__avatar" style="height: 40px; min-width: 40px; width: 40px;"><div class="v-image v-responsive"><div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
        <div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://vuetify-material-dashboard-free.vuetifyjs.com/img/vmd.a39402e6.svg&quot;); background-position: center center;"></div>
        <div class="v-responsive__content" style="width: 256px;"></div></div></div>
         <div class="v-list-item__content pl-2">
        <div class="v-list-item__title text-h3"><strong class="mr-1 font-weight-black">ADMIN</strong>
        <span class="primary--text">PANEL</span></div></div></div><hr role="separator" aria-orientation="horizontal" class="mx-3 mb-2 v-divider">
        <div class="v-list v-sheet v-list--nav">
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-view-dashboard"></i>
                    <nuxt-link to="/admin" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Anasayfa</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-update"></i>
                    <nuxt-link to="/admin/tebligat-sorgulama" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Tebligat Güncelle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-book"></i>
                    <nuxt-link to="/admin/duyuru" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Duyuru Ekle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-book"></i>
                    <nuxt-link to="/admin/duyuru-duzenle" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Duyuru Düzenle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-map-marker"></i>
                    <nuxt-link to="/admin/form" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">İstek Öneri Formu</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-format-font"></i>
                    <nuxt-link to="/admin/sozler" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Özlü Sözler</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-chart-bubble"></i>
                    <nuxt-link to="/admin/kose-yazi" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Etkinlik Ekle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-chart-bubble"></i>
                    <nuxt-link to="/admin/etkinlik-duzenle" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Etkinlik Düzenle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                 <i aria-hidden="true" class="v-icon notranslate mdi mdi-clipboard-outline"></i>
                    <nuxt-link to="/admin/haber" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Haber Ekle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                     <i aria-hidden="true" class="v-icon notranslate mdi mdi-clipboard-outline"></i>
                    <nuxt-link to="/admin/haber-duzenle" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Haber Düzenle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-email"></i>
                    <nuxt-link to="/admin/galeri-ekle" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Galeri Ekle</div></div>
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="v-list-item__icon my-2 align-self-center">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-email"></i>
                    <nuxt-link to="/admin/galeri-duzenle" class="py-1 v-list-item v-list-item--link" tabindex="0"> 
                        <div class="v-list-item__content"><div class="v-list-item__title">Galeri Düzenle</div></div>
                    </nuxt-link>
                </div>
            </div>
           </div></div></div>
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
