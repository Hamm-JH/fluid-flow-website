import { createRouter, createWebHistory } from 'vue-router'

// 페이지 컴포넌트들 임포트
import Home from '@/views/Home.vue'
import Features from '@/views/Features.vue'
import CaseStudies from '@/views/CaseStudies.vue'
import Contact from '@/views/Contact.vue'
import FAQ from '@/views/FAQ.vue'

// 라우트 설정
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Fluid Flow - 토목 엔지니어링을 위한 유체 흐름 분석 솔루션'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
    meta: {
      title: 'FAQ - Fluid Flow Analysis System'
    }
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,
    meta: {
      title: '기능 - Fluid Flow Analysis System'
    }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    meta: {
      title: '사례 연구 - Fluid Flow Analysis System'
    }
  },
  {
    path: '/contact',
    name: 'Contact', 
    component: Contact,
    meta: {
      title: '문의하기 - Fluid Flow Analysis System'
    }
  }
]

// 라우터 인스턴스 생성
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

// 페이지 타이틀 변경을 위한 전역 가드 설정
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Fluid Flow Analysis System'
  next()
})

export default router