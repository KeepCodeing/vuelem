<template>
  <v-navigation-drawer
    temporay
    bottom
    v-model="$store.state.details_store.product_drawer"
    fixed
    hide-overlay
  >
    <v-list-item class="grey lighten-3 grey--text text--darken-3">
      <span>已选商品</span>
      <v-spacer />
      <span
        @click="clearProductList"
        style="font-size: 13px"
      >
        <v-icon style="font-size: 14px">mdi-trash-can-outline</v-icon>清空
      </span>
    </v-list-item>

    <v-divider />

    <v-list
      dense
    >
      <!--    这里没有把商品和统计独立出来，算是一个设计错误，所以这里
              针对整个cart_list的key进行特殊处理，即不渲染两个统计对象..
        -->
      <template
        v-for="key in Object.keys(cart_list)"
      >
        <v-list-item
          v-if="!key.includes('total') && cart_list[key].count > 0"
        >
          <v-row
            class="text-body-2"
            no-gutters
          >
            <v-col cols="6" class="font-weight-bold">
              {{ key }}
            </v-col>
            <v-col
              cols="3"
              class="red--text"
            >￥{{ cart_list[key].pay }}</v-col>
            <v-col cols="1">
              <v-icon
                @click="minus_product(key)"
                right
                class="blue--text"
              >mdi-minus-circle</v-icon>
            </v-col>
            <v-col cols="1" class="text-center">
              <span>{{ cart_list[key].count }}</span>
            </v-col>
            <v-col cols="1">
              <v-icon @click="plus_product(key)" left class="blue--text">mdi-plus-circle</v-icon>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider v-if="!key.includes('total') && cart_list[key].count > 0" />
      </template>
    </v-list>
    <ShopCar />
  </v-navigation-drawer>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopCar from "./ShopCar";

  export default {
    name: "ProductDrawer",
    components: {
      ShopCar,
    },
    methods: {
      clearProductList() {
        if (!this.cart_list['total_count']) return;
        for (let item in this.cart_list) {
          if (item.includes('total')) {
            this.$set(this.cart_list, item, 0);
          } else {
            this.$set(this.cart_list, item, {
              count: 0,
              pay: 0,
            });
          }

        }
      },
      minus_product(key) {
        let item_pay = this.cart_list[key]['pay'] / this.cart_list[key]['count'];
        this.$set(this.cart_list, key, {
          count: this.cart_list[key]['count'] - 1,
          pay: this.cart_list[key]['pay'] - item_pay,
        });
        this.$set(this.cart_list, 'total_count', this.cart_list['total_count'] - 1);
        this.$set(this.cart_list, 'total_pay', this.cart_list['total_pay'] - item_pay);
      },
      plus_product(key) {
        let item_pay = this.cart_list[key]['pay'] / this.cart_list[key]['count'];
        this.$set(this.cart_list, key, {
          count: this.cart_list[key]['count'] + 1,
          pay: this.cart_list[key]['pay'] + item_pay,
        });
        this.$set(this.cart_list, 'total_count', this.cart_list['total_count'] + 1);
        this.$set(this.cart_list, 'total_pay', this.cart_list['total_pay'] + item_pay);
      }
    },
    computed: {
      ...mapState({
        cart_list: state => state.details_store.cart_list,
      }),
    },
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>

<style scoped>

</style>
