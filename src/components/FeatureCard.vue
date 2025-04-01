<template>
    <div class="feature-card">
      <div class="icon-container">
        <i :class="'fas fa-' + icon"></i>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureCard',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .feature-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .icon-container {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #29b6f6 0%, #0288d1 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.8rem;
  }
  
  h3 {
    color: #01579b;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: #555;
    line-height: 1.6;
    margin: 0;
  }
  </style>