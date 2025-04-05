<template>
    <div class="testimonial-slider">
      <div class="testimonial-container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-content">
            <div class="quote">"{{ testimonial.quote }}"</div>
            <div class="author-info">
              <img :src="testimonial.avatar" alt="Avatar" class="avatar" />
              <div class="author-details">
                <div class="name">{{ testimonial.name }}</div>
                <div class="company">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="slider-controls">
        <button class="prev-btn" @click="prevSlide" :disabled="currentSlide === 0">
          <font-awesome-icon icon="chevron-left" />
        </button>
        <div class="dots">
          <span 
            v-for="(_, index) in testimonials" 
            :key="index" 
            class="dot" 
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
        <button class="next-btn" @click="nextSlide" :disabled="currentSlide === testimonials.length - 1">
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialSlider',
    props: {
      testimonials: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentSlide: 0,
        autoPlayInterval: null
      }
    },
    methods: {
      nextSlide() {
        if (this.currentSlide < this.testimonials.length - 1) {
          this.currentSlide++;
        }
      },
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      },
      goToSlide(index) {
        this.currentSlide = index;
      },
      startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
          if (this.currentSlide < this.testimonials.length - 1) {
            this.currentSlide++;
          } else {
            this.currentSlide = 0;
          }
        }, 5000);
      },
      stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
      }
    },
    mounted() {
      this.startAutoPlay();
    },
    beforeUnmount() {
      this.stopAutoPlay();
    }
  }
  </script>
  
  <style scoped>
  .testimonial-slider {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .testimonial-container {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .testimonial {
    flex: 0 0 100%;
    padding: 0 1rem;
  }
  
  .testimonial-content {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    position: relative;
  }
  
  .testimonial-content:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #29b6f6, #0288d1);
    border-radius: 4px 0 0 4px;
  }
  
  .quote {
    font-style: italic;
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .author-info {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
    border: 2px solid #29b6f6;
  }
  
  .author-details {
    display: flex;
    flex-direction: column;
  }
  
  .name {
    font-weight: bold;
    color: #01579b;
  }
  
  .company {
    font-size: 0.9rem;
    color: #666;
  }
  
  .slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .prev-btn, .next-btn {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #01579b;
  }
  
  .prev-btn:hover, .next-btn:hover {
    background-color: #e1f5fe;
    border-color: #29b6f6;
  }
  
  .prev-btn:disabled, .next-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .dots {
    display: flex;
    margin: 0 1rem;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ddd;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dot.active {
    background-color: #01579b;
    transform: scale(1.2);
  }
  </style>