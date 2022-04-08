<template>
  <main>
    <section id="courses">
      <div class="container">
        <StandardContent :section="this.sections[0]" />
      </div>
    </section>
    <section id="faculties" class="position-relative pb-5">
      <FacultiesContent :faculties="this.faculties" />
      <div class="container pb-5">
        <!-- standard content active must change on click  -->
        <StandardContent
          class="fs-6"
          v-show="item.active"
          v-for="(item, index) in this.faculties"
          :key="index"
          :section="item"
        />
      </div>
    </section>
    <section id="time-line">
      <TimeLineContent />
      <!-- card component here -->
    </section>
    <section id="latest-courses">
      <div class="container">
        <h2>Latest courses</h2>
        <!-- card component here -->
      </div>
    </section>
    <section id="methods">
      <div class="container">
        <StandardContent :section="this.sections[1]" />
      </div>
    </section>
    <section id="fees">
      <div class="container">
        <StandardContent :section="this.sections[2]" />
      </div>
    </section>
    <!-- subscribe banner component -->
  </main>
</template>

<script>
import StandardContent from "./MainComponents/StandardContent.vue";
import FacultiesContent from "./MainComponents/FacultiesContent.vue";
import TimeLineContent from "./MainComponents/TimeLineContent.vue";

export default {
  name: "IndexMain",
  data() {
    return {
      faculties: [
        {
          thumbIconPath: "Gavel-v2.png",
          thumbIconAlt: "Law faculty icon",
          active: true,
          hasIcon: false,
          iconPath: null,
          imgPath: "Gavel-Illustration-e1556884768193.png",
          title: "Law Faculty",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "ReadMore",
          btnColor: "primary",
          textColOrder: 1,
        },
        {
          active: false,
          hasIcon: false,
          iconPath: null,
          thumbIconPath: "Coins-tabs-v2.png",
          thumbIconAlt: "Economy faculty icon",
          title: "Economy",
          imgPath: "Economy.png",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "ReadMore",
          btnColor: "primary",
          textColOrder: 1,
        },
        {
          active: false,
          hasIcon: false,
          iconPath: null,
          title: "Medicine",
          thumbIconPath: "Medicine-tabs-v2.png",
          thumbIconAlt: "Medicine faculty icon",
          imgPath: "Medicine.png",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "ReadMore",
          btnColor: "primary",
          textColOrder: 1,
        },
        {
          active: false,
          hasIcon: false,
          iconPath: null,
          thumbIconPath: "Computer-tabs-v2.png",
          thumbIconAlt: "Computer science faculty icon",
          title: "Computer science",
          imgPath: "Computer-Science.png",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "ReadMore",
          btnColor: "primary",
          textColOrder: 1,
        },
        {
          active: false,
          hasIcon: false,
          iconPath: null,
          thumbIconPath: "Palette-tabs-v2.png",
          thumbIconAlt: "Graphic design faculty icon",
          title: "Graphic design",
          imgPath: "Graphic-Design.png",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "ReadMore",
          btnColor: "primary",
          textColOrder: 1,
        },
      ],
      sections: [
        {
          hasIcon: true,
          iconPath: "Books-icon.png",
          imgPath: "Graduation-Illustration.png",
          title: "Thousands of courses",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "Browse through courses",
          btnColor: "yellow",
          textColOrder: 0,
        },
        {
          hasIcon: true,
          iconPath: "Exam-icon.png",
          imgPath: "Exam-Illustration.png",
          title: "The most efficient examination method",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "Discover the method",
          btnColor: "primary",
          textColOrder: 0,
        },
        {
          hasIcon: true,
          iconPath: "Exam-icon-1.png",
          imgPath: "Girl-Illustration.png",
          title: "Variable fee for international students",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "List of Fees",
          btnColor: "primary",
          textColOrder: 1,
        },
      ],
    };
  },
  components: {
    StandardContent,
    FacultiesContent,
    TimeLineContent,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";
main {
  overflow-x: hidden;
}
h1,
h2 {
  color: $sectionHeadingColor;
}
section#courses {
  background-image: url(../assets/img/home-background.png);
  background-position: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}

section#faculties::after {
  content: url("../assets/img/svg/svg-0.svg");
  @include position(absolute, 81%, 0, inherit, 0);
}

section#time-line {
  position: relative;
  color: white;
  background-color: $primaryColor;
  h1,
  h2 {
    color: white;
  }
  img.clock-icon {
    width: 75px;
  }
}
</style>
