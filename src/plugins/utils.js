/**
 * 유틸리티 함수 모음 플러그인
 * 
 * 앱 전체에서 사용할 수 있는 유틸리티 함수들을 제공합니다.
 */

const Utils = {
  /**
   * 스크롤 위치로 이동
   * @param {string} selector - 스크롤할 요소의 선택자
   * @param {Object} options - 스크롤 옵션
   */
  scrollToElement(selector, options = {}) {
    const defaults = {
      offset: 0,
      behavior: 'smooth'
    };
    
    const settings = { ...defaults, ...options };
    
    const element = document.querySelector(selector);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - settings.offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: settings.behavior
      });
    }
  },
  
  /**
   * 날짜 포맷팅
   * @param {Date|string} date - 포맷팅할 날짜
   * @param {string} format - 날짜 포맷 (예: 'YYYY-MM-DD')
   * @returns {string} 포맷팅된 날짜 문자열
   */
  formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  },
  
  /**
   * 문자열 자르기 (말줄임표 추가)
   * @param {string} text - 원본 문자열
   * @param {number} length - 최대 길이
   * @returns {string} 잘린 문자열
   */
  truncateText(text, length = 100) {
    if (!text) return '';
    if (text.length <= length) return text;
    
    return text.substring(0, length) + '...';
  },
  
  /**
   * 숫자 포맷팅 (천 단위 구분 기호)
   * @param {number} number - 포맷팅할 숫자
   * @returns {string} 포맷팅된 숫자 문자열
   */
  formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  
  /**
   * 디바운스 함수
   * @param {Function} func - 실행할 함수
   * @param {number} wait - 대기 시간 (ms)
   * @returns {Function} 디바운스 처리된 함수
   */
  debounce(func, wait = 300) {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  /**
   * 로컬 스토리지에 데이터 저장
   * @param {string} key - 스토리지 키
   * @param {*} value - 저장할 값
   */
  setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('로컬 스토리지 저장 실패:', error);
    }
  },
  
  /**
   * 로컬 스토리지에서 데이터 가져오기
   * @param {string} key - 스토리지 키
   * @param {*} defaultValue - 기본값
   * @returns {*} 저장된 값 또는 기본값
   */
  getLocalStorage(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('로컬 스토리지 불러오기 실패:', error);
      return defaultValue;
    }
  },
  
  /**
   * URL 쿼리 파라미터 가져오기
   * @param {string} name - 파라미터 이름
   * @returns {string|null} 파라미터 값
   */
  getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
};

export default {
  install(app) {
    app.config.globalProperties.$utils = Utils;
    
    // Composition API를 위한 Utils 주입
    app.provide('utils', Utils);
  }
};