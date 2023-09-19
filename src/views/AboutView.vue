<template>
  <NavbarComponent/>
  <ProbeComponent />

  <div class="uk-container uk-margin-large-top">

     <div>
        <ul class="uk-flex ">
          <li v-for="thumbnail in thumbnails" :key="thumbnail.id" class="container uk-padding-small ">
            <figure class="uk-thumbnail uk-inline-clip">
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

      </div>
  </div>

  <p class="uk-text-bold uk-text-center">Follow us @ Instagram</p>

  <FooterComponent />
</template>

<style scoped lang="scss">
.breadcrumb-area {
  background-image: url("../assets/img/bg-img/b1.jpg");
  height: 20rem;
  position: relative;
  z-index: 1;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

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

  .wrapp {
    margin-right: 4rem;
  }

  .meta {
    color: #878787;
  }

  .layer {
    width: 150px;
    height: 200px;
    font-size: 12px;
    padding: 5px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    &:hover {
      background-color: #336b95;
      color: #fff;
      transition: background-color 0.2s ease-in-out;
    }
  }
}

.facts-area {
  background-image: url(../assets/img/bg-img/b2.jpg);
  background-size: cover;
  width: 100%;

  .facts {
    position: relative;
    transform: translateX(50%);
    right: -50%;
    height: 60vh;
    width: 100%;
  }

  .background {
    background-image: url(../assets/img/bg-img/b2.jpg);
  }
}



.post-date {
  position: absolute;
  z-index: 10;
  left: 1rem;
  top: 1rem;
  border: 1px solid #787878;
  background-color: #fff;
  padding: 0.5rem 0.5rem;
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


@media(max-width: 767px) {
  .blog-wrapper {
    flex-direction: column;
  }
  ul {
    flex-direction: column;
  }
}
</style>
<script>
import NavbarComponent from "@/components/Navbar-component.vue";
import ProbeComponent from "@/components/Probe-component.vue";
import FooterComponent from "@/components/Footer-component.vue";

export default {
  components: {FooterComponent, ProbeComponent, NavbarComponent},
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
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis a enim imperdiet accumsan. Fusce gravida elementum orci, eget tristique lectus gravida vel.",
          author: "Ethan Davis",
        },
      ]
    }
  },
}
</script>