<script>
export default {
  name: "Probe-component",
  data() {
    return {
      numbers: [0, 0, 0, 0],
      labels: ["Awards won", "FB Followers", "Team Members", "Coffees/Day"],
    };
  },
  mounted() {
    setTimeout(() => {
      this.incrementAllNumbers();
    }, 500);
  },
  methods: {
    incrementAllNumbers() {
      const targetValues = [25, 12, 9, 16]; // Set the target values for all numbers
      const promises = targetValues.map((targetValue, index) => {
        return new Promise((resolve) => {
          this.incrementNumber(index, targetValue, resolve);
        });
      });

      Promise.all(promises).then(() => {
        // All numbers have reached their target values
        console.log("All numbers incremented.");
      });
    },
    incrementNumber(index, targetValue, resolve) {
      const incrementStep = 1;
      const delay = 50; // 0.5 seconds

      const increment = () => {
        if (this.numbers[index] < targetValue) {
          this.numbers[index] += incrementStep;
          setTimeout(increment, delay);
        } else {
          resolve(); // Resolve the promise for this number
        }
      };

      increment();
    },
  },
};
</script>

<template>
  <div class="uk-child-width-expand ">
    <div
        class="cover uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle uk-margin-large-top">
      <div class="content uk-flex uk-flex-column uk-text-center">
        <div class="hr"></div>
        <div class="title uk-text-large uk-text-bold">Welcome to this Lifestyle blog</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer
          accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque
          molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend
          fermentum. Donec sagittis lacus sit amet augue sodales, vel cursus enim tristique. Maecenas vitae massa ut est
          consectetur sagittis quis vitae tortor. Sed et massa vel.
        </p>

        <div class="statistics uk-flex uk-flex-center uk-flex-between">
          <div class="uk-flex uk-flex-column" v-for="(number, index) in numbers" :key="index">
            <div class="number">{{ number }}</div>
            <p>{{ labels[index] }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.cover {
  background-image: url('../assets/img/bg-img/b2.jpg');
  height: 100vh;
  color: #fff;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    color: #fff;
    //top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  .statistics {
    width: 80%;
    margin: 4rem auto;

    .number {
      font-size: 4rem;
      font-weight: bold;
      transition: all 0.5s ease;
    }

    p {
      font-weight: bold;
      margin-top: -0.5rem;
    }
  }
}

.content {
  width: 70%;
}

.hr {
  height: 3px;
  width: 3rem;
  background-color: #fff;
  margin: 2rem auto;
}
</style>