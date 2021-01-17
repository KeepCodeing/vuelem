<template>
  <v-bottom-navigation
    grow
    style="box-shadow: none"
    color="primary"
    light
    fixed
    v-show="$route.path.includes('/home')"
  >
    <v-btn :to="item.url" style="height: auto;" v-for="item in items" class="white ">
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  import {GET_NAV_BAR} from "../store/type";
  import {mapState} from "vuex";

  export default {
    name: "BottomNav",
    computed: {
      ...mapState({
        items: state => state.home_store.nav_bar,
      }),
    },
    created() {
      this.$store.dispatch(GET_NAV_BAR);
    }
  }
</script>

<style scoped>

</style>
