<script>
export default {
  name: 'Footer-component',
  mounted() {
    this.$nextTick(() => {
      if (typeof UIkit !== 'undefined' && this.$refs.slider) {
        // eslint-disable-next-line no-undef
        UIkit.slider(this.$refs.slider, {autoplay: true});
      }
    });
  }
}
</script>

<template>

  <div class="slider-container uk-margin-large-top">
    <div uk-slider="autoplay: true; pause-on-hover: true; autoplay-interval: 2000">

      <div class="uk-slider-container">
        <ul class="uk-slider-items uk-child-width-1-4 uk-grid uk-child-width-1-3@s uk-child-width-1-4@m">

          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/1.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>

          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/2.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>


          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/3.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>

          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/4.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>

          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/5.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>

          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/6.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>

          <li class="single-feed">
            <div class="hover-background">
              <img src="../assets/img/instagram-img/7.png" alt="Instagram Photo">
              <div class="uk-position-center uk-panel">
                <span class="icon" uk-icon="icon: instagram"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <div class="uk-container  uk-margin-large-top uk-margin-medium-bottom">
    <div class="social-container uk-flex uk-flex-middle uk-flex-column">
      <div class="links uk-text-uppercase uk-text-bold uk-margin-large-bottom">
        <a>home</a>
        <a>about us</a>
        <a>lifestyle</a>
        <a>travel</a>
        <a>music</a>
        <a>contact</a>
      </div>
      <div class="social uk-margin-medium-bottom">
         <a  uk-icon="icon: pinterest; ratio: 0.7" class="icon" uk-tooltip="Pinterest"></a>
          <a  uk-icon="icon: facebook; ratio: 0.7" class="icon" uk-tooltip="Facebook"></a>
          <a  uk-icon="icon: twitter; ratio: 0.7" class="icon" uk-tooltip="Twitter"></a>
          <a  uk-icon="icon: dribbble; ratio: 0.7" class="icon" uk-tooltip="Dribbble"></a>
          <a  uk-icon="icon: behance; ratio: 0.7" class="icon" uk-tooltip="Behance"></a>
          <a  uk-icon="icon: linkedin; ratio: 0.7" class="icon" uk-tooltip="LinkedIn"></a>
      </div>
      <div class="copyright uk-text-bold">
        Copyright ©2023 All rights reserved
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
hr {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: -0.1rem;
}

.slider-container {
  ul.uk-slider-items {
    list-style-type: none; // Remove bullet points
    margin: 0; // Remove margins
    padding: 0; // Remove padding

    li.single-feed {
      width: auto; // Set the width to auto, so it only takes up the space it needs
      margin: 0; // Remove any margins
      padding: 0;
      cursor: pointer;

      &:hover .uk-position-center.uk-panel .icon {
        color: #fff;
      }

      .hover-background {
        position: relative;
        display: inline-block;

        img {
          display: block;
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
        }

        &:hover {
          background-color: #314b80;

          img {
            opacity: 0.4;
          }
        }

        .uk-position-center.uk-panel {
          display: none;
        }

        &:hover .uk-position-center.uk-panel {
          display: block;
        }
      }
    }
  }
}

.social-container {
  .links {
    a {
      color: #4f4d4d;
      text-decoration: none;
      margin: 0 1rem;
      font-size: 14px;

      &:hover {
        color: #000;
      }
    }
  }

  .social {
      .icon {
        text-decoration: none;
        margin: 0 1rem;
        color: #000;
      }
    }
    .copyright {
      color: #000;
    }
}
</style>