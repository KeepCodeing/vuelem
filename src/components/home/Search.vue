<template>
  <div>
    <v-sheet
      color="white"
      class="pa-2"
    >
      <v-text-field
        v-model="name"
        dense
        hide-details
        rounded
        placeholder="输入商家、商品名称（如'店'）"
        filled
      >
        <span
          slot="append-outer"
          class="blue--text font-weight-bold"
          style="width: 45px"
        >搜索</span>
      </v-text-field>
    </v-sheet>
    <v-card
      flat
      tile
      class="mt-2"
      v-show="search_list.length"
    >
      <v-list>
        <v-list-item link v-for="item in search_list">
          <v-row
            no-gutters
          >
            <v-col cols="2">
              <v-img
                :src="item.img"
                height="45"
                width="45"
              />
            </v-col>
            <v-col cols="6">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-list-item-content>
                <span>评分 {{ item.rating }}</span>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import {GET_SHOP_LIST} from "../../store/type";

  export default {
    name: "Search",
    computed: {
      ...mapState({
        shop_list: state => state.home_store.shop_list,
      })
    },
    data() {
      return {
        name: '',
        search_list: [],
      }
    },
    methods: {
      load_shop(name) {
        // 瞎写搜索算法，注意name为空会返回全部商家，所以要特判一下
        if (!name) return;
        for (let i of this.shop_list) {
          if (i.name.includes(name)) this.search_list.push({name: i.name, img: i.img, rating: i.rating});
        }
      }
    },
    watch: {
      name() {
        while (this.search_list.length) this.search_list.pop();
        this.load_shop(this.name);
      }
    },
    created() {
      this.$store.dispatch(GET_SHOP_LIST);
    }
  }
</script>

<style scoped>

</style>
