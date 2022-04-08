<template>
  <div>
    <h2>Faculties available at EduPrime</h2>
    <p class="w-25 mx-auto py-3">
      A single university with a load of courses, tailored to satisfy any
      student’s needs.
    </p>
    <!-- slider -->
    <div class="my-slider">
      <div
        class="my-slider-thumbs"
        :class="{ active: item.active }"
        v-for="(item, index) in this.faculties"
        :key="index"
      >
        <img
          class="mb-3"
          :key="index"
          :src="require(`../../assets/img/${item.thumbIconPath}`)"
          :alt="item.thumbIconAlt"
        />
        <h6>{{ item.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacultiesContent",
  props: ["faculties"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
div.my-slider {
  @include flex(center, center, 0);
  box-shadow: 1px 1px 15px #ececee;
  div.my-slider-thumbs {
    position: relative;
    color: $primaryColor;
    padding: 2.5rem 4.5rem;
    border: 1px solid #ececee;
    img {
      width: 90px;
    }
    &.active {
      color: white;
      background-color: $primaryColor;
      img {
        filter: saturate(0) brightness(2);
      }
    }
    &.active::before {
      content: "";
      width: 0;
      height: 0;
      border: 16px solid transparent;
      border-top: 0;
      border-top: 15px solid $primaryColor;
      display: block;
      transform: translateX(-50%);
      @include position(absolute, 100%, 0, inherit, 50%);
    }
  }
}
</style>
