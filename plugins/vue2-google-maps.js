import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAwU29UERLnIeRIRTiYLcZszxKXYDQXT3U',
    libraries: 'places', // This is required if you use the Autocomplete plugin    
  },
});