<template>
  <div>
    <Recommend />
    <ProductList />
  </div>
</template>

<script>
  import Recommend from "./Recommend";
  import ProductList from "./ProductList";
  export default {
    name: "Eat",
    components: {
      Recommend,
      ProductList,
    }
  }
</script>

<style scoped>

</style>
