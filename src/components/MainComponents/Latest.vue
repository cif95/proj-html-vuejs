<template>
  <section id="latest-courses" class="pt-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 py-5">
          <h2>Latest courses</h2>
        </div>
        <div class="col-3 px-3" v-for="(course, i) in this.courses" :key="i">
          <LatestCard :course="course" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LatestCard from "./LatestCard.vue";

export default {
  name: "SectionLatest",
  components: {
    LatestCard,
  },
  data() {
    return {
      courses: [
        {
          title: "Make better decisions",
          iconPath: "Decisions-icon.png",
          teacher: "James Colins",
          price: "$21.00",
        },
        {
          title: "How to be a speaker",
          iconPath: "Speaker-icon.png",
          teacher: "James Colins",
          price: "Free",
        },
        {
          title: "Network Instructions",
          iconPath: "Network-icon.png",
          teacher: "James Colins",
          price: "free",
        },
        {
          title: "Brand Management",
          iconPath: "Brand-icon.png",
          teacher: "James Colins",
          price: "free",
        },
      ],
    };
  },
};
</script>

<style></style>
