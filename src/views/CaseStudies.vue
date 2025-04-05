<template>
    <div class="case-studies-page">
      <!-- 헤더 섹션 -->
      <section class="case-studies-header">
        <div class="container">
          <h1>성공 사례 연구</h1>
          <p class="subtitle">Fluid Flow Analysis System이 실제 프로젝트에서 어떻게 활용되고 있는지 확인하세요</p>
        </div>
        <div class="wave-animation"></div>
      </section>
  
      <!-- 필터 섹션 -->
      <section class="filter-section">
        <div class="container">
          <div class="filter-container">
            <div class="filter-label">산업 분야별 필터링:</div>
            <div class="filter-buttons">
              <button 
                @click="filterCategory = 'all'" 
                :class="{ active: filterCategory === 'all' }" 
                class="filter-btn"
              >전체</button>
              <button 
                @click="filterCategory = 'urban'" 
                :class="{ active: filterCategory === 'urban' }" 
                class="filter-btn"
              >도시 인프라</button>
              <button 
                @click="filterCategory = 'dam'" 
                :class="{ active: filterCategory === 'dam' }" 
                class="filter-btn"
              >댐 & 수자원</button>
              <button 
                @click="filterCategory = 'coastal'" 
                :class="{ active: filterCategory === 'coastal' }" 
                class="filter-btn"
              >연안 & 해양</button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 사례 연구 그리드 -->
      <section class="case-studies-grid">
        <div class="container">
          <div class="grid">
            <div 
              v-for="study in filteredCaseStudies" 
              :key="study.id" 
              class="case-study-card" 
              @click="selectCaseStudy(study.id)"
            >
              <div class="case-image">
                <img :src="study.image" :alt="study.title" />
                <div class="category-tag">{{ study.categoryLabel }}</div>
              </div>
              <div class="case-content">
                <h3>{{ study.title }}</h3>
                <p class="case-excerpt">{{ study.excerpt }}</p>
                <div class="case-meta">
                  <span><i class="fas fa-map-marker-alt"></i> {{ study.location }}</span>
                  <span><i class="fas fa-calendar-alt"></i> {{ study.year }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 선택된 사례 연구 상세 모달 -->
      <div v-if="selectedStudy" class="case-study-modal" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal"><i class="fas fa-times"></i></button>
          
          <div class="modal-header">
            <h2>{{ selectedStudy.title }}</h2>
            <div class="modal-meta">
              <span class="modal-category">{{ selectedStudy.categoryLabel }}</span>
              <span><i class="fas fa-map-marker-alt"></i> {{ selectedStudy.location }}</span>
              <span><i class="fas fa-calendar-alt"></i> {{ selectedStudy.year }}</span>
            </div>
          </div>
          
          <div class="modal-body">
            <div class="modal-image">
              <img :src="selectedStudy.image" :alt="selectedStudy.title" />
            </div>
            
            <div class="modal-sections">
              <div class="modal-section">
                <h3>프로젝트 개요</h3>
                <p v-html="selectedStudy.overview"></p>
              </div>
              
              <div class="modal-section">
                <h3>과제</h3>
                <p v-html="selectedStudy.challenge"></p>
              </div>
              
              <div class="modal-section">
                <h3>솔루션</h3>
                <p v-html="selectedStudy.solution"></p>
              </div>
              
              <div class="modal-section">
                <h3>결과</h3>
                <div class="results-grid">
                  <div v-for="(result, index) in selectedStudy.results" :key="index" class="result-item">
                    <div class="result-value">{{ result.value }}</div>
                    <div class="result-label">{{ result.label }}</div>
                  </div>
                </div>
                <p v-html="selectedStudy.conclusion"></p>
              </div>
              
              <div v-if="selectedStudy.testimonial" class="modal-section testimonial-section">
                <blockquote>
                  <p>{{ selectedStudy.testimonial.quote }}</p>
                  <cite>{{ selectedStudy.testimonial.author }}, {{ selectedStudy.testimonial.role }}</cite>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div class="modal-footer">
            <button class="btn primary" @click="closeModal">닫기</button>
          </div>
        </div>
      </div>
  
      <!-- CTA 섹션 -->
      <section class="cta-section">
        <div class="container">
          <h2>귀사의 프로젝트에 Fluid Flow Analysis System이 필요하신가요?</h2>
          <p>프로젝트에 맞는 최적의 솔루션을 제안해 드립니다.</p>
          <div class="cta-buttons">
            <router-link to="/contact?inquiryType=demo" class="btn primary">데모 신청</router-link>
            <router-link to="/contact" class="btn secondary">문의하기</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import caseStudyImage1 from '../assets/case-study-1.svg';
  
  export default {
    name: 'CaseStudiesPage',
    data() {
      return {
        filterCategory: 'all',
        selectedStudyId: null,
        caseStudies: [
          {
            id: 1,
            title: '서울시 강남구 침수 방지 시스템 개선',
            excerpt: '집중 호우 시 침수 방지를 위한 도시 배수 시스템의 효율성 분석 및 개선 프로젝트',
            category: 'urban',
            categoryLabel: '도시 인프라',
            location: '대한민국 서울',
            year: '2023',
            image: caseStudyImage1,
            overview: '서울시 강남구는 지형적 특성과 도시화로 인해 집중 호우 시 침수에 취약한 지역입니다. 이 프로젝트는 현재 배수 시스템의 효율성을 분석하고, 침수에 대한 취약성을 줄이기 위한 개선 방안을 도출하는 것을 목표로 진행되었습니다.',
            challenge: '강남구 지역은 높은 건물 밀도와 불투수성 표면의 증가로 인해 강우 시 빠른 유출이 발생하며, 기존 배수 시스템의 용량이 충분하지 않아 침수 위험이 큰 상황이었습니다. 특히 집중 호우 시 주요 도로와 지하 시설의 침수 방지가 중요한 과제였습니다.<br><br>기존 시스템 분석 결과, 여러 지점에서 유량 병목 현상이 확인되었으며, 예상치 못한 유수 경로가 발견되었습니다.',
            solution: 'Fluid Flow Analysis System을 활용하여 현재 배수 시스템의 3D 모델을 구축하고, 다양한 강우 시나리오에 따른 유체 흐름 시뮬레이션을 진행했습니다. 특히 다음과 같은 기능이 프로젝트에 활용되었습니다:<br><br>• 정밀한 지형 데이터 기반 3D 유체 흐름 모델링<br>• 다양한 강우 강도 및 지속 시간에 따른 시나리오 분석<br>• 병목 현상 및 취약 지점 자동 식별<br>• 개선된 배수 시스템 설계 및 효과 예측 시뮬레이션',
            results: [
              { value: '78%', label: '침수 위험 감소' },
              { value: '3.5배', label: '배수 용량 향상' },
              { value: '45억원', label: '예상 침수 피해 절감액' }
            ],
            conclusion: '시뮬레이션 결과를 바탕으로 주요 병목 지점에 추가 배수로를 설치하고, 저류 시설을 전략적으로 배치하였습니다. 개선된 시스템은 시간당 100mm 이상의 집중 호우에도 대응할 수 있는 능력을 갖추게 되었습니다. 또한 실시간 모니터링 시스템과 연계하여 강우 상황에 따른 배수 시스템 운영 최적화가 가능해졌습니다.',
            testimonial: {
              quote: "Fluid Flow Analysis System을 통해 기존에는 발견하지 못했던 유수 경로와 병목 지점을 정확히 파악할 수 있었습니다. 실제 개선 후 지난 몬순 시즌에 큰 폭우가 있었음에도 침수 피해를 획기적으로 줄일 수 있었습니다.",
              author: "김현우",
              role: "서울시 수자원관리과 과장"
            }
          }
        ]
      }
    },
    computed: {
      filteredCaseStudies() {
        if (this.filterCategory === 'all') {
          return this.caseStudies;
        }
        return this.caseStudies.filter(study => study.category === this.filterCategory);
      },
      selectedStudy() {
        if (!this.selectedStudyId) return null;
        return this.caseStudies.find(study => study.id === this.selectedStudyId);
      }
    },
    methods: {
      selectCaseStudy(id) {
        this.selectedStudyId = id;
        document.body.classList.add('modal-open');
      },
      closeModal() {
        this.selectedStudyId = null;
        document.body.classList.remove('modal-open');
      }
    },
    beforeUnmount() {
      document.body.classList.remove('modal-open');
    }
  }
  </script>
  
  <style scoped>
  .case-studies-page {
    min-height: 100vh;
  }
  
  .case-studies-header {
    background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
    color: white;
    padding: 5rem 0 6rem;
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  
  .case-studies-header h1 {
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
  
  section {
    padding: 3rem 0;
  }
  
  .filter-section {
    background-color: #f5f8fa;
    padding: 1.5rem 0;
  }
  
  .filter-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .filter-label {
    font-weight: bold;
    color: #333;
    margin-right: 1rem;
  }
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #e1f5fe;
    color: #0288d1;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .filter-btn.active {
    background-color: #0288d1;
    color: white;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .case-study-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .case-study-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .case-image {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  
  .case-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .case-study-card:hover .case-image img {
    transform: scale(1.05);
  }
  
  .category-tag {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgba(2, 136, 209, 0.8);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
  }
  
  .case-content {
    padding: 1.5rem;
  }
  
  .case-content h3 {
    margin-bottom: 0.8rem;
    color: #01579b;
    font-size: 1.3rem;
  }
  
  .case-excerpt {
    color: #555;
    margin-bottom: 1.2rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .case-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
  }
  
  .case-meta i {
    margin-right: 0.3rem;
    color: #0288d1;
  }
  
  .case-study-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 2rem;
    overflow-y: auto;
  }
  
  .modal-content {
    background-color: white;
    border-radius: 8px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #01579b;
    cursor: pointer;
    z-index: 2;
  }
  
  .modal-header {
    padding: 2rem;
    background-color: #f5f8fa;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .modal-header h2 {
    margin-bottom: 1rem;
    color: #01579b;
    font-size: 1.8rem;
  }
  
  .modal-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .modal-category {
    background-color: #0288d1;
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
  }
  
  .modal-body {
    padding: 2rem;
  }
  
  .modal-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  
  .modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal-sections {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .modal-section {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 2rem;
  }
  
  .modal-section:last-child {
    border-bottom: none;
  }
  
  .modal-section h3 {
    margin-bottom: 1rem;
    color: #01579b;
    font-size: 1.3rem;
  }
  
  .modal-section p {
    color: #555;
    line-height: 1.8;
  }
  
  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  
  .result-item {
    text-align: center;
    padding: 1.5rem;
    background-color: #f5f8fa;
    border-radius: 8px;
  }
  
  .result-value {
    font-size: 2rem;
    font-weight: bold;
    color: #0288d1;
    margin-bottom: 0.5rem;
  }
  
  .result-label {
    color: #666;
  }
  
  .testimonial-section {
    background-color: #f5f8fa;
    border-radius: 8px;
    padding: 1.5rem;
  }
  
  .testimonial-section blockquote {
    font-style: italic;
    color: #555;
    line-height: 1.8;
    position: relative;
    padding-left: 2rem;
  }
  
  .testimonial-section blockquote::before {
    content: '"';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 3rem;
    color: #0288d1;
    opacity: 0.3;
    line-height: 1;
  }
  
  .testimonial-section cite {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    font-weight: bold;
    color: #01579b;
  }
  
  .modal-footer {
    padding: 2rem;
    text-align: center;
    background-color: #f5f8fa;
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
  
  .btn.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn.secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  /* 모달이 열려있을 때 body 스크롤 방지 */
  :global(body.modal-open) {
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    .case-studies-header h1 {
      font-size: 2.2rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .grid {
      grid-template-columns: 1fr;
    }
    
    .modal-meta {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .results-grid {
      grid-template-columns: 1fr;
    }
    
    .case-study-modal {
      padding: 1rem;
    }
    
    .modal-content {
      max-height: 95vh;
    }
    
    .modal-image {
      height: 250px;
    }
  }
  </style>