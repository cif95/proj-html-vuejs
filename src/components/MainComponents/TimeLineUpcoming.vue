<template>
  <div id="upcoming-events" class="row text-center">
    <div class="col-12 pb-5">
      <h2>Upcoming Events</h2>
    </div>
    <div
      class="col-4 px-0 py-4"
      v-for="(event, index) in this.upcomingEv"
      :key="index"
    >
      <EventCard :item="event" />
    </div>
    <div class="col-12 py-5">
      <button class="my-btn my-btn-yellow">View all events</button>
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";

export default {
  name: "UpcomingEvents",
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

<style></style>
