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
import Courses from "./MainComponents/MainSections/Courses.vue";
import Faculties from "./MainComponents/MainSections/Faculties.vue";
import TimeLine from "./MainComponents/MainSections/TimeLine.vue";
import Latest from "./MainComponents/MainSections/Latest.vue";
import Methods from "./MainComponents/MainSections/Methods.vue";
import Fees from "./MainComponents/MainSections/Fees.vue";
import Banner from "./MainComponents/MainSections/Banner.vue";

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
