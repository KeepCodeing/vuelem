<template>
  <v-card
    flat
    tile
    color="grey lighten-4"
  >
    <SellerRating />
    <CommentList />
  </v-card>
</template>

<script>
  import SellerRating from "./SellerRating";
  import CommentList from './CommentList'

  export default {
    name: "Comment",
    components: {
      SellerRating,
      CommentList,
    }
  }
</script>

<style scoped>

</style>
