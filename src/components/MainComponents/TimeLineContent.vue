<template>
  <div class="container py-5 mb-5">
    <div class="row text-center">
      <div class="col-12 pb-5">
        <img
          class="clock-icon"
          src="../../assets/img/Clock-and-Bell.png"
          alt="clock and bell icon"
        />
        <h2>University Year</h2>
      </div>
      <div class="col-4 offset-3">
        <h5>Demo Classes</h5>
        <p>
          In the first week, students try to accomodate with the teaching style
          and choose their optional courses.
        </p>
      </div>
      <div class="col-4">
        <h5>Graduation Day</h5>
        <p>
          In the first week, students try to accomodate with the teaching style
          and choose their optional courses.
        </p>
      </div>
      <div class="col-12">
        <img src="../../assets/img/Timeline-Item.png" alt="timeline picture" />
      </div>
      <div class="col-4 offset-1">
        <h5>Orientation</h5>
        <p>
          In the first week, students try to accomodate with the teaching style
          and choose their optional courses.
        </p>
      </div>
      <div class="col-4">
        <h5>Evaluation</h5>
        <p>
          In the first week, students try to accomodate with the teaching style
          and choose their optional courses.
        </p>
      </div>
      <div class="col-12 pt-5 pb-2">
        <img
          class="clock-icon img-fluid p-1"
          src="../../assets/img/upcoming-events-calendar-icon.png"
          alt="calendar icon"
        />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 pb-5">
        <h2>Upcoming Events</h2>
      </div>
      <div
        class="col-4 pb-4"
        v-for="(event, index) in this.upcomingEv"
        :key="index"
      >
        <EventCard :item="event" />
      </div>
      <div class="col-12 py-5">
        <button class="my-btn my-btn-yellow">View all events</button>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";

export default {
  name: "TimeLine",
  components: {
    EventCard,
  },
  data() {
    return {
      upcomingEv: [
        {
          title: "Coaching Sessions",
          date: "20 May 21:30 PM",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]",
        },
        {
          title: "Coaching Sessions",
          date: "20 Mar 18:30 PM",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]",
        },
        {
          title: "Coaching Sessions",
          date: "12 Feb 21:30 PM",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]",
        },
      ],
    };
  },
};
</script>

<style style="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
div.container::after {
  content: url("../../assets/img/svg/svg-1.svg");
  position: absolute;
  top: 99.5%;
  left: 0;
  right: 0;
  /* @include position(absolute, 99.5%, 0, inherit, 0); */
}
</style>
