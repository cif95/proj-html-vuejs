<template>
  <div v-show="hasScrolled">
    <i @click="toTop()" id="backToTop" class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
export default {
  name: "BackToTopIcon",
  data() {
    return {
      scroll: 0,
    };
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    updateScroll() {
      this.scroll = window.scrollY;
    },
  },
  computed: {
    hasScrolled() {
      if (this.scroll > 150) {
        return true;
      } else return false;
    },
  },
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
i#backToTop {
  @include position(fixed, inherit, 2rem, 2rem, inherit);
  font-size: 1rem;
  z-index: 1;
  color: white;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50px;
  background-color: $secondaryColor;
}
</style>
