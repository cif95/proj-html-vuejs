<template>
  <section id="methods">
    <div class="container">
      <StandardContent :section="this.content" />
    </div>
  </section>
</template>

<script>
import StandardContent from "./StandardContent.vue";

export default {
  name: "SectionMethods",
  components: {
    StandardContent,
  },
  data() {
    return {
      content: {
        hasIcon: true,
        iconPath: "Exam-icon.png",
        imgPath: "Exam-Illustration.png",
        title: "The most efficient examination method",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
        btnText: "Discover the method",
        btnColor: "primary",
        textColOrder: 0,
      },
    };
  },
};
</script>

<style></style>
