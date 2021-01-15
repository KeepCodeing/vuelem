<template>
  <div>
    <TopBar />
    <router-view />
  </div>

</template>

<script>
  import HomeMain from '../components/home/HomeMain'
  import TopBar from "../components/home/TopBar";

  export default {
    name: "Home",
    components: {
      HomeMain,
      TopBar
    }
  }
</script>

<style scoped>

</style>
