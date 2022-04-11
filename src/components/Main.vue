<template>
  <main>
    <BackToTop />
    <Courses />
    <Faculties />
    <TimeLine />
    <Latest />
    <Methods />
    <Fees />
    <Banner />
  </main>
</template>

<script>
import BackToTop from "./MainComponents/BackToTop.vue";
import Courses from "./MainComponents/Courses.vue";
import Faculties from "./MainComponents/Faculties.vue";
import TimeLine from "./MainComponents/TimeLine.vue";
import Latest from "./MainComponents/Latest.vue";
import Methods from "./MainComponents/Methods.vue";
import Fees from "./MainComponents/Fees.vue";
import Banner from "./MainComponents/Banner.vue";

export default {
  name: "IndexMain",
  components: {
    BackToTop,
    Courses,
    Faculties,
    TimeLine,
    Latest,
    Methods,
    Fees,
    Banner,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
@import "../assets/scss/partials/_mixins.scss";
main {
  overflow-x: hidden;
}
h1,
h2:not(section#time-line h2) {
  color: $sectionHeadingColor;
}
</style>
