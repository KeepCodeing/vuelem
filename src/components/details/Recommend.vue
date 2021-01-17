<template>
  <div>
    <v-card
      flat
      tile
    >
      <v-container>
        <h3 class="text-body-2 font-weight-bold black--text">商家推荐</h3>
      </v-container>
    </v-card>
    <v-card
      flat
      tile
      style="overflow-x: scroll; overflow-y: hidden"
      min-width="100vw"
    >
      <div style="display: inline-flex">
        <v-card
          flat
          tile
          width="130"
          v-for="i in 10"
          class="mx-2"
        >
          <v-img
            src="https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/wxy.jpg"
          />
          <v-row
            no-gutters
          >
            <v-col cols="12"><h4 style="font-size: 14px" class="black--text darken-1 font-weight-bold">商品名</h4></v-col>
            <v-col cols="12"><h5 style="font-size: 13px" class="grey--text">月销51 好评率100%</h5></v-col>
            <v-col cols="6"><span class="red--text accent-2 body-1">￥19</span></v-col>
            <v-col cols="6" class="text-right"><v-icon class="blue--text">mdi-plus-circle</v-icon></v-col>
          </v-row>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "Recommend"
  }
</script>

<style scoped>

</style>
