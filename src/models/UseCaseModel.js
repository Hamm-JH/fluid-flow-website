/**
 * 활용 사례 모델 - 앱의 활용 사례 정보를 정의합니다.
 */
export default {
  /**
   * 활용 사례 목록을 가져옵니다.
   * @returns {Array} 활용 사례 목록
   */
  getUseCases() {
    return [
      {
        id: 1,
        title: '도시 배수 시스템',
        description: '도시 배수 인프라의 효율성을 분석하고 최적화합니다.',
        image: '@/assets/use-case-1.jpg'
      },
      {
        id: 2,
        title: '댐 및 수로 설계',
        description: '댐과 수로 시스템의 안정성과 효율성을 향상시킵니다.',
        image: '@/assets/use-case-2.jpg'
      },
      {
        id: 3,
        title: '연안 구조물',
        description: '파도와 조류에 대한 연안 구조물의 영향을 예측합니다.',
        image: '@/assets/use-case-3.jpg'
      }
    ];
  }
};