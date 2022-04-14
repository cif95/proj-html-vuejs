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
        :src="require(`../../../assets/img/${section.iconPath}`)"
        :alt="section.iconPath"
      />
      <h2 :class="getTextSize">
        {{ section.title }}
      </h2>
      <p class="py-3" :class="getTextColor">
        {{ section.text }}
      </p>
      <button
        :class="getBtnColor"
        class="my-btn"
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
      >
        {{ section.btnText }}
      </button>
    </div>
    <div :class="getColSize">
      <img
        class="img-fluid px-2 py-5 w-75"
        :src="require(`../../../assets/img/${section.imgPath}`)"
        :alt="section.imgPath"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "standardContent",
  data() {
    return {
      isActive: false,
    };
  },
  props: ["section"],
  computed: {
    getTextColor() {
      return { "text-lighter": this.section.isSliderItem };
    },
    getTextSize() {
      return { "my-slider-fs": this.section.isSliderItem };
    },
    getBtnColor() {
      if (!this.isActive) {
        return this.section.btnColor == "yellow"
          ? "my-btn-yellow"
          : "my-btn-primary";
      } else {
        return this.section.btnActive == "red" ? "my-btn-red" : "my-btn-yellow";
      }
    },
    getColSize() {
      return this.section.isSliderItem ? "col-5" : "col-6";
    },
  },
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
