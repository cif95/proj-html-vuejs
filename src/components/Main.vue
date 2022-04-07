<template>
  <main>
    <section id="courses">
      <div class="container">
        <StandardContent :section="this.sections[0]" />
      </div>
    </section>
    <section id="faculties">
      <div class="container">
        <h2>Faculties available at EduPrime</h2>
        <p>Lorem lorem lorem</p>
        <!-- slider goes here -> changing props to standardContent when slides  -->
        <StandardContent :section="this.sections[1]" />
      </div>
    </section>
    <section id="time-line">
      <div class="container">
        <h2>University Year</h2>
        <!-- card component here -->
      </div>
    </section>
    <section id="latest-courses">
      <div class="container">
        <h2>Latest courses</h2>
        <!-- card component here -->
      </div>
    </section>
    <section id="methods">
      <div class="container">
        <StandardContent :section="this.sections[2]" />
      </div>
    </section>
    <section id="fees">
      <div class="container">
        <StandardContent :section="this.sections[3]" />
      </div>
    </section>
    <!-- subscribe banner component -->
  </main>
</template>

<script>
import StandardContent from "./MainComponents/StandardContent.vue";

export default {
  name: "IndexMain",
  data() {
    return {
      sections: [
        {
          hasIcon: true,
          iconPath: "Books-icon.png",
          imgPath: "Graduation-Illustration.png",
          title: "Thousands of courses",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "Browse through courses",
          textColOrder: 0,
        },
        {
          hasIcon: false,
          iconPath: null,
          imgPath: "Gavel-Illustration-e1556884768193.png",
          title: "Law Faculty",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "Read More",
          textColOrder: 1,
        },
        {
          hasIcon: true,
          iconPath: "Exam-icon.png",
          imgPath: "Exam-Illustration.png",
          title: "The most efficient examination method",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "Discover the method",
          textColOrder: 0,
        },
        {
          hasIcon: true,
          iconPath: "Exam-icon-1.png",
          imgPath: "Girl-Illustration.png",
          title: "Variable fee for international students",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "List of Fees",
          textColOrder: 1,
        },
      ],
    };
  },
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
