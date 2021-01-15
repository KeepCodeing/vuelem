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

  export default {
    name: 'App',

    components: {
      BottomNav,
    },

    created() {

    }
  };
</script>
