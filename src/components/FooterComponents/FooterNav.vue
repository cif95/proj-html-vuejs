<template>
  <section>
    <div class="container p-5">
      <div class="row pt-5">
        <div class="col-4 d-flex flex-column">
          <img
            class="img-fluid w-75"
            src="../../assets/img/theme_eduprime_logo.png"
            alt="edu prime logo"
          />
          <p class="py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            corrupti quasi odit vero.
          </p>
          <div id="socials" class="d-flex">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div class="col-2">
          <h5>Get Edu Prime</h5>
          <ul>
            <li v-for="(link, index) in this.getEduLinks" :key="index">
              <a :href="link.href">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <h5>Networking</h5>
          <ul>
            <li v-for="(link, index) in this.networkingLinks" :key="index">
              <a :href="link.href">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-4">
          <div id="search-categories">
            <input class="w-100" type="text" placeholder="Search ..." />
            <i class="fas fa-search my-input-icon"></i>
          </div>
          <div id="categories" class="text-end py-5">
            <h6 class="mb-4">Search categories</h6>
            <button
              v-for="(category, index) in this.categories"
              :key="index"
              class="my-btn my-btn-outline text-uppercase mb-2 ms-2"
            >
              {{ category }}
            </button>
            <p class="pt-4">ModelTheme.All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      getEduLinks: [
        {
          text: "Request a website",
          href: "#",
        },
        {
          text: "Browse Themese",
          href: "#",
        },
        {
          text: "Payment options",
          href: "#",
        },
        {
          text: "Support Systems",
          href: "#",
        },
        {
          text: "Checkout",
          href: "#",
        },
        {
          text: "Purchase Theme",
          href: "#",
        },
      ],
      networkingLinks: [
        {
          text: "Purchase Theme",
          href: "#",
        },
        {
          text: "Our benefits",
          href: "#",
        },
        {
          text: "Our team",
          href: "#",
        },
        {
          text: "Our services",
          href: "#",
        },
        {
          text: "Other Products",
          href: "#",
        },
        {
          text: "My account",
          href: "#",
        },
      ],
      categories: [
        "Economy",
        "Design",
        "Coaching",
        "Business",
        "Medicine",
        "Law",
        "Fitness",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_mixins.scss";
section {
  color: white;
  padding-top: 2.5rem;
  background-color: $primaryColor;
  div#socials i {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    line-height: 47px;
    font-size: 1.15rem;
    text-align: center;
    border: 2px solid $secondaryColor;
    border-radius: 50px;
    &:hover {
      transition: all 0.5s ease-in-out;
      background-color: $secondaryColor;
    }
  }
  ul {
    @include custom-list(white);
    line-height: 2.25rem;
    padding-top: 1rem;
    li:hover a {
      color: $secondaryColor;
      transition: all 0.2s ease-in-out;
    }
  }
  div#search-categories {
    position: relative;
    input {
      @include myInput;
    }
    i {
      @include myInputIcon;
    }
  }
  div#categories {
    button.my-btn-outline {
      font-weight: 400;
      padding: 0.45rem 0.85rem;
      font-size: 0.8rem;
      font-family: "Source Sans Pro", sans-serif;
    }
    p {
      color: $secondaryColor;
    }
  }
}
</style>
