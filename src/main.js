import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

// 페이지 컴포넌트들 임포트
import Home from './views/Home.vue'
import Features from './views/Features.vue'
import CaseStudies from './views/CaseStudies.vue'
import Contact from './views/Contact.vue'
import FAQ from './views/FAQ.vue'

// 라우터 설정
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
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
  {
    path: '/contact',
    name: 'Contact', 
    component: Contact
  }
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