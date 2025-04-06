<template>
  <div class="pricing-page">
    <section class="hero bg-primary">
      <div class="container">
        <h1>가격 정책</h1>
        <p>프로젝트 규모와 필요에 맞는 최적의 가격 플랜을 선택하세요</p>
      </div>
    </section>

    <section class="pricing-plans">
      <div class="container">
        <div class="plan-intro">
          <h2>투명한 가격 정책, 숨겨진 비용 없음</h2>
          <p>Fluid Flow는 다양한 규모의 프로젝트와 팀에 맞게 설계된 가격 플랜을 제공합니다.</p>
        </div>

        <div class="plans-container">
          <!-- 스타터 플랜 -->
          <div class="plan-card">
            <div class="plan-header">
              <h3>Starter</h3>
              <div class="price">
                <span class="amount">₩990,000</span>
                <span class="period">/ 연간</span>
              </div>
              <p class="description">소규모 팀과 프로젝트를 위한 시작 옵션</p>
            </div>
            <div class="plan-features">
              <ul>
                <li><font-awesome-icon icon="check" class="icon" /> 최대 2개 프로젝트 동시 분석</li>
                <li><font-awesome-icon icon="check" class="icon" /> 기본 유체 흐름 시뮬레이션</li>
                <li><font-awesome-icon icon="check" class="icon" /> 표준 보고서 템플릿</li>
                <li><font-awesome-icon icon="check" class="icon" /> 이메일 기술 지원</li>
                <li><font-awesome-icon icon="check" class="icon" /> 2명의 사용자 계정</li>
                <li class="not-included"><font-awesome-icon icon="times" class="icon" /> 고급 시뮬레이션 모듈</li>
                <li class="not-included"><font-awesome-icon icon="times" class="icon" /> 맞춤형 보고서</li>
              </ul>
            </div>
            <div class="plan-cta">
              <a href="#" class="btn btn-outline">자세히 알아보기</a>
              <router-link to="/contact" class="btn btn-primary">문의하기</router-link>
            </div>
          </div>

          <!-- 프로페셔널 플랜 -->
          <div class="plan-card featured">
            <div class="popular-tag">가장 인기 있는 플랜</div>
            <div class="plan-header">
              <h3>Professional</h3>
              <div class="price">
                <span class="amount">₩1,990,000</span>
                <span class="period">/ 연간</span>
              </div>
              <p class="description">중견 규모의 팀과 다양한 프로젝트를 위한 최적의 선택</p>
            </div>
            <div class="plan-features">
              <ul>
                <li><font-awesome-icon icon="check" class="icon" /> 무제한 프로젝트 분석</li>
                <li><font-awesome-icon icon="check" class="icon" /> 고급 유체 흐름 시뮬레이션</li>
                <li><font-awesome-icon icon="check" class="icon" /> 확장된 보고서 템플릿</li>
                <li><font-awesome-icon icon="check" class="icon" /> 우선 기술 지원</li>
                <li><font-awesome-icon icon="check" class="icon" /> 10명의 사용자 계정</li>
                <li><font-awesome-icon icon="check" class="icon" /> 고급 분석 모듈 (5개)</li>
                <li class="not-included"><font-awesome-icon icon="times" class="icon" /> 맞춤형 개발 지원</li>
              </ul>
            </div>
            <div class="plan-cta">
              <a href="#" class="btn btn-outline">자세히 알아보기</a>
              <router-link to="/contact" class="btn btn-primary">문의하기</router-link>
            </div>
          </div>

          <!-- 엔터프라이즈 플랜 -->
          <div class="plan-card">
            <div class="plan-header">
              <h3>Enterprise</h3>
              <div class="price">
                <span class="amount">문의</span>
                <span class="period"></span>
              </div>
              <p class="description">대규모 기업과 중요 프로젝트를 위한 완전한 솔루션</p>
            </div>
            <div class="plan-features">
              <ul>
                <li><font-awesome-icon icon="check" class="icon" /> 무제한 프로젝트 분석</li>
                <li><font-awesome-icon icon="check" class="icon" /> 모든 시뮬레이션 모듈 포함</li>
                <li><font-awesome-icon icon="check" class="icon" /> 맞춤형 보고서 생성</li>
                <li><font-awesome-icon icon="check" class="icon" /> 24/7 전담 기술 지원</li>
                <li><font-awesome-icon icon="check" class="icon" /> 무제한 사용자 계정</li>
                <li><font-awesome-icon icon="check" class="icon" /> 모든 분석 모듈 포함</li>
                <li><font-awesome-icon icon="check" class="icon" /> 맞춤형 개발 지원</li>
              </ul>
            </div>
            <div class="plan-cta">
              <a href="#" class="btn btn-outline">자세히 알아보기</a>
              <router-link to="/contact" class="btn btn-primary">문의하기</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-comparison">
      <div class="container">
        <h2>기능 비교 체크리스트</h2>
        <p class="section-intro">각 가격 정책에 포함된 기능을 비교해보세요</p>
        
        <div class="comparison-table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-name">기능</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <!-- 시뮬레이션 기능 -->
              <tr class="category-header">
                <td colspan="4">시뮬레이션 기능</td>
              </tr>
              <tr>
                <td class="feature-name">기본 유체 흐름 시뮬레이션</td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">복잡한 지형 분석</td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">다중 시나리오 비교</td>
                <td>최대 3개</td>
                <td>최대 10개</td>
                <td>무제한</td>
              </tr>
              <tr>
                <td class="feature-name">고급 난류 모델링</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">열역학 분석</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">침식 및 퇴적 시뮬레이션</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">오염물질 확산 분석</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>

              <!-- 보고서 및 데이터 분석 -->
              <tr class="category-header">
                <td colspan="4">보고서 및 데이터 분석</td>
              </tr>
              <tr>
                <td class="feature-name">기본 보고서 템플릿</td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">고급 데이터 시각화</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">맞춤형 보고서 생성</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td>제한적</td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
              <tr>
                <td class="feature-name">데이터 내보내기 형식</td>
                <td>PDF, CSV</td>
                <td>PDF, CSV, Excel</td>
                <td>모든 형식</td>
              </tr>
              <tr>
                <td class="feature-name">고해상도 렌더링</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>

              <!-- 협업 및 프로젝트 관리 -->
              <tr class="category-header">
                <td colspan="4">협업 및 프로젝트 관리</td>
              </tr>
              <tr>
                <td class="feature-name">동시 접속 사용자</td>
                <td>2명</td>
                <td>10명</td>
                <td>무제한</td>
              </tr>
              <tr>
                <td class="feature-name">프로젝트 공유 및 협업</td>
                <td>기본</td>
                <td>고급</td>
                <td>고급</td>
              </tr>
              <tr>
                <td class="feature-name">버전 관리</td>
                <td>최근 3개</td>
                <td>최근 10개</td>
                <td>무제한</td>
              </tr>
              <tr>
                <td class="feature-name">프로젝트 저장 용량</td>
                <td>10GB</td>
                <td>50GB</td>
                <td>무제한</td>
              </tr>
              <tr>
                <td class="feature-name">사용자 권한 관리</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>

              <!-- 기술 지원 및 교육 -->
              <tr class="category-header">
                <td colspan="4">기술 지원 및 교육</td>
              </tr>
              <tr>
                <td class="feature-name">기술 지원</td>
                <td>이메일</td>
                <td>이메일, 전화</td>
                <td>24/7 전담 지원</td>
              </tr>
              <tr>
                <td class="feature-name">응답 시간</td>
                <td>48시간 이내</td>
                <td>24시간 이내</td>
                <td>4시간 이내</td>
              </tr>
              <tr>
                <td class="feature-name">교육 세션</td>
                <td>온라인 자료</td>
                <td>웨비나 3회</td>
                <td>맞춤형 교육</td>
              </tr>
              <tr>
                <td class="feature-name">구현 컨설팅</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td>8시간</td>
                <td>무제한</td>
              </tr>
              <tr>
                <td class="feature-name">맞춤형 개발 지원</td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="times" class="icon-times" /></td>
                <td><font-awesome-icon icon="check" class="icon-check" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2>자주 묻는 질문</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>구독은 언제든지 업그레이드할 수 있나요?</h4>
            <p>네, 언제든지 더 높은 플랜으로 업그레이드할 수 있습니다. 남은 구독 기간에 따라 비례해서 차액만 지불하시면 됩니다.</p>
          </div>
          <div class="faq-item">
            <h4>교육 기관을 위한 특별 가격이 있나요?</h4>
            <p>네, 교육 기관을 위한 특별 할인이 제공됩니다. 자세한 내용은 영업팀에 문의해 주세요.</p>
          </div>
          <div class="faq-item">
            <h4>결제는 어떻게 이루어지나요?</h4>
            <p>신용카드, 계좌 이체 등 다양한 결제 방법을 지원합니다. 특히 기업 고객의 경우 계산서 발행도 가능합니다.</p>
          </div>
          <div class="faq-item">
            <h4>환불 정책은 어떻게 되나요?</h4>
            <p>구매 후 14일 이내에 사용에 만족하지 않으시면 전액 환불이 가능합니다. 자세한 내용은 이용약관을 참조하세요.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>아직 결정하기 어려우신가요?</h2>
        <p>무료 데모를 통해 Fluid Flow의 강력한 기능을 직접 경험해보세요.</p>
        <div class="cta-buttons">
          <a href="#" class="btn btn-large btn-white">무료 데모 신청</a>
          <router-link to="/contact" class="btn btn-large btn-outline-white">영업팀 문의</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  mounted() {
    // 페이지 로드 시 애니메이션 적용
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.pricing-page {
  /* 기본 스타일 */
}

.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

.pricing-plans {
  padding: 5rem 0;
  background-color: #f9f9f9;
}

.plan-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.plan-intro h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

.plan-intro p {
  font-size: 1.1rem;
  color: var(--text-light);
}

.plans-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.plan-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.plan-card.featured {
  transform: scale(1.05);
  border: 2px solid var(--primary-color);
  z-index: 2;
}

.plan-card.featured:hover {
  transform: translateY(-5px) scale(1.05);
}

.popular-tag {
  position: absolute;
  top: 12px;
  right: -30px;
  background: var(--primary-color);
  color: white;
  transform: rotate(45deg);
  padding: 5px 40px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.plan-header {
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.plan-header h3 {
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.price {
  margin: 1.5rem 0;
}

.amount {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.period {
  font-size: 1rem;
  color: var(--text-light);
}

.description {
  font-size: 0.9rem;
  color: var(--text-light);
  min-height: 40px;
}

.plan-features {
  padding: 2rem;
}

.plan-features ul {
  list-style: none;
  padding: 0;
}

.plan-features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
}

.plan-features .icon {
  margin-right: 10px;
  color: var(--primary-color);
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 3px;
}

.plan-features .not-included {
  color: var(--text-light);
  opacity: 0.7;
}

.plan-features .not-included .icon {
  color: #ccc;
}

.plan-cta {
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

.btn-outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background: transparent;
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
}

.faq {
  padding: 5rem 0;
  background-color: white;
}

.faq h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: var(--primary-dark);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

.faq-item h4 {
  margin-bottom: 1rem;
  color: var(--primary-dark);
  font-size: 1.1rem;
}

.faq-item p {
  color: var(--text-light);
  line-height: 1.6;
}

.cta {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.cta h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn-white {
  background-color: white;
  color: var(--primary-dark);
}

.btn-white:hover {
  background-color: #f0f0f0;
}

.btn-outline-white {
  border: 2px solid white;
  color: white;
}

.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 기능 비교 테이블 스타일 */
.features-comparison {
  padding: 5rem 0;
  background-color: white;
}

.features-comparison h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  color: var(--primary-dark);
}

.section-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: var(--text-light);
  font-size: 1.1rem;
}

.comparison-table-container {
  overflow-x: auto;
  margin: 2rem 0;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.comparison-table th {
  background-color: var(--primary-dark);
  color: white;
  font-weight: 600;
  white-space: nowrap;
}

.comparison-table th.feature-name {
  text-align: left;
}

.comparison-table .feature-name {
  text-align: left;
  font-weight: 500;
  color: var(--text-dark);
  white-space: nowrap;
}

.comparison-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.comparison-table tbody tr:hover {
  background-color: #f0f7ff;
}

.category-header {
  background-color: #e1f5fe !important;
}

.category-header td {
  text-align: left;
  font-weight: 700;
  color: var(--primary-dark);
  padding: 0.8rem 1rem;
}

.icon-check {
  color: #4CAF50;
  font-size: 1.2rem;
}

.icon-times {
  color: #ccc;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .plan-intro h2 {
    font-size: 1.8rem;
  }

  .plan-card {
    max-width: 100%;
  }

  .plan-card.featured {
    transform: none;
  }

  .plan-card.featured:hover {
    transform: translateY(-5px);
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  /* 모바일 화면에서의 비교 테이블 스타일 */
  .comparison-table-container {
    margin: 1rem -1rem;
    border-radius: 0;
    box-shadow: none;
  }
  
  .comparison-table {
    min-width: 768px;
  }
  
  .comparison-table th, 
  .comparison-table td {
    padding: 0.8rem 0.5rem;
    font-size: 0.9rem;
  }
  
  .section-intro {
    margin-bottom: 1.5rem;
  }
}
</style>