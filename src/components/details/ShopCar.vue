<template>
  <div
    class="shop_car_box"
  >
    <v-container
      class="py-0 pr-0"
      fill-height
    >
      <v-row
        no-gutters
        class="fill-height"
        align="end"
      >
        <v-col
          cols="2"
          class="fill-height"
        >
          <div
            class="cart_icon_box"
          >
            <div
              class="cart_icon"
              :class="cart_list['total_pay'] >= min_pay ? 'blue' : 'grey darken-2'"
            >
              <p
                class="text-center"
                style="line-height: 40px"
              >
                <v-icon
                  :class="cart_list['total_pay'] >= min_pay ? 'white--text' : 'grey--text'"
                >mdi-cart-variant</v-icon>
              </p>
            </div>
            <div
              v-show="cart_list['total_count'] !== 0"
              class="cart_icon_count"
            >
              <span>{{ cart_list['total_count'] }}</span>
            </div>
          </div>
        </v-col>
        <v-col
          cols="6"
          class="fill-height pt-2"
        >
          <div style="font-size: 14px" class="white--text">￥{{ cart_list['total_pay'] }}</div>
          <div style="font-size: 12px" class="grey--text">另需配送费{{ send_pay }}元</div>
        </v-col>
        <v-col
          cols="4"
          class="fill-height green lighten-1"
          @click=""
        >
          <v-container class="text-center">
            <span
              class="white--text body-2 font-weight-bold"
            >
              {{ cart_list['total_pay'] < min_pay ? "满" + min_pay + "起送" : "去结算" }}
            </span>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "ShopCar",
    computed: {
      // 用来计算当今用户加入购物车的商品的价格和是否大于最低起送价，不过加了两个总计变量之后就不需要了
      isPayOk: function() {
        // 特判是因为reduce不能遍历空数组
        if (!Object(this.cart_list).length) return false;
        // this.total_pay += this.cart_list[]
        // console.log(this.cart_list);
        // return (this.current_pay = this.cart_list.reduce((sum, now) => sum + now.pay, 0)) >= this.min_pay;
      },
      // 购物车列表放到vuex里了，这里起送价和配送费都是固定的，偷懒w
      ...mapState({
        cart_list: state => state.details_store.cart_list,
      })
    },
    data() {
      return {
        total_pay: 0,
        total_cnt: 0,
        min_pay: 20,
        send_pay: 4.5,
      }
    }
  }
</script>

<style scoped>
  .shop_car_box {
    background-color: rgba(0, 0, 0, 0.6);
    height: 52px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .cart_icon_box {
    background-color: rgba(0, 0, 0, .6);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateY(-15%);
  }
  .cart_icon{
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .cart_icon_count {
    position: absolute;
    min-height: 13px;
    min-width: 13px;
    line-height: 13px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
    color: white;
    background-color: red;
    top: 0;
    right: 0;
  }
</style>
