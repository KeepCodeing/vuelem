<template>
  <div>
    <Carousels />
    <HomeMenu />
    <ShopList />
    <BottomDrawer />
  </div>

</template>

<script>
  import Carousels from "./Carousels";
  import HomeMenu from "./HomeMenu";
  import ShopList from "./ShopList";
  import BottomDrawer from "./BottomDrawer";

  export default {
    name: "HomeMain",
    components: {
      Carousels,
      HomeMenu,
      ShopList,
      BottomDrawer,
    }
  }
</script>

<style scoped>

</style>
