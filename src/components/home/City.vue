<template>
  <div>
<!--  当前城市  -->
    <v-card
      flat
      tile
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              当前城市<v-icon>mdi-menu-down</v-icon>
            </v-list-item-subtitle>
            <v-list-item-title class="font-weight-bold">
              {{ address['addressComponent'] !== undefined ? address['addressComponent']['city'] : '加载中' }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
<!--  热门城市  -->
    <v-card
      class="mt-3"
      flat
      tile
    >
      <v-list v-show="address['addressComponent']">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle class="text-center">
              热门城市
            </v-list-item-subtitle>
            <v-row class="mt-3">
              <v-col class="text-center" cols="6" v-for="city in hot_city">
                <v-btn
                  large
                  depressed
                  tile
                  @click="chooseCity(city)"
                >{{ city }}</v-btn>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
<!--   城市列表 -->
    <RightAlphabet />
    <v-card
      tile
      flat
    >
      <div v-if="!city_list.length">
        <v-skeleton-loader
          type="list-item"
          class="mx-auto"
          v-for="i in 10"
        />
      </div>
      <v-list v-for="item in city_list" :id="'city-' + item.initial">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              <a style="text-decoration: none;" class="grey--text" :href="'#city-' + item.initial">{{ item.initial }}</a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="chooseCity(city.name)" style="border-bottom: 1px solid rgba(245, 245, 245, .8)" v-for="city in item.list">
          {{ city.name }}
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import {GET_CITY_LIST, GET_HOT_CITY} from "../../store/type";
  import RightAlphabet from "./RightAlphabet";

  export default {
    name: "City",
    components: {
      RightAlphabet,
    },
    methods: {
      chooseCity(city_name) {
        // 简单的通过更换城市名的方式来切换城市...
        // 这里要在上面的热门城市按钮上加上一个v-show，保证addressComponent加载出来了
        // 才能进行赋值，不然会报个类型错误...
        this.address['addressComponent']['city'] = city_name;
        this.$router.push('/home/address');
      }
    },
    computed: {
      ...mapState({
        address: state => state.home_store.location,
        hot_city: state => state.home_store.hot_city,
        city_list: state => state.home_store.city_list,
      }),
    },
    created() {
      this.$store.dispatch(GET_HOT_CITY);
      this.$store.dispatch(GET_CITY_LIST);
    }
  }
</script>

<style scoped>

</style>
