<template>
  <div class="my-courses-card text-center">
    <img
      class="img-fluid w-50 p-4"
      :src="require(`../../assets/img/${course.iconPath}`)"
      :alt="course.iconPath"
    />
    <h5>{{ course.title }}</h5>
    <p>
      <i class="far fa-user"></i>
      Teacher : {{ course.teacher }}
    </p>
    <p>
      <i class="far fa-money-bill-alt"></i>
      Price : {{ course.price }}
    </p>
    <button class="my-btn my-btn-primary">
      <i class="far fa-eye"></i>
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
  @include coursesCard;
}
</style>
