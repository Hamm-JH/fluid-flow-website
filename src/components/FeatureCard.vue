<template>
    <div class="feature-card">
      <div class="icon-container">
        <font-awesome-icon :icon="icon" />
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    height: 350px;
    transform: translateY(0);
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .icon-container {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #29b6f6 0%, #0288d1 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.8rem;
    flex-shrink: 0;
    margin-top: 10px;
  }
  
  h3 {
    color: #01579b;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: #555;
    line-height: 1.6;
    margin: 0;
    flex-grow: 1;
    width: 100%;
    text-align: center;
    height: 120px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>