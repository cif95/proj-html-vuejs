<template>
  <div class="my-event-card border-1 d-flex flex-column mx-auto">
    <h3 class="title">{{ item.title }}</h3>
    <span class="date pb-2">
      <i class="far fa-calendar-alt"></i>
      {{ item.date }}
    </span>
    <p class="info pb-3">{{ item.text }}</p>
    <button class="my-btn my-btn-primary">
      <i class="fas fa-plus"></i>
      Find More
    </button>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
div.my-event-card {
  @include eventCard;
}
</style>
