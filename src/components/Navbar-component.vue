<script>
import 'animate.css';

export default {
  name: "Navbar-component",
  data() {
    return {
      texts: ['Hello world!', 'Hello universe!', 'Hello earth!', 'Hello original!', 'Hello colorlib!'],
      currentTextIndex: 0,
      currentText: 'Hello earth!'
    }
  },
  methods: {
    preventDefault(e) {
      e.preventDefault();
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.currentTextIndex];
    }, 3000);
  }
}
</script>

<template>
  <header>
    <div class="uk-container">

      <div class="top-header">
        <h5 class="animate__animated animate__pulse" :key="currentText">{{ currentText }}</h5>
        <div class="icons-container">
          <a href="" uk-icon="icon: pinterest; ratio: 0.7" @click="preventDefault"></a>
          <a href="" uk-icon="icon: facebook; ratio: 0.7" @click="preventDefault"></a>
          <a href="" uk-icon="icon: twitter; ratio: 0.7" @click="preventDefault"></a>
          <a href="" uk-icon="icon: dribbble; ratio: 0.7" @click="preventDefault"></a>
          <a href="" uk-icon="icon: behance; ratio: 0.7" @click="preventDefault"></a>
          <a href="" uk-icon="icon: linkedin; ratio: 0.7" @click="preventDefault"></a>
        </div>
      </div>
      <hr>

      <div class="logo-area uk-margin-medium-top uk-margin-medium-bottom">
        <a href="#" class="original-logo">
          <img src="../assets/img/core-img/logo.png" alt="Logo">
        </a>
      </div>
      <hr>

      <nav>
        <!--      <nav class="uk-navbar-container uk-navbar-transparent">-->

        <div uk-navbar class="navbar" uk-sticky>
          <div class="navbar-items uk-flex uk-flex-between">
            <div class="uk-navbar-left">

              <div class="uk-navbar-nav">
                <button class="uk-button uk-button-secondary">Subscribe</button>
              </div>
            </div>

            <div class="uk-navbar-right">

              <ul class="uk-navbar-nav">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <a>Pages</a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <router-link to="/">Home</router-link>
                      </li>
                      <li>
                        <router-link to="/about">About us</router-link>
                      </li>
                      <li>
                        <router-link to="/single-post">Single Post</router-link>
                      </li>
                      <li>
                        <router-link to="/contact">Contact</router-link>
                      </li>
                      <li>
                        <router-link to="/coming">Coming Soon</router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <router-link to="/about">About Us</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
                <div>
                  <a class="uk-navbar-toggle" href="#" uk-search-icon></a>
                  <div class="uk-navbar-dropdown"
                       uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !.uk-navbar; flip: false">

                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-expand">
                        <form class="uk-search uk-search-navbar uk-width-1-1">
                          <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search"
                                 autofocus>
                        </form>
                      </div>
                      <div class="uk-width-auto">
                        <a class="uk-drop-close" href="#" uk-close></a>
                      </div>
                    </div>

                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative;

  .top-header, .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;

    h5 {
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }

    .icons-container {
      a {
        margin-left: 1.5rem;
        color: #000;

        &:hover {
          color: #000;
        }
      }
    }
  }

  .navbar {
    position: absolute;
    left: 0;
    right: 0;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    background: #fff;

    a {
      color: #000;
    }
  }

  hr {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: -0.1rem;
  }
}

.logo-area {
  text-align: center;
}

nav {
  background-color: #fff;
}

.navbar-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .top-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icons-container {
      margin-top: 0.6rem;
    }
  }
}

@media (max-width: 640px) {
  .navbar-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
}

@media (max-width: 640px) {
  .uk-navbar-right {
    margin: 0 auto;
  }
}

</style>