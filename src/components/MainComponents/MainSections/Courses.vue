<template>
  <section id="courses">
    <div class="container">
      <StandardContent :section="this.sectionContent" />
    </div>
  </section>
</template>

<script>
import StandardContent from "../SectionsContents/StandardContent.vue";

export default {
  name: "SectionCourses",
  components: {
    StandardContent,
  },
  data() {
    return {
      sectionContent: {
        hasIcon: true,
        iconPath: "Books-icon.png",
        imgPath: "Graduation-Illustration.png",
        title: "Thousands of courses",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus voluptate dolorem eligendi aut a similique praesentiu magni perferendis earum animi",
        btnText: "Browse through courses",
        btnColor: "yellow",
        btnActive: "red",
        textColOrder: 0,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
section#courses {
  background-image: url(../../../assets/img/home-background.png);
  background-position: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
