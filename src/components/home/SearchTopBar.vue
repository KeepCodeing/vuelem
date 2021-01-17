<template>
  <v-row
    v-show="$route.path.includes('/home/search')"
    align="center"
  >
    <v-col cols="4">
      <v-btn @click="$router.push('/home')" icon>
        <v-icon class="white--text">mdi-keyboard-backspace</v-icon>
        <span class="pl-2 white--text font-weight-bold">返回</span>
      </v-btn>
    </v-col>
    <v-col cols="8">
      <div class="text-left white--text font-weight-bold">搜索商家</div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "SearchTopBar"
  }
</script>

<style scoped>

</style>
