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
      <div id="header-content" class="col-9">
        <ul id="my-nav-links">
          <li
            v-for="(link, i) in navLinks"
            :key="i"
            :class="{ active: link.active }"
            class="d-flex"
            @click="updateActive(i)"
            @mouseenter="openDropdown(link)"
            @mouseleave="closeDropdown(link)"
          >
            <a :href="link.href">
              <h6>{{ link.text }}</h6>
              <ul
                id="my-dropdown-links"
                :class="checkDropDown(link) ? 'my-visible' : 'my-invisible'"
              >
                <li v-for="(link, i) in link.dropdown" :key="i">
                  <a :href="link.href">{{ link.text }}</a>
                </li>
              </ul>
            </a>
            <i
              v-if="link.dropdown"
              class="fas fa-sort-down ms-2 fa-2xs pt-2"
            ></i>
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
          isDropdownOpen: false,
          dropdown: [
            {
              text: "Driving School",
              href: "#",
            },
            {
              text: "High School",
              href: "#",
            },
            {
              text: "Kinder Garten",
              href: "#",
            },
          ],
          active: true,
        },
        {
          text: "Courses",
          href: "#",
          isDropdownOpen: false,
          dropdown: [
            {
              text: "Our Courses",
              href: "#",
            },
            {
              text: "Instructor Profile",
              href: "#",
            },
            {
              text: "Become a teacher",
              href: "#",
            },
          ],
          active: false,
        },
        {
          text: "About Us",
          href: "#",
          active: false,
        },
        {
          text: "News",
          href: "#",
          isDropdownOpen: false,
          dropdown: [
            {
              text: "Our Courses",
              href: "#",
            },
            {
              text: "Instructor Profile",
              href: "#",
            },
            {
              text: "Become a teacher",
              href: "#",
            },
          ],
          active: false,
        },
        {
          text: "Pages",
          href: "#",
          isDropdownOpen: false,
          dropdown: [
            {
              text: "Our Courses",
              href: "#",
            },
            {
              text: "Instructor Profile",
              href: "#",
            },
            {
              text: "Become a teacher",
              href: "#",
            },
          ],
          active: false,
        },
        {
          text: "Contact",
          href: "#",
          active: false,
        },
        {
          text: "Purchase",
          href: "#",
          active: false,
        },
      ],
      isActive: false,
      isDropped: false,
    };
  },
  methods: {
    updateActive(i) {
      this.navLinks.forEach((el, index) => {
        if (index === i) {
          el.active = true;
        } else {
          el.active = false;
        }
      });
    },
    openDropdown(link) {
      link.isDropdownOpen = true;
    },
    closeDropdown(link) {
      link.isDropdownOpen = false;
    },
    checkDropDown(link) {
      if (link.isDropdownOpen && link.dropdown) return true;
    },
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
      ul#my-nav-links {
        @include custom-list(white);
        @include flex(center, center, 2rem);
        li.active,
        li.active a,
        li:hover a {
          color: $secondaryColor;
        }
        li a h6 {
          font-size: 1.05rem;
        }
        ul#my-dropdown-links {
          @include dropDown;
        }
      }
    }
  }
}
</style>
