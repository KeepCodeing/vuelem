<template>
  <div>
    <Recommend />
    <ProductList />
    <ProductDrawer />
  </div>
</template>

<script>
  import Recommend from "./Recommend";
  import ProductList from "./ProductList";
  import ProductDrawer from "./ProductDrawer";
  import {GET_PRODUCT_DETAILS} from "../../store/type";
  export default {
    name: "Eat",
    created() {
      this.$store.dispatch(GET_PRODUCT_DETAILS);
    },
    components: {
      Recommend,
      ProductList,
      ProductDrawer
    }
  }
</script>

<style scoped>

</style>
