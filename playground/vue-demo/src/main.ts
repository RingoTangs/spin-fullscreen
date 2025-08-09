import './style.css'
import SpinFullscreen from '@ringotangs/spin-fullscreen-vue'
import { createApp } from 'vue'
import App from './App.vue'
import '@ringotangs/spin-fullscreen-vue/dist/style.css'

createApp(App).use(SpinFullscreen, {}).mount('#app')
