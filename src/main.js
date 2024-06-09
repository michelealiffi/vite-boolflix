import { createApp } from 'vue';

//import style
import './assets/scss/main.scss';

// import font-awesome
import '../node_modules/font-awesome/scss/font-awesome.scss'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// import flag-icon-css
import '../node_modules/flag-icon-css/css/flag-icons.min.css'

//import vue root component
import App from './App.vue';

createApp(App).mount('#app');
