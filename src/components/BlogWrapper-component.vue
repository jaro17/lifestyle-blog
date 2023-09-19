<script>
export default {
  name: "BlogWrapper-component"
}
</script>

<template>
  <div class="uk-container">
    <div class="blog-wrapper uk-child-width-expand uk-flex uk-flex-center" uk-grid>
      <div class=" uk-width-1-1@s uk-width-1-3@m">
        <div class="line"></div>
        <p class="uk-text-uppercase">lifestyle</p>
        <div class="uk-text-lead uk-text-bold">Welcome to this Lifestyle blog</div>
        <div class="meta uk-margin-small-top uk-text-normal">Curabitur venenatis efficitur lorem sed tempor. Integer aliquet
          tempor cursus. Nullam
          vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.
          Morbi sodales, dolor id ultricies dictum
        </div>

        <div class="uk-flex uk-flex-center">
          <button class="uk-button uk-button-default uk-margin-medium-top uk-box-shadow-medium">read more</button>
        </div>

      </div>
      <div class="uk-width-1-3@m uk-flex uk-flex-center">
        <div class="uk-inline">
          <img src="../assets/img/blog-img/1.jpg" width="300" height="200" alt="">
          <div style="background-color: black; color: #fff"
              class="uk-position-large uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle uk-text-uppercase uk-text-small uk-text-bold">
            lifestyle posts
          </div>
        </div>
      </div>
      <div class="uk-width-1-3@m uk-flex uk-flex-center">
        <div class="uk-inline">
          <img src="../assets/img/blog-img/2.jpg" width="300" height="200" alt="">
          <div style="background-color: black; color: #fff"
              class="uk-position-large uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle uk-text-uppercase uk-text-small uk-text-bold">
            lifestyle posts
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-wrapper {
  margin-top: 3rem;

  .line {
    background-color: #c8c8c8;
    width: 1.6rem;
    height: 2px;
  }

  p {
    color: #c8c8c8;
  }

  .meta {
    color: #878787;
  }

  button {
    &:hover {
      background-color: #336b95;
      color: #fff;
      transition: background-color 0.2s ease-in-out;
    }
  }
}

@media(max-width: 767px) {
  .blog-wrapper {
    flex-direction: column;
  }
}
</style>