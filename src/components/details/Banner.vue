<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      tile
      flat
      v-if="details['banner'].length !== 0"
    >
      <div style="position: absolute; z-index: 2;">
        <v-btn
          depressed
          tile
          text
        ><v-icon color="black" @click="$router.back()">mdi-keyboard-backspace</v-icon></v-btn>
      </div>
      <v-img
        class="white--text align-end"
        height="150px"
        :src="details['banner'][id].img"
      />
      <v-card-text>
        <v-row
          no-gutters
          style="font-size: 13px"
        >
          <v-col cols="12">
            <h2 class="text-center black--text font-weight-bold">{{ details['banner'][id].name }}</h2>
          </v-col>
          <v-col cols="12">
            <h6 class="text-center my-2">评分{{ details['banner'][id].rating }} 月销{{ details['banner'][id].count }}单 <span v-show="details['banner'][id].speed">蜂鸟专送</span>约{{ details['banner'][id].time }}分钟</h6>
          </v-col>
          <v-col cols="9">
            <span class="red pa-1 white--text mr-1">满减</span>满60减10、满89减25
          </v-col>
          <v-col cols="3">
            <span>4个优惠<v-icon>mdi-menu-down</v-icon></span>
          </v-col>
          <v-col cols="12">
            <span>公告：非常的新鲜，非常的美味！</span>
          </v-col>
          <v-col
            style="font-size: 15px"
            class="mt-3 text-center"
            cols="4"
            v-for="item in [
              {name: '点餐', path: 'eat'},
              {name: '评价', path: 'comment'},
              {name: '商家', path: 'seller'}
              ]">
            <span @click="current_show = item.path" :class="{'blue--text': current_show === item.path}">{{ item.name }}</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-skeleton-loader
      class="mx-auto"
      type="card"
      v-else
    />
    <v-divider />
    <Eat v-show="current_show === 'eat'" />
    <Comment v-show="current_show === 'comment'" />
    <Seller v-show="current_show === 'seller'" />
  </div>
</template>

<script>
  import Eat from "./Eat";
  import Comment from "./Comment";
  import Seller from "./Seller";
  import {GET_PRODUCT_DETAILS} from "../../store/type";
  import {mapState} from "vuex";

  export default {
    name: "Banner",
    components: {
      Eat,
      Comment,
      Seller,
    },
    data() {
      return {
        current_show: 'eat'
      }
    },
    created() {
      this.details['banner'] = [];
      this.$store.dispatch(GET_PRODUCT_DETAILS);
    },
    computed: {
      ...mapState({
        details: state => state.details_store.product_details
      })
    },
    // 这里的这个id只是用来筛选数据的，并没有相应接口，也就是说还是一次性请求的所有数据...
    props: {
      id: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
