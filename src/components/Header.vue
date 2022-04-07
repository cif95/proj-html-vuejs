<template>
  <header>
    <Navbar />
    <Jumbotron />
    <!-- logo+navbar -->
    <!-- jumbotron(slider) -->
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
  height: 70vh;
  background-color: $primaryColor;
}
</style>
