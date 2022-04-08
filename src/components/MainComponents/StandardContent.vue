<template>
  <div class="row py-5 justify-content-center">
    <div
      class="col-6"
      :class="{
        'order-1': section.textColOrder == 1,
        'pt-5': section.isSliderItem,
      }"
    >
      <img
        v-if="section.hasIcon == true"
        class="img-fluid section-icon pb-4"
        :src="require(`../../assets/img/${section.iconPath}`)"
        :alt="section.iconPath"
      />
      <h2 :class="{ 'my-slider-fs': section.isSliderItem }">
        {{ section.title }}
      </h2>
      <p class="py-3" :class="{ 'text-lighter': section.isSliderItem }">
        {{ section.text }}
      </p>
      <button
        :class="
          section.btnColor == 'yellow' ? 'my-btn-yellow' : 'my-btn-primary'
        "
        class="my-btn"
      >
        {{ section.btnText }}
      </button>
    </div>
    <div :class="section.isSliderItem ? 'col-5' : 'col-6'">
      <img
        class="img-fluid px-2 py-5 w-75"
        :src="require(`../../assets/img/${section.imgPath}`)"
        :alt="section.imgPath"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "standardContent",
  props: ["section"],
};
</script>

<style lang="scss" scoped>
div.row {
  img.section-icon {
    width: 60px;
  }
  p {
    max-width: 70%;
  }
}
</style>
