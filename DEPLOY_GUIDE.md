# Fluid Flow 웹사이트 배포 가이드

이 문서는 Fluid Flow 웹사이트를 테스트 빌드하고 프로덕션 환경에 배포하는 방법을 설명합니다.

## 1. 테스트 빌드 및 로컬 미리보기

### 자동 스크립트 사용 (권장)

프로젝트 루트 디렉토리에서 `deploy.bat` 스크립트를 실행하세요:

```bash
./deploy.bat
```

이 스크립트는 다음 작업을 자동으로 수행합니다:
- 프로덕션 빌드 생성 (`npm run build`)
- 빌드 파일 확인
- 로컬 미리보기 서버 실행 (`npm run preview`)

### 수동 과정

또는 다음 명령을 수동으로 실행할 수 있습니다:

```bash
# 프로덕션 빌드 생성
npm run build

# 로컬에서 빌드 미리보기 (http://localhost:4173)
npm run preview
```

## 2. 프로덕션 배포 옵션

### 옵션 1: Netlify 배포 (권장 - 가장 쉽고 빠름)

1. [Netlify](https://www.netlify.com/)에 가입하고 로그인하세요.
2. "New site from Git" 버튼을 클릭하세요.
3. Git 저장소 제공자(GitHub, GitLab, Bitbucket)를 선택하고 저장소에 연결하세요.
4. 다음 설정으로 배포를 구성하세요:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. "Deploy site" 버튼을 클릭하세요.

배포가 완료되면 Netlify는 고유한 URL(예: `https://fluid-flow.netlify.app`)을 제공합니다. 
나중에 사용자 정의 도메인을 연결할 수 있습니다.

### 옵션 2: Vercel 배포

1. [Vercel](https://vercel.com/)에 가입하고 로그인하세요.
2. "New Project"를 클릭하세요.
3. Git 저장소를 가져오세요.
4. 프레임워크 사전 설정으로 "Vue.js"를 선택하세요.
5. 필요한 경우 빌드 설정을 조정하세요:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. "Deploy"를 클릭하세요.

### 옵션 3: GitHub Pages

1. 프로젝트의 `vite.config.js` 파일에 base 설정을 추가하세요:

```js
export default defineConfig({
  base: '/fluid-flow-website/', // 저장소 이름으로 교체하세요
  // 나머지 설정...
})
```

2. 빌드 후 GitHub Pages에 배포하기 위한 스크립트를 추가하세요:

```bash
# package.json의 "scripts" 섹션에 추가
"deploy:gh": "npm run build && gh-pages -d dist"
```

3. gh-pages 패키지를 설치하세요:

```bash
npm install --save-dev gh-pages
```

4. 배포 실행:

```bash
npm run deploy:gh
```

## 3. 프로덕션 배포 후 확인 사항

- 모든 링크와 기능이 제대로 작동하는지 테스트하세요
- 다양한 브라우저(Chrome, Firefox, Safari, Edge)에서 웹사이트를 확인하세요
- 모바일 및 데스크톱 뷰에서 반응형 디자인을 테스트하세요
- 페이지 로드 속도를 확인하세요 (Google PageSpeed Insights 사용)
- 모든 정적 자산(이미지, 폰트 등)이 제대로 로드되는지 확인하세요

## 4. 문제 해결

### 빌드 문제
- 노드 버전이 최신인지 확인하세요 (`node -v`)
- 종속성을 클린 설치해 보세요 (`npm ci`)
- Vite 캐시를 지우세요 (`npm run dev -- --force`)

### 배포 문제
- 환경 변수가 올바르게 설정되었는지 확인하세요
- 호스팅 서비스의 로그를 확인하세요
- 배포 설정(빌드 명령, 출력 디렉토리)을 확인하세요

## 5. 추가 리소스

- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)
- [Vue.js 프로덕션 배포 팁](https://vuejs.org/guide/best-practices/performance.html)
- [Netlify 문서](https://docs.netlify.com/)
- [Vercel 문서](https://vercel.com/docs)
