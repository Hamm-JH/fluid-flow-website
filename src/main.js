import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import { FontAwesomeIcon } from './plugins/fontawesome'
import AnimationPlugin from './plugins/animation'
import UtilsPlugin from './plugins/utils'

// 라우터는 router/index.js로 이동

// Vue 애플리케이션 생성 및 마운트
const app = createApp(App)

// 전역 컴포넌트 등록
app.component('font-awesome-icon', FontAwesomeIcon)

// 플러그인 등록
app.use(router)
app.use(AnimationPlugin)
app.use(UtilsPlugin)

// 앱 마운트
app.mount('#app')