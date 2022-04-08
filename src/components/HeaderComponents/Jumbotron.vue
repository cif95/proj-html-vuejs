<template>
  <div id="jumbo" class="text-center py-5 mx-auto">
    <!-- content must change on slide  -->
    <h1 class="text-white">Key to your success</h1>
    <p class="py-4 fs-5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      consectetur error fugit ea exercitationem nulla ipsam velit a maxime
      sapiente
    </p>
    <button class="my-btn my-btn-yellow me-5">
      <i class="fas fa-search me-2"></i>
      Search courses
    </button>
    <button class="my-btn my-btn-white">
      <i class="fas fa-user-plus me-2"></i>
      Apply for university
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderJumbo",
};
</script>

<style lang="scss" scoped>
div#jumbo {
  width: 35%;
  h1 {
    padding-top: 4rem;
    font-size: 4rem;
  }
}
</style>
