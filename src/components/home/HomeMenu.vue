<template>
  <div>
    <v-sheet color="white">
      <v-carousel
        height="190"
        hide-delimiter-background
        show-arrows-on-hover
        hide-delimiters
      >
        <v-carousel-item
          v-for="item in menu_list[0]"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col class="black--text" cols="3" v-for="menu in item">
              <v-card
                flat
                tile
                height="67"
                width="67"
                color="white"
              >
                <v-img
                  :src="menu.icon"
                >
                </v-img>
                <div
                  style="width: 67px; font-size: 13px;"
                  class="black--text text-center font-weight-bold"
                >{{menu.name}}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </div>
</template>

<script>
  import {GET_MENU_LIST} from "../../store/type";
  import {mapState} from "vuex";

  export default {
    name: "HomeMenu",
    computed: {
      ...mapState({
        menu_list: state => state.home_store.menu_list,
      }),
    },
    created() {
      this.$store.dispatch(GET_MENU_LIST);
    }
  }
</script>

<style scoped>

</style>
