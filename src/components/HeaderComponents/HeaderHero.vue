<template>
  <div id="header-hero">
    <div id="hero-content" class="text-center py-2 mx-auto">
      <h1 class="text-white">{{ title }}</h1>
      <p class="py-4 fs-5">{{ text }}</p>
      <button class="my-btn my-btn-yellow me-5">
        <i class="fas fa-search me-2"></i>
        Search courses
      </button>
      <button class="my-btn my-btn-white">
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
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_mixins.scss";
div#header-hero {
  div#hero-content {
    width: 70%;
    h1 {
      font-size: 4rem;
    }
  }
}
</style>
