<template>
  <div>
    <v-carousel
      cycle
      height="150"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item
        v-for="url in carousel_list.url"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-img :src="url" />
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import {GET_CAROUSEL_LIST} from "../../store/type";
  import {mapState} from "vuex";

  export default {
    name: "Carousels",
    computed: {
      ...mapState({
        carousel_list: state => state.home_store.carousel_list,
      })
    },
    created() {
      this.$store.dispatch(GET_CAROUSEL_LIST);
    },
  }
</script>

<style scoped>

</style>
