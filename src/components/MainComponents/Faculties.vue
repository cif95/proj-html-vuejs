<template>
  <section id="faculties" class="position-relative pb-5">
    <!-- slider thumbs -->
    <FacultiesContent :faculties="this.faculties" @clickedThumb="getIndex" />
    <div class="container pb-5">
      <!-- slider items   -->
      <StandardContent
        class="fs-6"
        v-show="i === activeCard"
        v-for="(item, i) in this.faculties"
        :key="i"
        :section="item"
      />
    </div>
  </section>
</template>

<script>
import FacultiesContent from "./FacultiesContent.vue";
import StandardContent from "./StandardContent.vue";

export default {
  name: "SectionFaculties",
  components: {
    FacultiesContent,
    StandardContent,
  },
  data() {
    return {
      faculties: [
        {
          thumbIconPath: "Gavel-v2.png",
          thumbIconAlt: "Law faculty icon",
          hasIcon: false,
          iconPath: null,
          imgPath: "Gavel-Illustration-e1556884768193.png",
          title: "Law Faculty",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
          btnText: "ReadMore",
          btnColor: "primary",
          textColOrder: 1,
          isSliderItem: true,
        },
        {
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
          isSliderItem: true,
        },
        {
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
          isSliderItem: true,
        },
        {
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
          isSliderItem: true,
        },
        {
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
          isSliderItem: true,
        },
      ],
      activeCard: 0,
    };
  },
  methods: {
    getIndex(index) {
      this.activeCard = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
section#faculties::after {
  content: url("../../assets/img/svg/svg-0.svg");
  @include position(absolute, 81.25%, 0, inherit, -6px);
}
</style>
