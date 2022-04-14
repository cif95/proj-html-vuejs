<template>
  <div id="app">
    <Loader />
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    Loader,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main-style.scss";
</style>
