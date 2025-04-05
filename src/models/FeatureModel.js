/**
 * 기능 모델 - 앱의 기능 정보를 정의합니다.
 */
export default {
  /**
   * 기능 목록을 가져옵니다.
   * @returns {Array} 기능 목록
   */
  getFeatures() {
    return [
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
    ];
  }
};