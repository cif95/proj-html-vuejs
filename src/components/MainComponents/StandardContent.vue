<template>
  <div class="row py-5">
    <div class="col-6" :class="{ 'order-1': section.textColOrder == 1 }">
      <img
        v-if="section.hasIcon == true"
        class="img-fluid section-icon pb-4"
        :src="require(`../../assets/img/${section.iconPath}`)"
        :alt="section.iconPath"
      />
      <h2>{{ section.title }}</h2>
      <p class="py-3">
        {{ section.text }}
      </p>
      <button class="my-btn my-btn-yellow">{{ section.btnText }}</button>
    </div>
    <div class="col-5 p-5">
      <img
        class="img-fluid"
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

<style lang="scss">
div.row {
  img.section-icon {
    width: 60px;
  }
}
</style>
