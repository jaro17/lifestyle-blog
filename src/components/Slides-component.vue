<script>
export default {
  name: "Slides-component"
}
</script>

<template>
<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1"  uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true">

    <ul class="uk-slider-items uk-grid uk-grid-match custom-slider">
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../assets/img/bg-img/b1.jpg" width="1600" height="600" alt="">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">LIFESTYLE</h3>
                    <p class="uk-margin-remove">take a look at last night's party!</p>
                </div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../assets/img/bg-img/b2.jpg" width="1600" height="600" alt="">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">LIFESTYLE</h3>
                    <p class="uk-margin-remove">take a look at last night's party!</p>
                </div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../assets/img/bg-img/b3.jpg" width="1600" height="600" alt="">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">LIFESTYLE</h3>
                    <p class="uk-margin-remove">take a look at last night's party!</p>
                </div>
            </div>
        </li>
      <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../assets/img/bg-img/b4.jpg" width="1600" height="600" alt="">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">LIFESTYLE</h3>
                    <p class="uk-margin-remove">take a look at last night's party!</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
</template>

<style scoped lang="scss">
h3 {
  font-size: medium;
}

p {
  text-transform: uppercase;
  font-size: xx-large;
}

.custom-slider {
    .uk-panel {
        height: 600px;

        img {
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>