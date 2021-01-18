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
          v-for="item in product_details.product_list.product"
          class="mx-2"
        >
          <v-img
            :src="item.img"
            height="130"
            @click="show_product(item)"
          />
          <v-row
            no-gutters
          >
            <v-col cols="12"><h4 style="font-size: 14px" class="black--text darken-1 font-weight-bold">{{ item.title }}</h4></v-col>
            <v-col cols="12"><h5 style="font-size: 12px" class="grey--text">月销{{ item.count }}份 好评率{{ item.rating * 100 }}%</h5></v-col>
            <v-col cols="6"><span class="red--text accent-2 body-1">￥{{ item.pay }}</span></v-col>
            <v-col
              cols="2"
              class="text-right"
            ><v-icon
              @click="minus_product(item.title + '推荐', item.pay)"
              v-show="cart_list[item.title + '推荐'] !== undefined && cart_list[item.title + '推荐']['count'] >= 1"
              class="blue--text"
            >mdi-minus-circle</v-icon>
            </v-col>
            <v-col
              class="text-center grey--text"
              cols="2"
            ><span
              style="width:100%; line-height: 27px;"
            >{{ cart_list[item.title + '推荐'] === undefined ? 0 : cart_list[item.title + '推荐']['count']}}</span>
            </v-col>
            <v-col @click="plus_product(item.title + '推荐', item.pay)" cols="2" class="text-right"><v-icon class="blue--text">mdi-plus-circle</v-icon></v-col>
          </v-row>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "Recommend",
    computed: {
      ...mapState({
        product_details: state => state.details_store.product_details,
        cart_list: state => state.details_store.cart_list,
      })
    },
    created() {
      this.product_details.product_list = [];
    },
    methods: {
      show_product(item) {
        // console.log(item);
      },
      plus_product(key, pay) {
        if (!this.cart_list[key]) this.$set(this.cart_list, key, {count: 0, pay: 0});
        this.$set(this.cart_list, key, {
          count: this.cart_list[key]['count'] + 1,
          pay: this.cart_list[key]['pay'] + pay,
        });
        this.$set(this.cart_list, 'total_count', this.cart_list['total_count'] + 1);
        this.$set(this.cart_list, 'total_pay', this.cart_list['total_pay'] + pay);
      },
      minus_product(key, pay) {
        this.$set(this.cart_list, key, {
          count: this.cart_list[key]['count'] - 1,
          pay: this.cart_list[key]['pay'] - pay,
        });
        this.$set(this.cart_list, 'total_count', this.cart_list['total_count'] - 1);
        this.$set(this.cart_list, 'total_pay', this.cart_list['total_pay'] - pay);
      }
    }
  }
</script>

<style scoped>

</style>
