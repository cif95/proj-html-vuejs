<template>
  <main>
    <!-- props to standardContent to change text, img, btn and cols order in each section -->
    <section id="courses">
      <StandardContent
        :hasIcon="true"
        iconPath="Books-icon.png"
        imgPath="Graduation-Illustration.png"
        title="Thousands of courses"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptate dolorem eligendi aut a similique praesentium
          magni perferendis earum animi, sed cum fuga neque, itaque vitae iusto
          sapiente velit natus"
        btnText="Browse through courses"
      />
    </section>
    <section id="faculties">
      <StandardContent
        :hasIcon="false"
        iconPath="Exam-icon.png"
        imgPath="Gavel-Illustration-e1556884768193.png"
        title="Law Faculty"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptate dolorem eligendi aut a similique praesentium
          magni perferendis earum animi, sed cum fuga neque, itaque vitae iusto
          sapiente velit natus"
        btnText="Read More"
      />
    </section>
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
section#courses {
  background-image: url(../assets/img/home-background.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0 5rem;
}
</style>
