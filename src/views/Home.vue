<template>
  <div class="home">
    <transition :appear="true" v-bind="$animate.pageTransition()">
      <div class="home-content">
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
        <div class="container section-container">
          <div class="section-header">
            <h2>주요 기능</h2>
          </div>
          <div class="features-grid">
            <FeatureCard 
              v-for="feature in features" 
              :key="feature.id"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
              class="feature-card-item"
            />
          </div>
        </div>
      </section>
  
      <!-- 사용 사례 섹션 -->
      <section class="use-cases">
        <div class="container section-container">
          <div class="section-header">
            <h2>적용 분야</h2>
          </div>
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
        <div class="container section-container">
          <div class="section-header">
            <h2>고객 후기</h2>
          </div>
          <TestimonialSlider :testimonials="testimonials" />
        </div>
      </section>
  
      <!-- 문의 섹션 -->
      <section class="contact">
        <div class="container section-container">
          <div class="section-header">
            <h2>지금 바로 시작하세요</h2>
          </div>
          <p>Fluid Flow Analysis System에 대해 더 알아보고 싶으신가요?</p>
          <router-link to="/contact" class="btn primary large">문의하기</router-link>
        </div>
      </section>
      </div>
    </transition>
  </div>
</template>
  
<script>
import FeatureCard from '@/components/FeatureCard.vue';
import TestimonialSlider from '@/components/TestimonialSlider.vue';

// 모델 가져오기
import FeatureModel from '@/models/FeatureModel';
import UseCaseModel from '@/models/UseCaseModel';
import TestimonialModel from '@/models/TestimonialModel';
  
export default {
  name: 'HomePage',
  components: {
    FeatureCard,
    TestimonialSlider
  },
  data() {
    return {
      features: FeatureModel.getFeatures(),
      useCases: UseCaseModel.getUseCases(),
      testimonials: TestimonialModel.getTestimonials()
    }
  },
  mounted() {
    // Hero 섹션 애니메이션
    this.$animate.fadeIn('.hero-content', {
      delay: 0.2,
      stagger: 0.2
    });
    
    this.$animate.fadeIn('.hero-image', {
      delay: 0.5,
      x: 30
    });
    
    // 스크롤 애니메이션
    this.$animate.revealOnScroll('.features-grid .feature-card', {
      stagger: 0.15
    });
    
    this.$animate.revealOnScroll('.use-case-slide', {
      stagger: 0.2,
      scale: 0.95
    });
    
    this.$animate.revealOnScroll('.testimonial-slider', {
      delay: 0.2
    });
  }
}
</script>
  
<style scoped>
.home-content {
  width: 100%;
}

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

.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.section-header:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #29b6f6, #0288d1);
  border-radius: 3px;
}

.features .features-grid,
.use-cases .use-cases-slider,
.testimonials .testimonial-slider,
.contact p {
  margin-top: 2rem;
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
  color: #01579b;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
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

.feature-card-item {
  margin-bottom: 1rem;
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
}

@media (max-width: 860px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>