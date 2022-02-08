import Vue from 'vue'

Vue.filter('readMore', function (text, length, suffix) {
  if(text){
    return text.slice(0, length) + (length < text.length ? suffix || '...' : '')
  }else {
    return text
  }
});

