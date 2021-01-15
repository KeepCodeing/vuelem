<template>
  <!--  选择城市的顶部导航  -->
  <v-row
    class="pt-6"
    align="center"
    v-show="$route.path.includes('/home/city')"
  >
    <v-col cols="12">
      <v-text-field
        filled
        flat
        dense
        hide-details
        rounded
        placeholder="请输入城市名"
        v-model="city_name"
      >
        <span
          slot="append-outer"
          class="blue--text"
          style="width: 45px"
          @click="chooseCity(city_name)"
        >{{ city_name ? '确定' : '取消' }}</span>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "CityTopBar",
    methods: {
      chooseCity(city_name) {
        this.$router.push('/home/address');
        if (!city_name) return;
        // 没有针对addressComponent.city是undefined的情况进行处理...
        this.address['addressComponent']['city'] = city_name;
      }
    },
    data() {
      return {
        city_name: '',
      }
    },
    computed: {
      ...mapState({
        address: state => state.home_store.location,
      }),
    }
  }
</script>

<style scoped>

</style>
