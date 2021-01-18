<template>
  <div>
    <Recommend />
    <ProductList />
  </div>
</template>

<script>
  import Recommend from "./Recommend";
  import ProductList from "./ProductList";
  import {GET_PRODUCT_DETAILS} from "../../store/type";
  export default {
    name: "Eat",
    created() {
      this.$store.dispatch(GET_PRODUCT_DETAILS);
    },
    components: {
      Recommend,
      ProductList,
    }
  }
</script>

<style scoped>

</style>
