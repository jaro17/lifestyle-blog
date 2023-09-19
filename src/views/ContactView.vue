<script>
import NavbarComponent from "@/components/Navbar-component.vue";
import ContactComponent from "@/components/Contact-component.vue";
import FooterComponent from "@/components/Footer-component.vue";

export default {
  name: "ContactView",
  components: {FooterComponent, ContactComponent, NavbarComponent}
}
</script>

<template>
  <NavbarComponent />
  <ContactComponent />
  <FooterComponent />

</template>

<style scoped lang="scss">

</style>