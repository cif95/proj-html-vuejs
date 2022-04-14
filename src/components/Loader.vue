<template>
  <div id="loader" v-if="isLoading">
    <i class="fas fa-spinner"></i>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    updateStatus() {
      setTimeout(() => {
        this.isLoading = false;
      }, 3500);
    },
  },
  mounted() {
    this.updateStatus();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
@import "../assets/scss/partials/_mixins.scss";
div#loader {
  @include flex(center, center, 0);
  @include position(fixed, 0, 0, 0, 0);
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
  background-color: $primaryColor;
  i {
    font-size: 3.5rem;
    color: $secondaryColor;
    animation: 1.5s linear clockwise infinite;
  }
}

@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(300deg);
  }
}
</style>
