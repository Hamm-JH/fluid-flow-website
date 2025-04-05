<template>
  <div class="faq-page">
    <!-- 헤더 섹션 -->
    <section class="faq-header">
      <div class="container">
        <h1>자주 묻는 질문</h1>
        <p class="subtitle">Fluid Flow Analysis System에 대한 자주 묻는 질문들을 모았습니다.</p>
      </div>
      <div class="wave-animation"></div>
    </section>

    <!-- FAQ 섹션 -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-container">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div 
              class="faq-question" 
              :class="{ 'active': faq.isOpen }"
              @click="toggleFaq(index)"
            >
              {{ faq.question }}
              <i class="fas" :class="faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="cta-section">
      <div class="container">
        <h2>더 궁금한 점이 있으신가요?</h2>
        <p>문의하기 페이지를 통해 질문을 보내주시면 빠르게 답변해 드립니다.</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="btn primary">문의하기</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQPage',
  data() {
    return {
      faqs: [
        {
          question: '데모 신청은 어떻게 하나요?',
          answer: '데모 신청은 문의 양식을 통해 할 수 있습니다. "문의 유형"에서 "데모 신청"을 선택하고 필요한 정보를 입력해주세요. 담당자가 확인 후 24시간 이내에 연락드립니다.',
          isOpen: false
        },
        {
          question: '제품 가격은 어떻게 되나요?',
          answer: 'Fluid Flow Analysis System은 기본 패키지와 추가 모듈 형태로 제공됩니다. 정확한 가격은 귀사의 요구사항과 사용 규모에 따라 달라질 수 있습니다. 자세한 가격 정보는 영업팀에 문의해 주시기 바랍니다.',
          isOpen: false
        },
        {
          question: '기술 지원은 어떻게 받을 수 있나요?',
          answer: '기술 지원은 이메일(support@fluidflowsystem.com)이나 전화(02-1234-5678)로 문의하실 수 있습니다. 또한 정기적인 소프트웨어 업데이트와 온라인 지식 베이스도 제공합니다.',
          isOpen: false
        },
        {
          question: '교육 및 트레이닝 프로그램이 있나요?',
          answer: '네, 정기적인 온라인 및 오프라인 교육 프로그램을 제공합니다. 기본 사용법부터 고급 기능 활용까지 다양한 수준의 트레이닝을 제공하며, 사용자 그룹별 맞춤 교육도 가능합니다.',
          isOpen: false
        },
        {
          question: '다른 시스템과의 통합이 가능한가요?',
          answer: 'Fluid Flow Analysis System은 표준 CAD 시스템, GIS 도구, 데이터베이스 등 다양한 외부 시스템과의 통합을 지원합니다. API를 통한 커스텀 통합도 가능하니 자세한 내용은 기술 지원팀에 문의해 주세요.',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
      });
    }
  }
}
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
}

.faq-header {
  background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
  color: white;
  padding: 5rem 0 6rem;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.faq-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
}

.wave-animation {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('../assets/wave.svg') repeat-x;
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

.faq-section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  padding: 1.2rem;
  background-color: white;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: #f9f9f9;
}

.faq-question.active {
  color: #0288d1;
  background-color: #e1f5fe;
}

.faq-question i {
  transition: transform 0.3s;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: white;
}

.faq-answer.open {
  max-height: 500px;
}

.faq-answer p {
  padding: 1.2rem;
  margin: 0;
  color: #555;
  border-top: 1px solid #e0e0e0;
}

.cta-section {
  background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
  color: white;
  text-align: center;
  padding: 5rem 0;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.btn.primary {
  background-color: white;
  color: #0288d1;
  border: none;
}

.btn.primary:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .faq-header h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .faq-question {
    padding: 1rem;
    font-size: 0.95rem;
  }
  
  .faq-answer p {
    padding: 1rem;
    font-size: 0.95rem;
  }
}
</style>