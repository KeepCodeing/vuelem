<template>
  <v-app-bar
    flat
    app
    :class="$route.path.includes('/home/city') ? 'white' : 'blue'"
    :height="$route.path === '/home/main' ? 90 : 50"
  >
<!--    用v-show隐藏了地址页面不需要的导航...-->
    <HomeTopBar />
    <AddressTopBar />
    <CityTopBar />
    <SearchTopBar />
  </v-app-bar>

</template>

<script>
  import {GET_LOCATION} from "../../store/type";
  import HomeTopBar from "./HomeTopBar";
  import AddressTopBar from "./AddressTopBar";
  import CityTopBar from "./CityTopBar";
  import SearchTopBar from "./SearchTopBar";

  export default {
    name: "TopBar",
    components: {
      HomeTopBar,
      AddressTopBar,
      CityTopBar,
      SearchTopBar,
    },
    created() {
      this.$store.dispatch(GET_LOCATION);
    },
  }
</script>

<style scoped>

</style>
