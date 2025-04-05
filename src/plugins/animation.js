/**
 * Animation plugin using GSAP
 * 
 * 페이지 및 컴포넌트 애니메이션을 담당하는 플러그인입니다.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default {
  /**
   * Vue 앱에 플러그인으로 설치하면 실행되는 메서드
   */
  install(app) {
    // 전역 속성 및 메서드 등록
    app.config.globalProperties.$gsap = gsap;
    app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
    
    // 유틸리티 애니메이션 함수들
    const animationUtils = {
      /**
       * 요소를 페이드 인 시키는 애니메이션
       * @param {HTMLElement} element - 애니메이션을 적용할 DOM 요소
       * @param {Object} options - 애니메이션 옵션
       */
      fadeIn(element, options = {}) {
        const defaults = { 
          opacity: 0, 
          duration: 0.6, 
          y: 20, 
          ease: 'power2.out'
        };
        
        return gsap.from(element, { ...defaults, ...options });
      },
      
      /**
       * 스크롤 트리거로 요소를 나타나게 하는 애니메이션
       * @param {string} selector - 애니메이션을 적용할 요소 선택자
       * @param {Object} options - 애니메이션 옵션
       */
      revealOnScroll(selector, options = {}) {
        const defaults = {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: selector,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        };
        
        return gsap.from(selector, { ...defaults, ...options });
      },
      
      /**
       * 페이지 전환 애니메이션
       * @param {Object} options - 애니메이션 옵션
       */
      pageTransition(options = {}) {
        const defaults = {
          from: { opacity: 0, y: 20 },
          to: { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        };
        
        const settings = { ...defaults, ...options };
        return {
          enter(el, done) {
            gsap.fromTo(el, settings.from, {
              ...settings.to,
              onComplete: done
            });
          },
          leave(el, done) {
            gsap.to(el, {
              opacity: 0,
              y: -20,
              duration: 0.3,
              ease: 'power2.in',
              onComplete: done
            });
          }
        };
      }
    };
    
    // 애니메이션 유틸리티 함수들을 전역으로 등록
    app.config.globalProperties.$animate = animationUtils;
    
    // 컴포지션 API를 위한 애니메이션 훅 제공
    app.provide('gsap', gsap);
    app.provide('ScrollTrigger', ScrollTrigger);
    app.provide('animate', animationUtils);
  }
};