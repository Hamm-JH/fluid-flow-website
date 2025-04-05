/**
 * 후기 모델 - 고객 후기 정보를 정의합니다.
 */
export default {
  /**
   * 고객 후기 목록을 가져옵니다.
   * @returns {Array} 고객 후기 목록
   */
  getTestimonials() {
    return [
      {
        id: 1,
        name: '김현우',
        company: '대한토목엔지니어링',
        quote: 'Fluid Flow Analysis System은 우리 프로젝트의 정확도를 크게 향상시켰습니다. 직관적인 인터페이스와 정확한 분석 결과에 매우 만족합니다.',
        avatar: '/images/avatar-1.jpg',
        icon: 'user-circle',
        companyIcon: 'building'
      },
      {
        id: 2,
        name: '이지원',
        company: '한국수자원공사',
        quote: '복잡한 수자원 프로젝트에서 이 시스템의 시뮬레이션 기능은 정말 놀랍습니다. 시간과 비용을 크게 절약할 수 있었습니다.',
        avatar: '/images/avatar-2.jpg',
        icon: 'user-circle',
        companyIcon: 'building'
      },
      {
        id: 3,
        name: '박준영',
        company: '도시계획연구소',
        quote: '도시 배수 시스템 설계에 Fluid Flow를 도입한 후 우리 팀의 생산성이 30% 이상 향상되었습니다. 특히 다양한 출력 형식 덕분에 협업이 훨씬 쉬워졌습니다.',
        avatar: '/images/avatar-1.jpg',
        icon: 'user-circle',
        companyIcon: 'building'
      }
    ];
  }
};