<template>
  <!--  选择收获地址的顶部导航  -->
  <v-row
    v-show="$route.path.includes('/home/address')"
    align="center"
  >
    <v-col cols="4">
      <v-btn @click="$router.push('/home')" icon>
        <v-icon class="white--text">mdi-keyboard-backspace</v-icon>
        <span class="pl-2 white--text font-weight-bold">返回</span>
      </v-btn>
    </v-col>
    <v-col cols="8">
      <div class="text-left white--text font-weight-bold">选择收货地址</div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "AddressTopBar"
  }
</script>

<style scoped>

</style>
