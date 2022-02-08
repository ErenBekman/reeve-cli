export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bağcilar-Göztepe-Mahalle-Muhtarliği",
    htmlAttrs: {
      lang: "tr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "BağcilarGöztepeMahalleMuhtarliği", name: "BağcilarGöztepeMahalleMuhtarliği", content: "Bağcilar Göztepe Mahalle Muhtarliği" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/fav.jpeg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  // loading: {
  //   color: "DodgerBlue",
  //   height: "5px",
  //   continuous: true,
  //   duration: 3000
  // },
  loading: {
    color: 'DodgerBlue',
    height: '15px',
    continuous: true,
    duration: 3000
  },
  
  pageTransition: {
    name: "page",
    mode: "out-in"
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src : "~/plugins/vue2-google-maps.js", ssr: true },
    '~/plugins/alert.js',
    '~/plugins/filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 200 }],
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    'vue-sweetalert2/nuxt',
  ],

  
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  },

  axios: {
    baseURL : 'http://dadi-api.test/api',
    // proxyHeaders: false,
    credentials: false,
    proxy: true ,
    // requestInterceptor: (config) => {
    //   config.headers.common['Accept'] = 'application/xml,application/json text/plain, */*';
    //   config.headers.common['X-Frame-Options'] = 'ALLOWALL';
    //   config.headers.common['Access-Control-Allow-Origin'] = '*';
    //   config.headers.common['Access-Control-Allow-Methods'] = "GET, POST, PUT, DELETE";
    //   config.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    //   config.headers.common['Content-Type'] = "application/json,application/xml,";
    //   return config
    // }

  },
  
  proxy: {
    '/api/': { target: 'http://dadi-api.test/api', pathRewrite: {'^/api/': ''}, changeOrigin: true },
    '/api4/': { 
      target: 'https://v6.exchangerate-api.com/v6/ded5c076384fc8d57455331b' , pathRewrite: { "^/api4/": "" }, changeOrigin: true
    },
    '/api3/': { 
      target: 'https://api.openweathermap.org/data/2.5' , pathRewrite: { "^/api3/": "" }, changeOrigin: true
    } 
  },
    

  render: {
    static : {
      setHeaders(res) {
        res.setHeader('Accept', 'application/xml,application/json text/plain, */*');
        res.setHeader('X-Frame-Options', 'ALLOWALL');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }
 
    }
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          maxAge: 0,
          // required: true,
          // type: 'Bearer'
        },
        endpoints: {
          login: { url: 'http://dadi-api.test/api/login', method: 'post' },
          logout: { url: 'http://dadi-api.test/api/logout', method: 'post' },
          user: { url: 'http://dadi-api.test/api/user', method: 'get' }
        },
        user: {
          property: false,
          // autoFetch: true
        },
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/admin',
      home: '/admin'
    }
  },

  
};
