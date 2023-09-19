<script>
import FooterComponent from "@/components/Footer-component.vue";

export default {
  name: "SinglePost",
  components: {FooterComponent},
  data() {
    return {
      posts: [
        {
          id: 1,
          src: "./src/assets/img/bg-img/b7.jpg",
          date: "march 12",
          name: "William James",
          comment: "Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.\n" +
              "\n",
        },
        {
          id: 2,
          src: "./src/assets/img/bg-img/b7.jpg",
          date: "march 12",
          name: "John Doe",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
          id: 3,
          src: "./src/assets/img/bg-img/b7.jpg",
          date: "march 12",
          name: "Peter Smith",
          comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
      ]
    }
  },
}
</script>

<template>

  <div class="parent-container">
    <div class="image"></div>
  </div>

  <div class="uk-container uk-container-medium uk-margin-large-bottom">

    <div class="uk-grid">

      <div class="uk-width-3-4@m left-side uk-flex uk-flex-column">

        <div class="line"></div>
        <div class="uk-text-uppercase uk-text-small" style="color: #b9b4b4;">lifestyle</div>
        <div class="uk-text-bold uk-text-large uk-margin-small-top">Party people in the house</div>
        <div class="uk-flex uk-margin-small-top">
          <div class="uk-text-uppercase uk-text-small uk-margin-right" style="color: #b9b4b4;">by</div>
          <div class="uk-text-uppercase uk-text-small uk-text-bold uk-margin-right ">james smith</div>
          <div class="uk-text-uppercase uk-text-small" style="color: #b9b4b4;">3 comments</div>
        </div>

        <p>
          Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis
          risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Nullam vestibulum
          convallis risus vel condimentum. Nullam auctor lorem in libero. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit
          ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus
          metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum. Donec sagittis lacus sit amet augue
          sodales, vel cursus enim tristique. Maecenas vitae massa ut est consectetur sagittis quis vitae tortor. Sed et
          massa vel nisi dapibus pretium et et leo.
        </p>

        <p>
          Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis
          risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor
          id ultricies dictum, diam odio tempor purus, at ultrices elit nulla ac nisl. Vestibulum enim sapien, blandit
          finibus elit vitae, venenatis tempor enim. Ut varius eros at fringilla aliquet. Sed sed sodales quam. Nam
          fermentum sed turpis sollicitudin lobortis.
        </p>

        <p>
          Proin a nibh dignissim, volutpat mauris vitae, pellentesque nisi. In euismod non ligula at gravida. Nunc
          blandit eget enim vel mattis. Sed semper, purus ac suscipit scelerisque, eros dui fermentum tortor, vitae
          facilisis lacus nulla sit amet diam. Nullam eget sagittis mi. Suspendisse vitae volutpat lorem. Cras porta
          velit id sagittis ultrices. Maecenas efficitur tellus ac aliquam molestie. Morbi vel ipsum gravida, ultricies
          nunc sed, posuere purus. Donec ipsum lectus, congue ut fermentum vitae, molestie hendrerit erat. Sed lacinia
          accumsan egestas. Cras ac ipsum a ante placerat pellentesque.
        </p>

        <hr class="uk-margin-medium-top">

        <div class="uk-flex uk-margin-medium-top">
          <div>
            <img class="uk-border-circle " src="../assets/img/bg-img/b6.jpg" width="260" height="260" alt="Man">
          </div>
          <div class="uk-flex uk-flex-column uk-margin-left">
            <div class="line"></div>
            <div class="uk-text-uppercase uk-text-small" style="color: #b9b4b4;">author</div>
            <a class="uk-text-bold uk-text-large uk-margin-small-top">James Morrison</a>
            <p>
              Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis
              risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Nullam
              vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero.
            </p>
          </div>
        </div>

        <hr class="uk-margin-medium-top">

        <div class="uk-text-default uk-text-bold uk-margin-medium-top">Comments</div>


        <div class="comments uk-flex uk-margin-large-top uk-container uk-container-large">

          <ul class="">
            <li v-for="post in posts" :key="post.id" class="uk-flex uk-margin-medium-top"
                :style="{ 'margin-left': post.id % 2 === 0 ? '3rem' : '0' }">
              <div>
                <img class="uk-border-circle uk-preserve-width" width="100" height="100" :src="post.src"
                     alt="Account Photo">
              </div>
              <div class="uk-margin-medium-left">
                <div class="line"></div>
                <div class="uk-text-uppercase uk-text-small" style="color: #b9b4b4;">{{ post.date }}</div>
                <a class="uk-text-bold  uk-margin-small-top">{{ post.name }}</a>
                <p>{{ post.comment }}</p>
              </div>
            </li>
          </ul>

        </div>

        <hr class="uk-margin-xlarge-top">

        <div class="uk-text-default uk-text-bold uk-margin-medium-top">Leave a reply</div>

        <div class="form uk-flex uk-flex-column uk-margin-medium-top">
          <div class="form-group uk-flex uk-flex-between uk-flex-middle uk-child-width-3-4">
            <div class="uk-margin uk-pad uk-margin-right">
              <input class="uk-input" type="text" placeholder="Name" aria-label="Input">
            </div>
            <div class="uk-margin uk-margin-left">
              <input class="uk-input" type="text" placeholder="Email" aria-label="Input" style="margin-bottom: 1rem">
            </div>
          </div>
          <div>
            <input class="uk-input uk-margin-medium-bottom" type="text" placeholder="Subject" aria-label="Input">
          </div>
          <div>
            <textarea class="uk-textarea">Comment</textarea>
          </div>
        </div>

        <button class="button uk-button uk-width-1-5  uk-box-shadow-medium uk-button-default uk-button-large uk-box-shadow-medium uk-margin-medium-top">
          reply
        </button>

      </div>

      <div class="uk-width-1-4@m right-side">
        <input class="uk-input first-input uk-text-italic" type="text" placeholder="Search" aria-label="Input">
        <div class="uk-text-bold uk-margin-medium-top">Subscribe to my newsletter</div>
        <input class="uk-input second-input uk-text-italic uk-margin-medium-top" type="text"
               placeholder="Your email here" aria-label="Input">
        <button class="button uk-button uk-button-default uk-button-large uk-box-shadow-medium uk-margin-medium-top uk-align-center@s">
          subscribe
        </button>

        <div class="uk-text-default uk-text-bold uk-margin-medium-top">Advertisement</div>

        <div class="widget-area">
          <a>
            <img class="uk-padding-remove uk-margin-medium-top" src="../assets/img/bg-img/add.gif" alt="Gif">
          </a>

          <div class="uk-text-default uk-text-bold uk-margin-large-top">Latest Posts</div>

          <div class="widget-content uk-margin-medium-top uk-flex">
            <div class="post-thumbnail">
              <img class="uk-padding-remove" src="../assets/img/blog-img/lp1.jpg" width="120" height="120"
                   alt="Thumbnail">
            </div>
            <div class="post-content uk-margin-left">
              <p class="uk-text-muted uk-text-uppercase uk-margin-remove uk-text-bold">
                Lifestyle</p>
              <a class="uk-text-bold uk-margin-small" style="line-height: 20px">Party people in the house</a>
              <p class="uk-text-muted  uk-margin-small uk-text-small" style="font-size: 10px">12 MARCH</p>
            </div>
          </div>

          <div class="widget-content uk-margin-medium-top uk-flex">
            <div class="post-thumbnail">
              <img class="uk-padding-remove" src="../assets/img/blog-img/lp2.jpg" width="120" height="120"
                   alt="Thumbnail">
            </div>
            <div class="post-content uk-margin-left">
              <p class="uk-text-muted uk-text-uppercase uk-margin-remove uk-text-bold">
                Lifestyle</p>
              <a class="uk-text-bold uk-margin-small" style="line-height: 20px">A sunday in the park</a>
              <p class="uk-text-muted  uk-margin-small uk-text-small" style="font-size: 10px">12 MARCH</p>
            </div>
          </div>

          <div class="widget-content uk-margin-medium-top uk-flex">
            <div class="post-thumbnail">
              <img class="uk-padding-remove" src="../assets/img/blog-img/lp3.jpg" width="120" height="120"
                   alt="Thumbnail">
            </div>
            <div class="post-content uk-margin-left">
              <p class="uk-text-muted uk-text-uppercase uk-margin-remove uk-text-bold">
                Lifestyle</p>
              <a class="uk-text-bold uk-margin-small" style="line-height: 20px">Party people in the house</a>
              <p class="uk-text-muted  uk-margin-small uk-text-small" style="font-size: 10px">12 MARCH</p>
            </div>
          </div>

          <div class="widget-content uk-margin-medium-top uk-flex">
            <div class="post-thumbnail">
              <img class="uk-padding-remove" src="../assets/img/blog-img/lp4.jpg" width="120" height="120"
                   alt="Thumbnail">
            </div>
            <div class="post-content uk-margin-left">
              <p class="uk-text-muted uk-text-uppercase uk-margin-remove uk-text-bold">Lifestyle</p>
              <a class="uk-text-bold" style="line-height: 20px">A sunday in the park</a>
              <p class="uk-text-muted  uk-margin-small uk-text-small" style="font-size: 10px">12 MARCH</p>
            </div>
          </div>

        </div>

        <div class="uk-text-default uk-text-bold uk-margin-large-top">Tags</div>

        <div class="tags-container uk-margin-medium-top">
          <a class="uk-button uk-button-default uk-text-lowercase ">design</a>
          <a class="uk-button uk-button-default uk-text-lowercase ">fashion</a>
          <a class="uk-button uk-button-default uk-text-lowercase ">travel</a>
          <a class="uk-button uk-button-default uk-text-lowercase ">music</a>
          <a class="uk-button uk-button-default uk-text-lowercase ">party</a>
          <a class="uk-button uk-button-default uk-text-lowercase ">video</a>
          <a class="uk-button uk-button-default uk-text-lowercase ">photography</a>
          <a class="uk-button uk-button-default uk-text-lowercase">adventure</a>
        </div>


      </div>

    </div>
  </div>

  <hr>

  <FooterComponent />

</template>

<style scoped lang="scss">
.parent-container {
  width: 100vw;
  height: 100vh;
}

.left-side {
  a {
    text-decoration: none;
    color: #000;
  }


.line {
  width: 26px;
  height: 2px;
  background-color: #c8c8c8;
  margin-bottom: 1rem;
}

p {
  color: #b9b4b4;
}

button {
   &:hover {
        background-color: #314b80;
        color: #fff;
      }
}

  .form {
    font-size: 14px;
    font-style: italic;

     input, textarea {
        border: none;
       border-bottom: 1px solid #ddd;
    }
  }

  .form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}

.image {
  background-image: url("../assets/img/bg-img/b5.jpg");
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
}

.right-side {
  .first-input {
    border: none;
    border-bottom: 1px solid #b9b4b4;
  }

  .second-input {
    border: 1px solid #000;
  }

  .widget-content {
    .post-content {
      p {
        font-size: 10px
      }

      a {
        text-decoration: none;
        color: #000;

      }
    }
  }

  button {
   &:hover {
        background-color: #314b80;
        color: #fff;
      }
}

  .tags-container {
    display: flex;
    flex-wrap: wrap;

    a {

      margin: 0.5rem 0.5rem 0.5rem 0;

      &:hover {
        background-color: #314b80;
        color: #fff;
      }
    }
  }
}

@media(max-width: 767px) {
  .left-side {
    .button {
      margin: 0 auto;
      padding: 0.1rem
    }
  }

  .right-side {
    .button {
      margin: 0 auto;
    }
  }
}


</style>