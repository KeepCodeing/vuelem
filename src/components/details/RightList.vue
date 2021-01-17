<template>

</template>

<script>
  export default {
    name: "RightList",
    methods: {
      onScroll(e) {

        // console.log(this.$refs['hello']);
        // console.log(e.target.scrollTop);
      },
      t() {
        this.$vuetify.goTo(this.$refs['hello'], {
          container: this.$refs['card'],
          offset: 0
        })
        // this.$refs['card'].$vetify === this.$vuetify
      }
    }
  }
</script>

<style scoped>

</style>
