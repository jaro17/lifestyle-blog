<script>
import NavbarComponent from "@/components/Navbar-component.vue";
import SinglePost from "@/components/SinglePost.vue";

export default {
  name: "SinglePostView",
  components: {SinglePost, NavbarComponent}
}
</script>

<template>

  <NavbarComponent/>
  <SinglePost/>

</template>

<style scoped lang="scss">


</style>