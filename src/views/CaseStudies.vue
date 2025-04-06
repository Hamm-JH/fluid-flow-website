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
import featureSimulationImage from '../assets/feature-simulation.svg';
import featureAnalysisImage from '../assets/feature-analysis.svg';
import featureReportsImage from '../assets/feature-reports.svg';
  
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
          },
          {
            id: 2,
            title: '부산 신항만 해류 영향 분석 및 방파제 최적화',
            excerpt: '해류 패턴 분석을 통한 부산 신항만 방파제 설계 최적화 및 항만 내 침전물 감소 프로젝트',
            category: 'coastal',
            categoryLabel: '연안 & 해양',
            location: '대한민국 부산',
            year: '2024',
            image: featureSimulationImage,
            overview: '부산 신항만 확장 프로젝트에서 해류 패턴이 항만 구조물과 선박 운항에 미치는 영향을 분석하고, 최적의 방파제 설계안을 도출하는 프로젝트를 수행했습니다. 특히 항만 내 침전물 축적을 최소화하고 선박의 안전한 접안을 보장하는 데 중점을 두었습니다.',
            challenge: '부산 신항만은 복잡한 해류 패턴과 계절적 조건 변화로 인해 기존 방파제 설계안으로는 항만 내 침전물 누적과 선박 접안 시 난류 발생 문제가 예상되었습니다. 또한 해류 변화에 따른 주변 연안 지역의 침식 위험성도 고려해야 했습니다.<br><br>다양한 계절별 해류 조건과 극한 기상 상황(태풍 등)에 대한 시뮬레이션이 필요했으며, 이를 바탕으로 최적의 방파제 형태와 배치를 설계해야 했습니다.',
            solution: 'Fluid Flow Analysis System을 사용하여 다음과 같은 접근 방식으로 문제를 해결했습니다:<br><br>• 정밀한 해저 지형 데이터 기반 3D 해류 모델링<br>• 계절별 및 극한 기상 조건에 따른 다양한 시나리오 시뮬레이션<br>• 방파제 형태와 길이, 각도에 따른 해류 패턴 변화 분석<br>• 항만 내 침전물 누적 예측 및 최소화 설계<br>• 선박 접안 시 안전성을 고려한 항만 내부 난류 시뮬레이션',
            results: [
              { value: '68%', label: '침전물 축적 감소' },
              { value: '42%', label: '유지보수 비용 절감' },
              { value: '35%', label: '선박 접안 안정성 향상' }
            ],
            conclusion: '시뮬레이션 결과를 바탕으로 곡선형 방파제 설계와 수중 구조물 배치를 최적화하였습니다. 이를 통해 항만 내 침전물 축적을 크게 줄이고, 선박 접안 시 안정성을 향상시켰습니다. 또한 연간 준설 비용을 42% 절감할 수 있었으며, 극한 기상 조건에서도 항만의 안전성을 확보할 수 있게 되었습니다.',
            testimonial: {
              quote: "Fluid Flow Analysis System의 정밀한 해류 시뮬레이션을 통해 기존 설계에서는 예측하지 못했던 문제점들을 사전에 발견하고 해결할 수 있었습니다. 특히 침전물 축적 패턴 예측은 장기적인 항만 운영 비용 절감에 큰 도움이 되었습니다.",
              author: "박지민",
              role: "부산항만공사 기술이사"
            }
          },
          {
            id: 3,
            title: '화성 다목적댐 수리학적 최적화 연구',
            excerpt: '기후변화에 대응하는 다목적댐의 수리학적 효율성 개선 및 방류 전략 최적화 프로젝트',
            category: 'dam',
            categoryLabel: '댐 & 수자원',
            location: '대한민국 경기도',
            year: '2023',
            image: featureAnalysisImage,
            overview: '경기도 화성시에 건설된 다목적댐의 수리학적 효율성을 분석하고 기후변화로 인한 강우 패턴 변화에 대응하기 위한 최적 운영 전략을 수립하는 프로젝트입니다. 홍수 조절, 용수 공급, 수력 발전의 다양한 용도를 균형있게 만족시키는 데 중점을 두었습니다.',
            challenge: '기후변화로 인해 극한 강우 사상의 빈도와 강도가 증가하면서 기존 댐 운영 방식으로는 홍수 조절과 안정적인 용수 공급 사이의 균형을 맞추기 어려운 상황이었습니다. 특히 계절적 강우 집중과 장기간 가뭄의 반복으로 댐 수위 관리가 복잡해졌습니다.<br><br>홍수기와 갈수기에 따른 최적 방류량 결정과 댐 상하류 수리학적 영향 분석이 필요했으며, 장기적인 기후변화 시나리오에 대응할 수 있는 운영 전략이 요구되었습니다.',
            solution: 'Fluid Flow Analysis System을 활용하여 다음과 같은 접근법으로 문제를 해결했습니다:<br><br>• 3차원 수리학적 모델링을 통한 댐 방류 영향 분석<br>• 다양한 기후변화 시나리오에 따른 최적 운영 규칙 도출<br>• 홍수기/갈수기 댐 수위 운영 패턴 최적화<br>• 방류량에 따른 하류 지역 영향 예측 시뮬레이션<br>• 실시간 수문 데이터와 연동한 적응형 운영 시스템 설계',
            results: [
              { value: '52%', label: '홍수 대응 능력 향상' },
              { value: '27%', label: '용수 공급 안정성 개선' },
              { value: '18%', label: '수력 발전량 증가' }
            ],
            conclusion: '시뮬레이션 결과를 바탕으로 계절별, 상황별 최적 댐 운영 규칙을 수립하고 다양한 기후변화 시나리오에 대응할 수 있는 적응형 운영 시스템을 구축했습니다. 이를 통해 홍수 대응 능력은 52% 향상되었으며, 갈수기 용수 공급 안정성이 27% 개선되었습니다. 또한 최적화된 방류 전략을 통해 수력 발전량도 18% 증가시켰습니다.',
            testimonial: {
              quote: "Fluid Flow Analysis System을 활용한 다양한 시나리오 시뮬레이션은 기후변화 시대에 댐 운영의 불확실성을 크게 줄여주었습니다. 특히 극한 강우 사상에 대한 대응 능력이 획기적으로 향상되어 하류 지역 주민들의 안전을 보다 효과적으로 보장할 수 있게 되었습니다.",
              author: "이수진",
              role: "한국수자원공사 기후변화대응팀 팀장"
            }
          },
          {
            id: 4,
            title: '제주 해양 풍력 발전 단지 최적 배치 연구',
            excerpt: '해류와 바람 패턴 분석을 통한 해상 풍력 발전기 최적 배치 및 구조적 안정성 향상 프로젝트',
            category: 'coastal',
            categoryLabel: '연안 & 해양',
            location: '대한민국 제주',
            year: '2024',
            image: featureReportsImage,
            overview: '제주 해상에 대규모 풍력 발전 단지를 구축하기 위한 최적 위치 선정과 발전기 배치 연구 프로젝트입니다. 해류와 바람의 복합적 영향을 분석하여 발전 효율을 극대화하고 구조물의 안정성을 확보하는 데 중점을 두었습니다.',
            challenge: '제주 해상은 복잡한 해류 패턴과 계절에 따른 바람 변화가 있어 풍력 발전기의 최적 배치와 구조적 안정성 확보가 중요한 과제였습니다. 특히 태풍 등 극한 기상 조건에서의 안전성과 발전기 간 후류(wake) 효과로 인한 효율 손실 최소화가 필요했습니다.<br><br>해상 구조물 기초에 작용하는 복합적인 유체 하중(파도, 해류, 바람)의 정밀한 분석과 장기적인 해저 지형 변화 예측도 중요한 과제였습니다.',
            solution: 'Fluid Flow Analysis System을 활용하여 다음과 같은 방법으로 문제를 해결했습니다:<br><br>• 해류-대기 복합 유체 모델링을 통한 통합 시뮬레이션<br>• 발전기 간 후류 영향 분석 및 최적 이격 거리 도출<br>• 다양한 기상 조건에 따른 구조적 하중 시뮬레이션<br>• 해저 지형 변화가 구조물 안정성에 미치는 장기적 영향 예측<br>• 발전 효율과 구조적 안정성의 균형을 고려한 최적 배치 설계',
            results: [
              { value: '23%', label: '발전 효율 향상' },
              { value: '45%', label: '구조적 안정성 개선' },
              { value: '15년', label: '예상 수명 연장 효과' }
            ],
            conclusion: '시뮬레이션 결과를 바탕으로 발전기 간 최적 이격 거리와 배치 패턴을 결정하고, 해류와 바람의 복합적 영향을 고려한 구조물 기초 설계를 최적화했습니다. 이를 통해 발전 효율은 23% 향상되었으며, 극한 기상 조건에서의 구조적 안정성이 45% 개선되었습니다. 또한 최적화된 설계로 발전기의 예상 수명이 기존 대비 15년 연장되는 효과를 얻었습니다.',
            testimonial: {
              quote: "Fluid Flow Analysis System의 정밀한 해류-대기 통합 시뮬레이션을 통해 기존의 개별적 분석 방식으로는 발견하기 어려웠던 최적 배치 패턴을 도출할 수 있었습니다. 특히 구조물에 작용하는 복합적 유체 하중의 분석은 장기적인 안정성 확보에 결정적인 역할을 했습니다.",
              author: "강태윤",
              role: "제주해상풍력 기술연구소 소장"
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