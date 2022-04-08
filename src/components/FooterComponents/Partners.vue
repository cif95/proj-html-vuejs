<template>
  <section>
    <div class="container py-5">
      <div class="row text-center justify-content-center">
        <div class="col-12 pb-5">
          <h2 class="py-4">Partners</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy.
          </p>
        </div>
        <div class="col">
          <img
            class="img-fluid mx-4"
            v-for="(el, index) in 8"
            :key="index"
            :src="require(`../../assets/img/partner-${index + 1}.png`)"
            alt="partner logo"
          />
        </div>
      </div>
    </div>
    <div class="wave"></div>
  </section>
</template>

<script>
export default {
  name: "FooterPartners",
};
</script>

<style lang="scss" scoped>
div.wave {
  height: 30vh;
  background-size: cover;
  background-image: linear-gradient(#ffffff26, white),
    url(../../assets/img/background-wave3.png);
  background-color: #f0f0f0;
}
p {
  width: 40%;
  margin: 0 auto;
}
img {
  filter: contrast(0);
  max-width: 190px;
  min-height: 40px;
  max-height: 40px;
}
</style>
