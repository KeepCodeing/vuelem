<template>
  <div>
    <v-card
      tile
      flat
      class="py-4"
    >
      <h4 class="text-center">推荐商家</h4>
    </v-card>
    <v-card
      tile
      flat
      class="pt-4 mb-10"
    >
      <v-row no-gutters>
        <v-col class="text-center grey--text subtitle-2" cols="3" v-for="item in sort_list.parent">
<!--           偷懒写法，不知道为什么...mapState的computed会报一个没注册setter的错，暂且跳过...-->
          <span @click="$store.state.home_store.drawer = !$store.state.home_store.drawer" >
            {{ item.name }}<v-icon size="14" v-if="item.name.includes('综合排序') || item.name.includes('筛选')">mdi-menu-down</v-icon>
          </span>
        </v-col>
        <v-col cols="12">
          <v-list three-line>
            <template v-for="item in shop_list">
              <v-list-item
                :key="item.name"
                @click="$router.push('/details/' + item.id)"
              >
                <v-list-item-avatar
                  tile
                  height="70"
                  width="70"
                >
                  <v-img :src="item.img"/>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    <span style="font-size: 13px" class="yellow font-weight-bold pa-1 mr-2" v-show="item.quality">品牌</span>
                    <span class="font-weight-bold body-2">{{ item.name }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-row
                      no-gutters
                      style="font-size: 10px"
                      class="grey--text"
                    >
                        <v-col cols="4">
                          <v-rating
                            v-model="item.rating"
                            background-color="orange lighten-3"
                            half-increments
                            color="orange"
                            readonly
                            size="5"
                            dense
                          />
                        </v-col>
                        <v-col cols="5">
                          <span class="pr-1">{{ item.rating }}分</span>
                          <span>月销{{ item.count }}单</span>
                        </v-col>
                        <v-col cols="3" ><span v-show="item.speed" class="pa-1 blue white--text text-center">蜂鸟专送</span></v-col>

                        <v-col cols="7" class="pt-2"><span>￥{{ item.pay }}起送 | 配送费￥{{ item.send }}</span></v-col>
                        <v-col cols="5" class="pt-2 text-right"><span>{{ item.far }}km | {{ item.time }}分钟</span></v-col>
                    </v-row>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
            </template>
          </v-list>
          <v-col cols="12">
            <h4 class="text-center grey--text">已经滑到页面的最深处了</h4>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>

  import {GET_SHOP_LIST, GET_SORT_LIST} from "../../store/type";
  import {mapState} from "vuex";

  export default {
    name: "ShopList",
    created() {
      this.$store.dispatch(GET_SORT_LIST);
      this.$store.dispatch(GET_SHOP_LIST);
    },
    computed: {
      ...mapState({
        sort_list: state => state.home_store.sort_list,
        shop_list: state => state.home_store.shop_list,
      }),
    }
  }
</script>

<style scoped>

</style>
