<template>
  <!-- 这里和教程里的不一样，因为懒得自己写组件所以直接用了抽屉，不一样的地方就是抽屉是从下面出来的，而且也没做搜索框... -->
  <v-navigation-drawer
    v-model="$store.state.home_store.drawer"
    fixed
    bottom
    temporary
  >
    <v-card
      tile
      flat
      class="mt-2"
    >
      <v-row
        no-gutters
      >
<!--     把json分成了两部分，一个用来存选项标题，一个用来存当前选项有多少个选择，这里渲染父标题   -->
        <v-col  cols="3" v-for="item in sort_list.parent" class="text-center subtitle-1">
          <span style="font-size: 14px" @click="current_id = item.id">{{ item.name }}</span>
          <v-icon style="font-size: 14px" v-if="item.icon === 'y'">mdi-menu-down</v-icon>
        </v-col>
<!--      渲染子选项，外面用个col包着保证能拿到数据  -->
        <v-col cols="12" v-for="item in sort_list.children">
          <template
            v-for="kind in item.kind"
          >
<!--          综合排序下的选项，它采用v-show的形式来保证只会在渲染综合排序选项时使用下面的列表形式的渲染格式  -->
            <v-col
              cols="12"
              v-show="item.id === current_id && kind.title === ''"
              v-for="li in kind.list"
            >
              <!--       根据点击将字体变蓝     -->
              <span @click="current_tab = li" :class="{'blue--text': li === current_tab}" style="font-size: 14px">{{ li }}</span>
            </v-col>
            <v-col
              cols="12"
              v-show="current_id === item.id && kind.title !== ''"
            >
              <v-card
                tile
                flat
              >
                <v-card-title class="pa-0">
                  <p class="grey--text subtitle-2">{{ kind.title }}</p>
                </v-card-title>
                <v-card-actions>
                  <v-row
                    no-gutters
                  >
                    <v-col cols="4" v-for="item in kind.list">
                      <v-btn
                        tile
                        text
                        style="font-size: 13px; margin: 2px 0; width: 100px"
                        class="pa-2 grey lighten-4 black--text"
                      >
                        {{ item }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
        </v-col>
        <v-col
          cols="6"
          class="grey white--text text-center"
          @click="$store.state.home_store.drawer = false"
        >
          <div style="height: 50px; line-height: 50px;">取消</div>

        </v-col>
        <v-col
          class="success text-center white--text lighten-1"
          cols="6"
          @click="$store.state.home_store.drawer = false"
        >
          <div style="height: 50px; line-height: 50px;">确定</div>
        </v-col>
      </v-row>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "BottomDrawer",
    computed: {
      ...mapState({
        sort_list: state => state.home_store.sort_list,
      })
    },
    data() {
      return {
        current_id: 1,
        current_tab: '综合排序',
      }
    }
  }
</script>

<style scoped>

</style>
