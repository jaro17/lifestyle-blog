<script>
export default {
  name: "SingleBlog-component",
  data() {
    return {
      thumbnails: [
        {
          id: 1,
          src: "./src/assets/img/blog-img/3.jpg",
          leadText: "Party people in the house",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis a enim imperdiet accumsan. Fusce gravida elementum orci, eget tristique lectus gravida vel. Integer vitae mi sed magna consectetur feugiat.  ",
          author: "John Doe",
        },
        {
          id: 2,
          src: "./src/assets/img/blog-img/4.jpg",
          leadText: "We love colors in 2018",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis a enim imperdiet accumsan. Fusce gravida elementum orci, eget tristique lectus gravida vel. Integer vitae mi sed magna consectetur feugiat.  ",
          author: "Oliver Thompson",
        },
        {
          id: 3,
          src: "./src/assets/img/blog-img/5.jpg",
          leadText: "10 Tips to organize the perfect party",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis a enim imperdiet accumsan. Fusce gravida elementum orci, eget tristique lectus gravida vel. Integer vitae mi sed magna consectetur feugiat.  ",
          author: "Ethan Davis",
        },
        {
          id: 4,
          src: "./src/assets/img/blog-img/6.jpg",
          leadText: "Party people in the house",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis a enim imperdiet accumsan. Fusce gravida elementum orci, eget tristique lectus gravida vel. Integer vitae mi sed magna consectetur feugiat.  ",
          author: "Mia Johnson",
        },
        {
          id: 5,
          src: "./src/assets/img/blog-img/7.jpg",
          leadText: "We love colors in 2018",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis a enim imperdiet accumsan. Fusce gravida elementum orci, eget tristique lectus gravida vel. Integer vitae mi sed magna consectetur feugiat.  ",
          author: "John Doe",
        },
      ]
    };
  }
}
</script>

<template>
  <div class="uk-container uk-margin-large-top">
    <div class="uk-grid">

      <div class="uk-width-3-4@m uk-flex uk-flex-column ">

        <ul>
          <li v-for="thumbnail in thumbnails" :key="thumbnail.id" class="container">
            <figure class="uk-thumbnail uk-inline-clip    uk-margin-medium uk-padding-medium">
              <img :src="thumbnail.src" width="3000" height="2000" alt="Description">
              <div class="post-date">
                <div class="uk-text-large">10</div>
                <div class="uk-text-uppercase uk-text-small">march</div>
              </div>
            </figure>

            <div class="wrapper">
              <div class="line"></div>
              <p class="uk-text-uppercase">lifestyle</p>
              <div class="uk-text-lead uk-text-bold">{{ thumbnail.leadText }}</div>
              <div class="meta  uk-text-normal">{{ thumbnail.text }}</div>
              <div class="uk-flex uk-margin-small-top uk-text-uppercase uk-flex-between sub-wrapper">
                <div>by <span class="uk-text-bold">{{ thumbnail.author }}</span></div>
                <div>3 comments</div>
              </div>
            </div>
          </li>
        </ul>

        <a class="read-button uk-button uk-button-default uk-width-1-5  uk-box-shadow-medium uk-margin-large-bottom">
          read more
        </a>

      </div>


      <div class="uk-width-1-4@m">
        <div class="side-container uk-margin-top">
          <form>
            <div class="input">
              <input class="uk-input uk-form-blank uk-text-italic" type="text" placeholder="Search" aria-label="Input">
            </div>
            <p class="uk-text-default uk-text-bold uk-margin-medium-top">Subscribe to my newsletter</p>
            <div class="input uk-margin-small-top">
              <input class="uk-input uk-text-italic" type="text" placeholder="Your email here" aria-label="Input">
            </div>
            <button class="subscribe-button uk-button uk-button-default uk-margin-medium-top uk-box-shadow-medium ">Subscribe</button>
          </form>

          <p class="uk-text-default uk-text-bold uk-margin-xlarge-top">Advertisement</p>

          <div class="widget-area">
            <a>
              <img class="uk-padding-remove uk-margin-medium-top" src="../assets/img/bg-img/add.gif" alt="Gif">
            </a>

            <p class="uk-text-default uk-text-bold uk-margin-large-top">Latest Posts</p>

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

          <p class="uk-text-default uk-text-bold uk-margin-large-top">Tags</p>

          <div class="tags-container uk-margin-medium-bottom">
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
  </div>

</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.read-button {
  transition: background-color 0.6s ease, color 0.3s ease;

  &:hover {
    background-color: #314b80;
    color: #fff;
  }
}


img {
  padding: 2rem;
}

.post-date {
  position: absolute;
  z-index: 10;
  left: 3rem;
  top: 3rem;
  border: 1px solid #787878;
  background-color: #fff;
  padding: 1rem 0.5rem;
  text-align: center;
}

.wrapper {
  padding: 2rem;

  .line {
    background-color: #c8c8c8;
    width: 1.6rem;
    height: 2px;
  }

  .sub-wrapper {
    font-size: 0.7rem;
  }
}

.side-container {
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
      margin: 0.5rem;
    }
  }
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

.tags-container {
  a {
    &:hover {
      background-color: #314b80;
      color: #fff;
    }
  }
}

.container {
  display: flex;
  flex-direction: row;
}


@media(max-width: 767px) {
  .container {
    flex-direction: column;

    .wrapper {
      margin-top: -2rem;
    }
  }

  .read-button {
    margin: 0 auto;
    width: 12rem;
  }

  .side-container {
    .subscribe-button {
      position: relative;
      transform: translateX(-50%);
      right: -50%;

    }
  }

  .widget-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

}


</style>