<template>
  <v-sheet
    color="white"
    class="pt-2"
  >
    <v-row
      no-gutters
    >
      <v-col cols="3">
        <v-card
          flat
          tile
          style="overflow-y: scroll"
          max-height="500"
        >
          <v-list
            class="py-0"
          >
            <v-list-item
              @click="scrollTo(title)"
              :class="current_tab === title ? 'white accent-3' : 'grey lighten-3'"
              v-for="title in product_details.product_list.list"
            >
              <span class="body-2">{{ title }}</span>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card
          flat
          tile
          style="overflow-y: scroll"
          max-height="500"
          ref="card"
        >
          <v-list :ref="kind" three-line v-for="kind in product_details.product_list.list">
            <v-container class="py-1">
              <h3 class="subtitle-2 font-weight-bold">{{ kind }}</h3>
            </v-container>
            <template v-for="item in product_details.product_list.product">
              <v-list-item
                :key="item.name"
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
                    <span class="font-weight-bold body-2">{{ item.title }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span style="font-size: 10px !important;" class="body-2 grey--text">好吃到想吐，不来尝一份吗？</span>
                    <v-row
                      no-gutters
                      style="font-size: 10px"
                      class="grey--text"
                    >
                      <v-col cols="12">
                        <span>月销{{ item.count }}份</span>
                        <span class="pr-1">好评率{{ item.rating * 100 }}%</span>
                      </v-col>
                      <v-col cols="6"><span class="red--text accent-2 body-1">￥19</span></v-col>
                      <v-col cols="6" class="text-right"><v-icon class="blue--text">mdi-plus-circle</v-icon></v-col>
                    </v-row>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  /*
  *
  * */
  import RightList from "./RightList";
  import {mapState} from "vuex";
  import {GET_PRODUCT_DETAILS} from "../../store/type";

  export default {
    name: "ProductList",
    components: {
      RightList
    },
    methods: {
      scrollTo(title) {
        // 这里refs不知道为什么返回的是一个对象，可能和用了中文标记有关？总之键是'0'。
        this.current_tab = title;
        this.$vuetify.goTo(this.$refs[title]['0'], this.scrollOption);
      }
    },
    created() {
      this.product_details.product_list = [];
      this.$store.dispatch(GET_PRODUCT_DETAILS);
    },
    computed: {
      ...mapState({
        product_details: state => state.details_store.product_details,
      }),
      // $vuetify.goTo的option对象，duration是持续时间，offset是距离目标元素偏移，easing是减缓选项
      scrollOption: function() {
        return {
          duration: 350,
          offset: 0,
          easing: 'easeInOutCubic',
          container: this.$refs['card'],
        }
      }
    },
    data() {
      return {
        current_tab: '红包',
      }
    }
  }
</script>

<style scoped>

</style>
