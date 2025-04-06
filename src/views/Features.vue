<template>
    <div class="features-page">
      <!-- 헤더 섹션 -->
      <section class="features-header">
        <div class="container">
          <h1>Fluid Flow Analysis System</h1>
          <p class="subtitle">첨단 유체 분석 기능의 모든 것</p>
        </div>
        <div class="wave-animation"></div>
      </section>
  
      <!-- 주요 기능 개요 섹션 -->
      <section class="features-overview">
        <div class="container">
          <h2>유체 분석을 위한 포괄적인 솔루션</h2>
          <p class="section-description">
            Fluid Flow Analysis System은 토목 엔지니어링 프로젝트를 위한 최첨단 유체 흐름 분석 도구입니다.
            정확하고 신뢰할 수 있는 결과를 제공하여 프로젝트의 효율성과 안전성을 높입니다.
          </p>
          <div class="features-grid">
            <div 
              v-for="feature in mainFeatures" 
              :key="feature.id" 
              class="feature-item"
              @click="selectFeature(feature.id)"
              :class="{ active: selectedFeature === feature.id }"
            >
              <div class="feature-icon">
                <font-awesome-icon :icon="feature.icon" />
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.shortDescription }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 선택된 기능 상세 섹션 -->
      <section class="feature-detail" v-if="selectedFeature">
        <div class="container">
          <div class="feature-detail-content">
            <div class="feature-text">
              <h2>{{ getSelectedFeature.title }}</h2>
              <p v-html="getSelectedFeature.description"></p>
              <ul class="feature-benefits">
                <li v-for="(benefit, index) in getSelectedFeature.benefits" :key="index">
                  <font-awesome-icon icon="check-circle" />
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>
            <div class="feature-image">
              <img :src="getSelectedFeature.image" :alt="getSelectedFeature.title">
            </div>
          </div>
        </div>
      </section>
  
      <!-- 기술 사양 섹션 -->
      <section class="technical-specs">
        <div class="container">
          <h2>기술 사양</h2>
          <div class="specs-grid">
            <div class="spec-card">
              <h3>시스템 요구 사항</h3>
              <ul>
                <li><strong>운영 체제:</strong> Windows 10/11, macOS 11+, Linux</li>
                <li><strong>프로세서:</strong> 최소 Intel i5 또는 AMD Ryzen 5</li>
                <li><strong>메모리:</strong> 8GB RAM (16GB 권장)</li>
                <li><strong>저장 공간:</strong> 5GB 이상의 여유 공간</li>
                <li><strong>그래픽:</strong> OpenGL 4.0 지원 그래픽 카드</li>
              </ul>
            </div>
            <div class="spec-card">
              <h3>지원 파일 형식</h3>
              <ul>
                <li><strong>입력:</strong> DWG, DXF, SHP, CSV, XYZ</li>
                <li><strong>출력:</strong> PDF, DXF, SHP, CSV, KML</li>
                <li><strong>데이터 교환:</strong> XML, JSON, GeoJSON</li>
                <li><strong>보고서:</strong> PDF, DOCX, HTML</li>
              </ul>
            </div>
            <div class="spec-card">
              <h3>성능 지표</h3>
              <ul>
                <li><strong>최대 메시 크기:</strong> 10M 요소</li>
                <li><strong>시뮬레이션 정확도:</strong> 0.01mm</li>
                <li><strong>계산 알고리즘:</strong> 병렬 처리 지원</li>
                <li><strong>최적화 기능:</strong> 자동 메시 최적화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 비교 표 섹션 -->
      <section class="comparison">
        <div class="container">
          <h2>경쟁 제품 비교</h2>
          <p class="section-description">Fluid Flow Analysis System이 다른 솔루션과 어떻게 다른지 확인하세요.</p>
          
          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>기능</th>
                  <th>Fluid Flow System</th>
                  <th>경쟁사 A</th>
                  <th>경쟁사 B</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in comparisonItems" :key="index">
                  <td>{{ item.feature }}</td>
                  <td>
                    <span class="check" v-if="item.fluidFlow"><font-awesome-icon :icon="['fas', 'check']" /></span>
                    <span class="cross" v-else><font-awesome-icon :icon="['fas', 'times']" /></span>
                  </td>
                  <td>
                    <span class="check" v-if="item.competitorA"><font-awesome-icon :icon="['fas', 'check']" /></span>
                    <span class="cross" v-else><font-awesome-icon :icon="['fas', 'times']" /></span>
                  </td>
                  <td>
                    <span class="check" v-if="item.competitorB"><font-awesome-icon :icon="['fas', 'check']" /></span>
                    <span class="cross" v-else><font-awesome-icon :icon="['fas', 'times']" /></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  
      <!-- CTA 섹션 -->
      <section class="cta-section">
        <div class="container">
          <h2>지금 바로 Fluid Flow Analysis System을 시작하세요</h2>
          <p>프로젝트의 효율성과 정확성을 높이는 최고의 선택</p>
          <div class="cta-buttons">
            <router-link to="/contact?inquiryType=demo" class="btn primary">데모 신청</router-link>
            <router-link to="/features" class="btn secondary">더 알아보기</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import featureSimulation from '../assets/feature-simulation.svg'
import featureUi from '../assets/feature-ui.svg'
import featureAnalysis from '../assets/feature-analysis.svg'
import featureCollaboration from '../assets/feature-collaboration.svg'
import featureModules from '../assets/feature-modules.svg'
import featureReports from '../assets/feature-reports.svg'
  
  export default {
    name: 'FeaturesPage',
    data() {
      return {
        selectedFeature: 1, // 기본적으로 첫 번째 기능 선택
        mainFeatures: [
          {
            id: 1,
            title: '정밀한 유체 흐름 시뮬레이션',
            icon: ['fas', 'chart-line'],
            shortDescription: '고급 수치 모델을 활용한 정확한 유체 거동 예측',
            description: '첨단 수치 모델과 계산 알고리즘을 활용하여 실제와 거의 동일한 정확도로 유체 흐름을 시뮬레이션합니다. 복잡한 지형과 다양한 흐름 조건에서도 정확한 결과를 제공합니다.',
            benefits: [
              '나비에-스톡스 방정식 기반 정확한 시뮬레이션',
              '난류 모델링 및 층류 시뮬레이션 지원',
              '다양한 경계 조건 설정 가능',
              '실시간 결과 시각화 및 분석'
            ],
            image: featureSimulation
          },
          {
            id: 2,
            title: '직관적인 사용자 인터페이스',
            icon: ['fas', 'desktop'],
            shortDescription: '복잡한 작업을 쉽게 수행할 수 있는 사용자 친화적 디자인',
            description: '엔지니어와 설계자를 위해 특별히 설계된 인터페이스는 복잡한 분석 작업을 단순화합니다. 직관적인 워크플로우와 명확한 시각적 피드백으로 학습 곡선을 최소화합니다.',
            benefits: [
              '사용자 맞춤형 작업 환경 설정',
              '드래그 앤 드롭 방식의 직관적 모델링',
              '상황에 맞는 도움말 및 가이드',
              '프로젝트 관리 및 작업 히스토리 추적'
            ],
            image: featureUi
          },
          {
            id: 3,
            title: '고급 데이터 분석',
            icon: ['fas', 'database'],
            shortDescription: '시뮬레이션 결과에 대한 포괄적인 분석 도구',
            description: '내장된 고급 분석 도구로 시뮬레이션 결과를 심층적으로 분석할 수 있습니다. 다양한 시각화 옵션과 통계 도구를 통해 데이터에서 의미 있는 통찰력을 얻을 수 있습니다.',
            benefits: [
              '다양한 통계 및 데이터 마이닝 기능',
              '맞춤형 보고서 생성 및 내보내기',
              '시계열 분석 및 패턴 인식',
              '변수 간 상관관계 분석'
            ],
            image: featureAnalysis
          },
          {
            id: 4,
            title: '협업 및 공유 기능',
            icon: ['fas', 'users'],
            shortDescription: '팀 작업을 위한 효율적인 협업 도구',
            description: '분산된 팀 간의 원활한 협업을 지원합니다. 실시간 변경 추적, 주석 및 의견 공유, 버전 관리 등 다양한 협업 기능을 제공합니다.',
            benefits: [
              '실시간 프로젝트 공유 및 협업',
              '역할 기반 접근 제어 및 권한 관리',
              '변경 내역 추적 및 버전 관리',
              '클라우드 기반 데이터 접근 및 동기화'
            ],
            image: featureCollaboration
          },
          {
            id: 5,
            title: '확장 가능한 모듈 시스템',
            icon: ['fas', 'puzzle-piece'],
            shortDescription: '필요에 따라 확장 가능한 유연한 시스템 구조',
            description: '모듈식 아키텍처를 통해 필요에 따라 시스템을 확장할 수 있습니다. 특수 분석 모듈, 산업별 특화 도구, 커스텀 워크플로우 등을 추가할 수 있습니다.',
            benefits: [
              '산업별 특화 모듈 지원',
              '사용자 정의 스크립트 및 자동화',
              'API를 통한 외부 시스템 연동',
              '지속적인 업데이트 및 신기능 추가'
            ],
            image: featureModules
          },
          {
            id: 6,
            title: '종합적인 보고서 생성',
            icon: ['fas', 'file-alt'],
            shortDescription: '전문적인 보고서를 쉽게 작성하고 공유',
            description: '시뮬레이션 결과를 바탕으로 포괄적이고 전문적인 보고서를 자동으로 생성합니다. 다양한 템플릿과 사용자 정의 옵션으로 요구에 맞는 보고서를 작성할 수 있습니다.',
            benefits: [
              '다양한 형식의 보고서 템플릿',
              '맞춤형 차트 및 그래프 생성',
              '전문적인 문서 레이아웃 및 디자인',
              '자동화된 보고서 갱신 및 배포'
            ],
            image: featureReports
          }
        ],
        comparisonItems: [
          { feature: '3D 유체 시뮬레이션', fluidFlow: true, competitorA: true, competitorB: true },
          { feature: '실시간 결과 시각화', fluidFlow: true, competitorA: true, competitorB: false },
          { feature: '다중 물리 연동 분석', fluidFlow: true, competitorA: false, competitorB: false },
          { feature: '클라우드 기반 협업', fluidFlow: true, competitorA: false, competitorB: true },
          { feature: '자동화된 메시 생성', fluidFlow: true, competitorA: true, competitorB: true },
          { feature: '사용자 정의 스크립팅', fluidFlow: true, competitorA: false, competitorB: false },
          { feature: '모바일 접근성', fluidFlow: true, competitorA: false, competitorB: true },
          { feature: '자동 보고서 생성', fluidFlow: true, competitorA: true, competitorB: false },
          { feature: 'GIS 시스템 통합', fluidFlow: true, competitorA: true, competitorB: false }
        ]
      }
    },
    computed: {
      getSelectedFeature() {
        return this.mainFeatures.find(feature => feature.id === this.selectedFeature) || this.mainFeatures[0];
      }
    },
    methods: {
      selectFeature(id) {
        this.selectedFeature = id;
        // 스크롤 위치 조정
        this.$nextTick(() => {
          const detailSection = document.querySelector('.feature-detail');
          if (detailSection) {
            window.scrollTo({
              top: detailSection.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .features-page {
    min-height: 100vh;
  }
  
  .features-header {
    background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
    color: white;
    padding: 5rem 0 6rem;
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  
  .features-header h1 {
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
    padding: 5rem 0;
  }
  
  section:nth-child(even) {
    background-color: #f5f8fa;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #01579b;
    text-align: center;
  }
  
  .section-description {
    font-size: 1.2rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
  }
  
  .features-overview {
    padding-bottom: 3rem;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .feature-item {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  
  .feature-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #29b6f6, #0288d1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .feature-item:hover, .feature-item.active {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .feature-item:hover::before, .feature-item.active::before {
    opacity: 1;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #29b6f6 0%, #0288d1 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.5rem;
  }
  
  .feature-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .feature-item h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #01579b;
  }
  
  .feature-item p {
    color: #555;
    line-height: 1.6;
  }
  
  .feature-detail {
    padding: 5rem 0;
    background-color: #f5f8fa;
  }
  
  .feature-detail-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
  }
  
  .feature-text {
    flex: 1;
    min-width: 300px;
  }
  
  .feature-text h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  .feature-text p {
    margin-bottom: 1.5rem;
    color: #555;
    line-height: 1.8;
  }
  
  .feature-benefits {
    list-style: none;
    padding: 0;
  }
  
  .feature-benefits li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .feature-benefits i {
    color: #0288d1;
    margin-right: 0.5rem;
  }
  
  .feature-image {
    flex: 1;
    min-width: 300px;
    max-width: 600px;
  }
  
  .feature-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
  
  .technical-specs {
    background-color: white;
  }
  
  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .spec-card {
    background-color: #f5f8fa;
    border-radius: 8px;
    padding: 2rem;
    height: 100%;
  }
  
  .spec-card h3 {
    color: #01579b;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e1f5fe;
  }
  
  .spec-card ul {
    list-style: none;
    padding: 0;
  }
  
  .spec-card li {
    margin-bottom: 1rem;
    color: #444;
  }
  
  .spec-card strong {
    color: #01579b;
  }
  
  .comparison {
    background-color: #f5f8fa;
  }
  
  .table-container {
    overflow-x: auto;
    margin-top: 2rem;
  }
  
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .comparison-table th, .comparison-table td {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .comparison-table th {
    background-color: #01579b;
    color: white;
    font-weight: 600;
  }
  
  .comparison-table th:first-child {
    text-align: left;
  }
  
  .comparison-table td:first-child {
    text-align: left;
    font-weight: 500;
    color: #333;
  }
  
  .comparison-table tr:last-child td {
    border-bottom: none;
  }
  
  .comparison-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .check {
    color: #4caf50;
    font-size: 1.2rem;
  }
  
  .cross {
    color: #f44336;
    font-size: 1.2rem;
  }
  
  .cta-section {
    background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
    color: white;
    text-align: center;
    padding: 5rem 0;
  }
  
  .cta-section h2 {
    color: white;
    margin-bottom: 1rem;
  }
  
  .cta-section p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
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
    font-size: 1rem;
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
  
  @media (max-width: 768px) {
    .features-header h1 {
      font-size: 2.2rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .feature-detail-content {
      flex-direction: column;
    }
    
    .feature-image {
      order: -1;
    }
  }
  </style>