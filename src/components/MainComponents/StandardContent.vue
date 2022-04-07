<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-6">
        <img
          v-if="hasIcon == true"
          class="img-fluid section-icon pb-4"
          :src="require(`../../assets/img/${iconPath}`)"
          :alt="iconPath"
        />
        <h2>{{ title }}</h2>
        <p class="py-3">
          {{ text }}
        </p>
        <button class="my-btn my-btn-yellow">{{ btnText }}</button>
      </div>
      <div class="col-5 p-5">
        <img
          class="img-fluid"
          :src="require(`../../assets/img/${imgPath}`)"
          :alt="imgPath"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "standardContent",
  props: ["iconPath", "imgPath", "title", "text", "btnText", "hasIcon"],
};
</script>

<style lang="scss">
div.row {
  img.section-icon {
    width: 60px;
  }
}
</style>
