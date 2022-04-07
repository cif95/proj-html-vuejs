<template>
  <main>
    <!-- props to standardContent to change text, img, btn in each section -->
    <section id="courses"><StandardContent /></section>
    <!-- 7 sections  => components: standardContent(img + title,text,btn), Slider, Card -->
    <!-- banner -->
  </main>
</template>

<script>
import StandardContent from "./MainComponents/StandardContent.vue";

export default {
  name: "IndexMain",
  components: {
    StandardContent,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
h1,
h2 {
  color: $sectionHeadingColor;
}
section {
  background-image: url(../assets/img/home-background.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0 5rem;
}
</style>
