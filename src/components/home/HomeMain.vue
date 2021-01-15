<template>
  <div>
    <Carousels />
    <HomeMenu />
  </div>

</template>

<script>
  import Carousels from "./Carousels";
  import HomeMenu from "./HomeMenu";

  export default {
    name: "HomeMain",
    components: {
      Carousels,
      HomeMenu,
    }
  }
</script>

<style scoped>

</style>
