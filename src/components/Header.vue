<template>
  <header class="mb-2">
    <Navbar />
    <Jumbotron />
    <img class="wave-svg" src="../assets/img/Wave-1.png" alt="wave image" />
  </header>
</template>

<script>
import Navbar from "./HeaderComponents/Navbar.vue";
import Jumbotron from "./HeaderComponents/Jumbotron.vue";

export default {
  name: "IndexHeader",
  components: {
    Navbar,
    Jumbotron,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
header {
  overflow: hidden;
  position: relative;
  color: white;
  height: 90vh;
  background-image: linear-gradient($primaryColorLayer, $primaryColorLayer),
    url(../assets/img/theme_slider2_bg-1.jpg); // must change on slide
  background-position: top center;
  img.wave-svg {
    @include position(absolute, inherit, 0, 0, 0);
  }
}
</style>
