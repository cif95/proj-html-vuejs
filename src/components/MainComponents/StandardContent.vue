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
      <h2 :class="checkTextSize">
        {{ section.title }}
      </h2>
      <p class="py-3" :class="checkTextColor">
        {{ section.text }}
      </p>
      <button :class="checkBtnColor" class="my-btn">
        {{ section.btnText }}
      </button>
    </div>
    <div :class="checkColSize">
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
  computed: {
    checkTextColor() {
      return { "text-lighter": this.section.isSliderItem };
    },
    checkTextSize() {
      return { "my-slider-fs": this.section.isSliderItem };
    },
    checkBtnColor() {
      return this.section.btnColor == "yellow"
        ? "my-btn-yellow"
        : "my-btn-primary";
    },
    checkColSize() {
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
