<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="./assets/logo.svg" alt="Fluid Flow Logo" />
          <span>Fluid Flow</span>
        </div>
        <nav class="nav" :class="{ active: isMenuOpen }">
          <ul>
            <li><router-link to="/" exact-active-class="active">홈</router-link></li>
            <li><router-link to="/features" active-class="active">기능</router-link></li>
            <li><router-link to="/case-studies" active-class="active">사례 연구</router-link></li>
            <li><a href="#">문의하기</a></li>
          </ul>
        </nav>
        <button class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="./assets/logo-white.svg" alt="Fluid Flow Logo" />
            <span>Fluid Flow</span>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>제품</h4>
              <ul>
                <li><a href="#">기능</a></li>
                <li><a href="#">시스템 요구 사항</a></li>
                <li><a href="#">가격</a></li>
                <li><a href="#">다운로드</a></li>
              </ul>
            </div>
            <div class="link-group">
              <h4>지원</h4>
              <ul>
                <li><a href="#">문서</a></li>
                <li><a href="#">튜토리얼</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">문의</a></li>
              </ul>
            </div>
            <div class="link-group">
              <h4>회사</h4>
              <ul>
                <li><a href="#">회사 소개</a></li>
                <li><a href="#">블로그</a></li>
                <li><a href="#">채용</a></li>
                <li><a href="#">연락처</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Fluid Flow Analysis System. All rights reserved.</p>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle('no-scroll', this.isMenuOpen);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

:root {
  --primary-color: #0288d1;
  --primary-dark: #01579b;
  --primary-light: #29b6f6;
  --bg-light: #e1f5fe;
  --text-dark: #333;
  --text-light: #666;
  --white: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
}

body.no-scroll {
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 0.5rem;
}

.logo span {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav li {
  margin-left: 2rem;
}

.nav a {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav a:hover, .nav a.active {
  color: var(--primary-color);
}

.nav a.active:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--primary-dark);
  transition: all 0.3s ease;
}

.footer {
  background-color: var(--primary-dark);
  color: var(--white);
  padding: 4rem 0 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-logo img {
  height: 40px;
  margin-right: 0.5rem;
}

.footer-logo span {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.link-group h4 {
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  color: var(--primary-light);
}

.link-group ul {
  list-style: none;
}

.link-group li {
  margin-bottom: 0.5rem;
}

.link-group a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--white);
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  font-size: 0.9rem;
  opacity: 0.7;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--primary-light);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--white);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    padding: 6rem 2rem;
    transition: right 0.3s ease;
    z-index: 999;
  }

  .nav.active {
    right: 0;
  }

  .nav ul {
    flex-direction: column;
  }

  .nav li {
    margin: 0 0 1.5rem 0;
  }

  .nav a {
    font-size: 1.2rem;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-links {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>