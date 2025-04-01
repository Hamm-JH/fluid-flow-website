import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

// 페이지 컴포넌트들 임포트
import Home from './views/Home.vue'
import Features from './views/Features.vue'
import CaseStudies from './views/CaseStudies.vue'
// 필요한 경우 추가 페이지들 임포트
// import Contact from './views/Contact.vue'

// 라우터 설정
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies
  },
  // 필요한 경우 추가 라우트 설정
  // {
  //   path: '/contact',
  //   name: 'Contact', 
  //   component: Contact
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Vue 애플리케이션 생성 및 마운트
const app = createApp(App)
app.use(router)
app.mount('#app')