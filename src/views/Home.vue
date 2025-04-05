<template>
    <div class="home">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Fluid Flow Analysis System</h1>
            <p class="subtitle">토목 엔지니어링을 위한 최첨단 유체 흐름 분석 솔루션</p>
            <div class="cta-buttons">
              <router-link to="/contact?inquiryType=demo" class="btn primary">데모 신청</router-link>
              <router-link to="/features" class="btn secondary">자세히 알아보기</router-link>
            </div>
          </div>
          <div class="hero-image">
            <img src="@/assets/hero-image.png" alt="Fluid Flow Analysis System 인터페이스" />
          </div>
        </div>
        <!-- 물결 효과 애니메이션 배경 -->
        <div class="wave-animation"></div>
      </section>
  
      <!-- 주요 기능 섹션 -->
      <section class="features">
        <div class="container">
          <h2>주요 기능</h2>
          <div class="features-grid">
            <FeatureCard 
              v-for="feature in features" 
              :key="feature.id"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
            />
          </div>
        </div>
      </section>
  
      <!-- 사용 사례 섹션 -->
      <section class="use-cases">
        <div class="container">
          <h2>적용 분야</h2>
          <div class="use-cases-slider">
            <div v-for="(useCase, index) in useCases" :key="index" class="use-case-slide">
              <img :src="useCase.image" :alt="useCase.title" />
              <h3>{{ useCase.title }}</h3>
              <p>{{ useCase.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 고객 후기 섹션 -->
      <section class="testimonials">
        <div class="container">
          <h2>고객 후기</h2>
          <TestimonialSlider :testimonials="testimonials" />
        </div>
      </section>
  
      <!-- 문의 섹션 -->
      <section class="contact">
        <div class="container">
          <h2>지금 바로 시작하세요</h2>
          <p>Fluid Flow Analysis System에 대해 더 알아보고 싶으신가요?</p>
          <router-link to="/contact" class="btn primary large">문의하기</router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import FeatureCard from '@/components/FeatureCard.vue';
  import TestimonialSlider from '@/components/TestimonialSlider.vue';
  
  export default {
    name: 'HomePage',
    components: {
      FeatureCard,
      TestimonialSlider
    },
    data() {
      return {
        features: [
          {
            id: 1,
            title: '정확한 유체 흐름 분석',
            description: '첨단 알고리즘을 활용한 정밀한 유체 흐름 분석으로 프로젝트의 정확도를 높입니다.',
            icon: 'chart-line'
          },
          {
            id: 2,
            title: '직관적인 CAD 인터페이스',
            description: '엔지니어를 위해 설계된 사용하기 쉬운 인터페이스로 복잡한 모델링을 간소화합니다.',
            icon: 'desktop'
          },
          {
            id: 3,
            title: '실시간 시뮬레이션',
            description: '변수 조정에 따른 결과를 실시간으로 확인하여 의사 결정 시간을 단축합니다.',
            icon: 'clock'
          },
          {
            id: 4,
            title: '다양한 출력 형식',
            description: '다양한 형식의 보고서와 데이터 내보내기 옵션으로 팀과의 협업을 원활하게 합니다.',
            icon: 'file-export'
          }
        ],
        useCases: [
          {
            title: '도시 배수 시스템',
            description: '도시 배수 인프라의 효율성을 분석하고 최적화합니다.',
            image: '@/assets/use-case-1.jpg'
          },
          {
            title: '댐 및 수로 설계',
            description: '댐과 수로 시스템의 안정성과 효율성을 향상시킵니다.',
            image: '@/assets/use-case-2.jpg'
          },
          {
            title: '연안 구조물',
            description: '파도와 조류에 대한 연안 구조물의 영향을 예측합니다.',
            image: '@/assets/use-case-3.jpg'
          }
        ],
        testimonials: [
          {
            name: '김현우',
            company: '대한토목엔지니어링',
            quote: 'Fluid Flow Analysis System은 우리 프로젝트의 정확도를 크게 향상시켰습니다. 직관적인 인터페이스와 정확한 분석 결과에 매우 만족합니다.',
            avatar: '@/assets/avatar-1.jpg'
          },
          {
            name: '이지원',
            company: '한국수자원공사',
            quote: '복잡한 수자원 프로젝트에서 이 시스템의 시뮬레이션 기능은 정말 놀랍습니다. 시간과 비용을 크게 절약할 수 있었습니다.',
            avatar: '@/assets/avatar-2.jpg'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
    color: white;
    padding: 6rem 0;
    overflow: hidden;
  }
  
  .hero-content {
    max-width: 50%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn.primary {
    background-color: white;
    color: #0288d1;
    border: none;
  }
  
  .btn.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn.large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
  
  .hero-image {
    max-width: 50%;
  }
  
  .hero-image img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .wave-animation {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url('@/assets/wave.svg') repeat-x;
    background-size: 1000px 100px;
    animation: wave 20s linear infinite;
  }
  
  @keyframes wave {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  
  section {
    padding: 5rem 0;
  }
  
  .features, .use-cases, .testimonials, .contact {
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #01579b;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .use-cases-slider {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 1rem 0;
    scroll-snap-type: x mandatory;
  }
  
  .use-case-slide {
    flex: 0 0 auto;
    width: 300px;
    scroll-snap-align: start;
    background-color: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .use-case-slide img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .use-case-slide h3 {
    margin: 1rem;
    color: #01579b;
  }
  
  .use-case-slide p {
    margin: 0 1rem 1rem;
    color: #555;
  }
  
  .contact {
    background-color: #e1f5fe;
    padding: 4rem 0;
  }
  
  .contact p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    .hero {
      padding: 4rem 0;
    }
    
    .hero-content, .hero-image {
      max-width: 100%;
    }
    
    .hero h1 {
      font-size: 2.2rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>