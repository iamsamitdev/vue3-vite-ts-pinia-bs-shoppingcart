import { createApp } from 'vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import Custom CSS
import './styles/custom.css'

// Import Sweet Alert 2
import 'sweetalert2/dist/sweetalert2.min.css'

// Import Root Component
import App from './App.vue'

// Import Router
import router from './router/index'

// Import Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

