<template>
  <v-card
    flat
    tile
  >
    <SellerRating />
  </v-card>
</template>

<script>
  import SellerRating from "./SellerRating";
  export default {
    name: "Comment",
    components: {
      SellerRating,
    }
  }
</script>

<style scoped>

</style>
