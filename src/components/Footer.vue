<template>
  <footer>
    <Partners />
    <FooterNav />
  </footer>
</template>

<script>
import Partners from "./FooterComponents/Partners.vue";
import FooterNav from "./FooterComponents/FooterNav.vue";

export default {
  name: "IndexFooter",
  components: {
    Partners,
    FooterNav,
  },
};
</script>

<style></style>
