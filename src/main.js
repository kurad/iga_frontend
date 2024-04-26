
import { createApp } from 'vue'
import App from './App.vue'
import jQuery from 'jquery';
import router from './router/index.js'
import './axios'
// import './assets/js/simple-datatables@latest.js' 
import './assets/js/datatables-simple-demo.js'

import '../src/assets/backend/css/styles.css'


import '../src/assets/frontend/dist/css/adminlte.min.css'

import '../src/assets/frontend/jquery/jquery.min.js'
import '../src/assets/frontend/bootstrap/js/bootstrap.bundle.min.js'
import '../src/assets/frontend/dist/js/adminlte.min.js'
window.$ = window.jQuery = jQuery;

const app = createApp(App)
    app.use(router)
    app.mount('#app')
