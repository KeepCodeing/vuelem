<template>
  <!--  首页的顶部导航  -->
  <v-row
    no-gutters
    class="px-3 py-2 fill-height"
    v-show="$route.path === '/home/main'"
  >
    <v-col cols="12" @click="$router.push('/home/address')">
        <span
          style="line-height: 17px"
          class="white--text font-weight-bold text-subtitle-1"
        >
          <v-icon color="white">mdi-map-marker</v-icon>
          {{ location['formattedAddress'] !== undefined ? location['formattedAddress'].slice(0, 15) : '加载地址中' }}...
          <v-icon color="white">mdi-menu-down</v-icon>
        </span>
    </v-col>
    <v-col cols="12" class="pt-2 text-center">
      <v-btn
        depressed
        rounded
        block
        class="grey--text"
        @click="$router.push('/home/search')"
      >
        <v-icon>mdi-menu-down</v-icon>搜索商家 商家名称
      </v-btn>
<!--      <v-text-field-->
<!--        class="white grey&#45;&#45;text text-subtitle-2 text-center"-->
<!--        hide-details-->
<!--        solo-->
<!--        flat-->
<!--        dense-->
<!--        label="搜索商家 商家名称"-->
<!--      />-->
    </v-col>
  </v-row>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "HomeTopBar",
    computed: {
      ...mapState({
        location: state => state.home_store.location,
      }),
    },
  }
</script>

<style scoped>

</style>
