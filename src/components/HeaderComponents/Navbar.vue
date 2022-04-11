<template>
  <nav class="container-fluid">
    <div class="row p-5">
      <div id="header-logo" class="col-2">
        <img
          class="img-fluid"
          src="../../assets/img/theme_eduprime_logo.png"
          alt="eduprime theme logo"
        />
      </div>
      <div id="header-content" class="col-6 pt-2">
        <ul>
          <li
            v-for="(link, i) in navLinks"
            :key="i"
            :class="{ active: link.active }"
            class="d-flex"
          >
            <a :href="link.href">
              <h6>{{ link.text }}</h6>
            </a>
            <i v-if="link.dropdown" class="fas fa-sort-down ms-2"></i>
          </li>
        </ul>
        <button
          :class="getBtnColor"
          @mouseover="isActive = true"
          @mouseleave="isActive = false"
          class="my-btn text-uppercase"
        >
          View Courses
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      navLinks: [
        {
          text: "Home",
          href: "#",
          dropdown: true,
          active: true,
        },
        {
          text: "Courses",
          href: "#",
          dropdown: true,
          active: false,
        },
        {
          text: "About us",
          href: "#",
          dropdown: false,
          active: false,
        },
        {
          text: "News",
          href: "#",
          dropdown: true,
          active: false,
        },
        {
          text: "Pages",
          href: "#",
          dropdown: true,
          active: false,
        },
        {
          text: "Contact",
          href: "#",
          dropdown: false,
          active: false,
        },
        {
          text: "Purchase",
          href: "#",
          dropdown: false,
          active: false,
        },
      ],
      isActive: false,
    };
  },
  computed: {
    getBtnColor() {
      if (this.isActive) {
        return "my-btn-white";
      } else {
        return "my-btn-yellow";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
nav {
  div.row {
    @include flex(space-between, center, 0);
    #header-content {
      @include flex(flex-end, center, 2rem);
      ul {
        @include custom-list(white);
        @include flex(center, center, 1.5rem);
        li.active,
        li.active a {
          color: $secondaryColor;
        }
      }
    }
  }
}
</style>
