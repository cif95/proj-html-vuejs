<template>
  <div class="my-card border-1 d-flex flex-column mx-auto position-relative">
    <h3>{{ item.title }}</h3>
    <span>
      <i class="far fa-calendar-alt"></i>
      {{ item.date }}
    </span>
    <p>{{ item.text }}</p>
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
div.my-card {
  @include eventCard;
}
</style>
