<template>
  <div class="contact-page">
    <!-- 헤더 섹션 -->
    <section class="contact-header">
      <div class="container">
        <h1>문의하기</h1>
        <p class="subtitle">궁금한 점이 있으신가요? 저희에게 연락주세요.</p>
      </div>
      <div class="wave-animation"></div>
    </section>

    <!-- 문의 폼 및 정보 섹션 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-form-container">
            <h2>메시지 보내기</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">이름 <span class="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required 
                  placeholder="이름을 입력하세요"
                  :class="{ 'error': errors.name }"
                >
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
              
              <div class="form-group">
                <label for="company">회사명</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="formData.company" 
                  placeholder="회사명을 입력하세요"
                >
              </div>
              
              <div class="form-group">
                <label for="email">이메일 <span class="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required 
                  placeholder="이메일을 입력하세요"
                  :class="{ 'error': errors.email }"
                >
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>
              
              <div class="form-group">
                <label for="phone">전화번호</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone" 
                  placeholder="전화번호를 입력하세요"
                >
              </div>
              
              <div class="form-group">
                <label for="inquiry">문의 유형 <span class="required">*</span></label>
                <select 
                  id="inquiry" 
                  v-model="formData.inquiryType" 
                  required
                  :class="{ 'error': errors.inquiryType }"
                >
                  <option value="" disabled selected>문의 유형을 선택하세요</option>
                  <option value="demo">데모 신청</option>
                  <option value="sales">제품 구매 문의</option>
                  <option value="technical">기술 지원</option>
                  <option value="partnership">제휴 문의</option>
                  <option value="other">기타</option>
                </select>
                <span class="error-message" v-if="errors.inquiryType">{{ errors.inquiryType }}</span>
              </div>
              
              <div class="form-group">
                <label for="message">메시지 <span class="required">*</span></label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  required 
                  rows="5" 
                  placeholder="문의 내용을 입력하세요"
                  :class="{ 'error': errors.message }"
                ></textarea>
                <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
              </div>

              <div class="form-group checkbox-group">
                <input type="checkbox" id="privacy" v-model="formData.privacyAgreed" required>
                <label for="privacy" class="checkbox-label">
                  개인정보 수집 및 이용에 동의합니다. <span class="required">*</span>
                  <span class="privacy-policy" @click="showPrivacyPolicy = true">개인정보처리방침</span>
                </label>
                <span class="error-message" v-if="errors.privacyAgreed">{{ errors.privacyAgreed }}</span>
              </div>
              
              <button type="submit" class="btn primary submit-btn" :disabled="loading">
                <span v-if="!loading">전송하기</span>
                <span v-else class="loading-spinner"></span>
              </button>
              
              <div class="form-success" v-if="submitted">
                메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.
              </div>
            </form>
          </div>
          
          <div class="contact-info">
            <h2>문의 정보</h2>
            <p>아래 연락처로도 문의하실 수 있습니다.</p>
            
            <div class="info-item">
              <div class="icon">
                <font-awesome-icon icon="phone-alt" />
              </div>
              <div class="details">
                <h3>전화</h3>
                <p>02-1234-5678</p>
                <p class="sub-info">평일 9:00 - 18:00</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="icon">
                <font-awesome-icon icon="envelope" />
              </div>
              <div class="details">
                <h3>이메일</h3>
                <p>info@fluidflowsystem.com</p>
                <p class="sub-info">24시간 이내 답변</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="icon">
                <font-awesome-icon icon="map-marker-alt" />
              </div>
              <div class="details">
                <h3>주소</h3>
                <p>서울특별시 강남구 테헤란로 123<br />플루이드 빌딩 8층</p>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://www.linkedin.com" target="_blank" class="social-link" aria-label="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="https://www.x.com" target="_blank" class="social-link" aria-label="X">
                <font-awesome-icon :icon="['fab', 'x-twitter']" />
              </a>
              <a href="https://www.facebook.com" target="_blank" class="social-link" aria-label="Facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
              <a href="https://www.youtube.com" target="_blank" class="social-link" aria-label="YouTube">
                <font-awesome-icon :icon="['fab', 'youtube']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 지도 섹션 -->
    <section class="map-section">
      <div class="map-container">
        <div class="map-placeholder">
          <font-awesome-icon icon="map-marked-alt" />
          <span>지도가 여기에 표시됩니다</span>
        </div>
      </div>
    </section>



    <!-- 개인정보처리방침 모달 -->
    <div class="privacy-modal" v-if="showPrivacyPolicy" @click.self="showPrivacyPolicy = false">
      <div class="privacy-modal-content">
        <button class="close-modal" @click="showPrivacyPolicy = false">
          <font-awesome-icon icon="times" />
        </button>
        <h2>개인정보처리방침</h2>
        <div class="privacy-content">
          <h3>1. 개인정보의 수집 및 이용 목적</h3>
          <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
          <ul>
            <li>문의 내용에 대한 답변 및 안내</li>
            <li>제품 및 서비스 관련 정보 제공</li>
            <li>맞춤형 서비스 제공</li>
            <li>서비스 이용 통계 및 분석</li>
          </ul>

          <h3>2. 수집하는 개인정보의 항목</h3>
          <p>회사는 다음과 같은 개인정보를 수집합니다.</p>
          <ul>
            <li>필수항목: 이름, 이메일, 문의 내용</li>
            <li>선택항목: 회사명, 전화번호</li>
          </ul>

          <h3>3. a개인정보의 보유 및 이용 기간</h3>
          <p>원칙적으로 개인정보는 수집 및 이용 목적이 달성된 후에는 지체 없이 파기합니다. 다만, 관련 법령에 의해 보존할 필요가 있는 경우 법령에서 정한 기간 동안 개인정보를 보관합니다.</p>

          <h3>4. 개인정보의 제3자 제공</h3>
          <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ul>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
        </div>
        <button class="btn primary" @click="showPrivacyPolicy = false">닫기</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        privacyAgreed: false
      },
      errors: {},
      loading: false,
      submitted: false,
      showPrivacyPolicy: false,
      faqs: [
      ]
    }
  },
  created() {
    // URL 파라미터에서 문의 유형 가져오기
    const inquiryType = this.$route.query.inquiryType;
    if (inquiryType) {
      this.formData.inquiryType = inquiryType;
    }
  },
  methods: {
    submitForm() {
      // 폼 검증
      this.errors = {};
      let isValid = true;
      
      if (!this.formData.name.trim()) {
        this.errors.name = '이름을 입력해주세요';
        isValid = false;
      }
      
      if (!this.formData.email.trim()) {
        this.errors.email = '이메일을 입력해주세요';
        isValid = false;
      } else if (!this.validateEmail(this.formData.email)) {
        this.errors.email = '유효한 이메일을 입력해주세요';
        isValid = false;
      }
      
      if (!this.formData.inquiryType) {
        this.errors.inquiryType = '문의 유형을 선택해주세요';
        isValid = false;
      }
      
      if (!this.formData.message.trim()) {
        this.errors.message = '문의 내용을 입력해주세요';
        isValid = false;
      }
      
      if (!this.formData.privacyAgreed) {
        this.errors.privacyAgreed = '개인정보 수집 및 이용에 동의해주세요';
        isValid = false;
      }
      
      if (!isValid) return;
      
      // 폼 제출 시뮬레이션
      this.loading = true;
      
      setTimeout(() => {
        this.loading = false;
        this.submitted = true;
        
        // 폼 초기화
        this.formData = {
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          privacyAgreed: false
        };
        
        // 3초 후 성공 메시지 제거
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 1500);
    },
    
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-header {
  background: linear-gradient(135deg, #0288d1 0%, #01579b 100%);
  color: white;
  padding: 5rem 0 6rem;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.contact-header h1 {
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

.contact-section {
  padding: 5rem 0;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.contact-form-container {
  flex: 2;
  min-width: 300px;
}

.contact-info {
  flex: 1;
  min-width: 300px;
  background-color: #f5f8fa;
  padding: 2rem;
  border-radius: 8px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #01579b;
}

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #0288d1;
  box-shadow: 0 0 0 3px rgba(2, 136, 209, 0.1);
}

input.error,
select.error,
textarea.error {
  border-color: #f44336;
}

.error-message {
  color: #f44336;
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
}

.required {
  color: #f44336;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
}

input[type="checkbox"] {
  margin-top: 0.3rem;
  margin-right: 0.8rem;
}

.checkbox-label {
  font-weight: normal;
}

.privacy-policy {
  color: #0288d1;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.5rem;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.loading-spinner {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-success {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
}

.info-item {
  display: flex;
  margin-bottom: 2rem;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: #0288d1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin-right: 1.2rem;
}

.details h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #01579b;
}

.details p {
  color: #555;
  margin: 0;
}

.sub-info {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.3rem !important;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e1f5fe;
  color: #0288d1;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #0288d1;
  color: white;
  transform: translateY(-3px);
}

.map-section {
  background-color: #f5f8fa;
  padding: 0;
}

.map-container {
  width: 100%;
  height: 400px;
  position: relative;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #757575;
}

.map-placeholder i {
  font-size: 3rem;
  margin-bottom: 1rem;
}



.privacy-modal {
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
}

.privacy-modal-content {
  background-color: white;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #01579b;
  cursor: pointer;
}

.privacy-content {
  margin: 2rem 0;
}

.privacy-content h3 {
  color: #01579b;
  margin: 1.5rem 0 0.8rem;
}

.privacy-content p, .privacy-content ul {
  color: #555;
  margin-bottom: 1rem;
}

.privacy-content ul {
  padding-left: 1.5rem;
}

.privacy-content li {
  margin-bottom: 0.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn.primary {
  background-color: #0288d1;
  color: white;
}

.btn.primary:hover {
  background-color: #01579b;
  transform: translateY(-2px);
}

.btn:disabled {
  background-color: #bdbdbd;
  cursor: not-allowed;
  transform: none !important;
}

@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .contact-content {
    flex-direction: column;
  }
  
  .contact-form-container, .contact-info {
    width: 100%;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .info-item {
    margin-bottom: 1.5rem;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .map-container {
    height: 300px;
  }
}
</style>