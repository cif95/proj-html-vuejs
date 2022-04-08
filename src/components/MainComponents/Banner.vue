<template>
  <section class="p-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-8">
          <h3>Subscribe now to our newsletter!</h3>
        </div>
        <div class="col-4 position-relative">
          <input class="w-100" type="text" placeholder="Email address.." />
          <i class="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
section {
  background-color: $primaryColor;
  h3 {
    font-size: 2.35rem;
    color: white;
  }
  input {
    border: 1px solid white;
    padding: 1.5rem;
    color: $greyTextColor;
    border-radius: 50px;
  }
  i {
    color: white;
    padding: 1.75rem;
    border-radius: 50px;
    font-size: 1.2rem;
    background-color: $secondaryColor;
    transform: translateY(-50%);
    @include position(absolute, 50%, inherit, inherit, 81%);
  }
}
</style>
