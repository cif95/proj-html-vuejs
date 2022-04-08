<template>
  <div class="my-courses-card text-center">
    <img
      class="img-fluid py-4"
      :src="require(`../../assets/img/${course.iconPath}`)"
      :alt="course.iconPath"
    />
    <h5 class="title">{{ course.title }}</h5>
    <p class="teacher mb-2">
      <i class="far fa-user"></i>
      Teacher :<span>{{ course.teacher }}</span>
    </p>
    <p class="price">
      <i class="far fa-money-bill-alt"></i>
      Price : <span>{{ course.price }}</span>
    </p>
    <button class="my-btn my-btn-primary">
      <i class="far fa-eye my-fs-xxs"></i>
      View Courses
    </button>
  </div>
</template>

<script>
export default {
  name: "CoursesCard",
  props: ["course"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
div.my-courses-card {
  @include courseCard;
}
</style>
