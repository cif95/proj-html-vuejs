<template>
  <section id="fees">
    <div class="container">
      <StandardContent :section="this.content" />
    </div>
  </section>
</template>

<script>
import StandardContent from "../SectionsContents/StandardContent.vue";

export default {
  name: "SectionFees",
  components: {
    StandardContent,
  },
  data() {
    return {
      content: {
        hasIcon: true,
        iconPath: "Exam-icon-1.png",
        imgPath: "Girl-Illustration.png",
        title: "Variable fee for international students",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
        btnText: "List of Fees",
        btnColor: "primary",
        textColOrder: 1,
      },
    };
  },
};
</script>

<style></style>
