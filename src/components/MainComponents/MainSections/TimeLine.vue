<template>
  <section id="time-line">
    <div class="container py-5 mb-5">
      <div id="university-year" class="row text-center">
        <div class="col-12 pb-5">
          <img
            class="clock-icon"
            src="../../../assets/img/Clock-and-Bell.png"
            alt="clock and bell icon"
          />
          <h2>University Year</h2>
        </div>
        <div class="col-4 offset-3 pb-4">
          <h6>Demo Classes</h6>
          <p>
            In the first week, students try to accomodate with the teaching
            style and choose their optional courses.
          </p>
        </div>
        <div class="col-4 pb-4">
          <h6>Graduation Day</h6>
          <p>
            In the first week, students try to accomodate with the teaching
            style and choose their optional courses.
          </p>
        </div>
        <div class="col-12">
          <img
            src="../../../assets/img/Timeline-Item.png"
            alt="timeline picture"
          />
        </div>
        <div class="col-4 offset-1 pt-4">
          <h6>Orientation</h6>
          <p>
            In the first week, students try to accomodate with the teaching
            style and choose their optional courses.
          </p>
        </div>
        <div class="col-4 pt-4">
          <h6>Evaluation</h6>
          <p>
            In the first week, students try to accomodate with the teaching
            style and choose their optional courses.
          </p>
        </div>
        <div class="col-12 pt-5 pb-2">
          <img
            class="clock-icon img-fluid p-1"
            src="../../../assets/img/upcoming-events-calendar-icon.png"
            alt="calendar icon"
          />
        </div>
      </div>
      <TimeLineUpcoming />
    </div>
  </section>
</template>

<script>
import TimeLineUpcoming from "../SectionsContents/TimeLineUpcoming.vue";

export default {
  name: "SectionTimeLine",
  components: {
    TimeLineUpcoming,
  },
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
          isSliderItem: true,
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
          isSliderItem: true,
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
          isSliderItem: true,
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
          isSliderItem: true,
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
          isSliderItem: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/partials/_variables.scss";
@import "../../../assets/scss/partials/_mixins.scss";
section#time-line {
  position: relative;
  color: white;
  background-color: $primaryColor;
  h1,
  h2 {
    color: white;
  }
  h6 {
    font-size: 1.2rem;
  }
  p {
    font-weight: 400;
    max-width: 90%;
    margin: 0 auto;
  }
  div#university-year {
    p {
      color: #ffffffbd;
    }
    h2 {
      width: fit-content;
      margin: 1.5rem auto;
      background-color: #db2a2c;
    }
  }
  img.clock-icon {
    width: 65px;
  }
  div.container::after {
    content: url("../../../assets/img/svg/svg-1.svg");
    position: absolute;
    top: 99.5%;
    left: 0;
    right: 0;
  }
}
</style>
