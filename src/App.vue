<template>
  <v-app>

    <v-main class="grey lighten-4">
      <router-view />
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script>
  import BottomNav from "./components/BottomNav";
  import BottomDrawer from "./components/home/BottomDrawer";

  export default {
    name: 'App',

    components: {
      BottomNav,
      BottomDrawer
    },

    created() {

    }
  };
</script>
