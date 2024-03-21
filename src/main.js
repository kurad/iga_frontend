
import { createApp } from 'vue'
import App from './App.vue'
import jQuery from 'jquery';
import router from './router/index.js'
import './axios'
import './assets/js/simple-datatables@latest.js'
import './assets/js/datatables-simple-demo.js'
// import './assets/lib/animate/animate.min.css'
// import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/style.css'




window.$ = window.jQuery = jQuery;
const app = createApp(App)
    app.use(router)
    app.mount('#app')
