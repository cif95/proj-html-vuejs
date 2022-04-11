<template>
  <div id="header-hero">
    <div id="hero-content" class="text-center py-2 mx-auto">
      <h1 class="text-white">{{ title }}</h1>
      <p class="py-4 fs-5">{{ text }}</p>
      <button
        :class="getSearchBtnColor"
        @mouseover="isSearchActive = true"
        @mouseleave="isSearchActive = false"
        class="my-btn me-5"
      >
        <i class="fas fa-search me-2"></i>
        Search courses
      </button>
      <button
        :class="getApplyBtnColor"
        @mouseover="isApplyActive = true"
        @mouseleave="isApplyActive = false"
        class="my-btn"
      >
        <i class="fas fa-user-plus me-2"></i>
        Apply for university
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHero",
  props: ["title", "text"],
  data() {
    return {
      isApplyActive: false,
      isSearchActive: false,
    };
  },
  computed: {
    getApplyBtnColor() {
      if (!this.isApplyActive) {
        return "my-btn-white";
      } else {
        return "my-btn-yellow";
      }
    },
    getSearchBtnColor() {
      if (!this.isSearchActive) {
        return "my-btn-yellow";
      } else {
        return "my-btn-white";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_mixins.scss";
div#header-hero {
  div#hero-content {
    width: 70%;
    h1,
    p,
    button {
      filter: opacity(1);
      animation: 2s slowEntrance reverse ease-in-out;
      animation-delay: -1s;
    }
    h1 {
      font-size: 4rem;
    }
  }
}

@keyframes slowEntrance {
  from {
    filter: opacity(1);
    transform: scale(1);
  }
  to {
    filter: opacity(0);
    transform: scale(0.5);
  }
}
</style>
