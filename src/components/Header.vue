<template>
  <header class="mb-2">
    <Navbar />
    <div
      class="layer"
      v-for="(item, index) in sliderItems"
      v-show="index == activeItem"
      :key="index"
      :style="{
        backgroundImage: getBgImg(item),
      }"
      @mouseover="showControls()"
      @mouseleave="hideControls()"
    >
      <i
        :class="isMouseOver ? 'my-visible' : 'my-invisible'"
        @click="slidePrev()"
        class="fas fa-chevron-left fa-2xl"
      ></i>
      <HeaderHero :title="item.title" :text="item.text" />
      <i
        :class="isMouseOver ? 'my-visible' : 'my-invisible'"
        @click="slideNext()"
        class="fas fa-chevron-right fa-2xl"
      ></i>
    </div>
    <img class="wave-svg" src="../assets/img/Wave-1.png" alt="wave image" />
  </header>
</template>

<script>
import Navbar from "./HeaderComponents/Navbar.vue";
import HeaderHero from "./HeaderComponents/HeaderHero.vue";

export default {
  name: "IndexHeader",
  components: {
    Navbar,
    HeaderHero,
  },
  data() {
    return {
      sliderItems: [
        {
          bgImg: "theme_slider1_bg-1.jpg",
          title: "Showcase your courses",
          text: "Eduprime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc",
        },
        {
          bgImg: "theme_slider2_bg-1.jpg",
          title: "Key to your success",
          text: "Eduprime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc",
        },
        {
          bgImg: "theme_slider3_bg-1.jpg",
          title: "Lead.Inspire.Win!",
          text: "Eduprime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc",
        },
      ],
      activeItem: 1,
      isMouseOver: false,
    };
  },
  methods: {
    getBgImg(item) {
      return `linear-gradient(#e56767ee, #e56767ee), url(${require(`../assets/img/${item.bgImg}`)})`;
    },
    slideNext() {
      if (this.activeItem === this.sliderItems.length - 1) {
        this.activeItem = 0;
      } else {
        this.activeItem++;
      }
    },
    slidePrev() {
      if (this.activeItem === 0) {
        this.activeItem = this.sliderItems.length - 1;
      } else {
        this.activeItem--;
      }
    },
    showControls() {
      this.isMouseOver = true;
    },
    hideControls() {
      this.isMouseOver = false;
    },
    autoPlay() {
      let autoSlide = setInterval(this.slideNext, 2500);
      console.log(autoSlide + "auto slide partito");
    },
  },
  mounted() {
    this.autoPlay();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
@import "../assets/scss/partials/_mixins.scss";
header {
  position: relative;
  overflow: hidden;
  nav {
    position: absolute;
    background-color: transparent;
  }
  div.layer {
    height: 83vh;
    color: white;
    overflow: hidden;
    @include flex(center, center, 0);
    background-position: top center;
    i.fas.fa-chevron-left,
    i.fas.fa-chevron-right {
      cursor: pointer;
      transition: all 1.3s ease-in-out;
    }
    i.fas.fa-chevron-left {
      @include position(absolute, 50%, inherit, inherit, 2rem);
    }
    i.fas.fa-chevron-right {
      @include position(absolute, 50%, 2rem, inherit, inherit);
    }
  }
  img.wave-svg {
    @include position(absolute, inherit, 0, 0, 0);
  }
}
</style>
