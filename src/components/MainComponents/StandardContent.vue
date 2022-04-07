<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-6">
        <img
          class="img-fluid section-icon pb-4"
          src="../../assets/img/Books-icon.png"
          alt="books icon"
        />
        <h2>Thousands of courses</h2>
        <p class="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptate dolorem eligendi aut a similique praesentium
          magni perferendis earum animi, sed cum fuga neque, itaque vitae iusto
          sapiente velit natus?
        </p>
        <button class="my-btn my-btn-yellow">Browse through courses</button>
      </div>
      <div class="col-5 p-5">
        <img
          class="img-fluid"
          src="../../assets/img/Graduation-Illustration.png"
          alt="graduation image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "standardContent",
};
</script>

<style lang="scss">
div.row {
  img.section-icon {
    width: 60px;
  }
}
</style>
