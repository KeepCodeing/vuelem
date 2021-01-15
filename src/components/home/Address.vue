<template>
  <div>
    <v-card
      tile
      flat
    >
      <div class="pt-3 px-2 white">
        <div>
          <v-text-field
            class="lighten-2 text-subtitle-2 text-center"
            filled
            rounded
            placeholder="小区/街道/单位/学校"
            hide-details
            v-model="pos"
            :disabled="address['addressComponent'] === undefined"
          >
            <div slot="prepend-inner" style="font-size: 15px" @click="$router.push('/home/city')">
              <span class="font-weight-bold">{{ address['addressComponent'] === undefined ? '加载中' : address['addressComponent']['city'] }}</span>
              <v-icon>mdi-menu-down</v-icon>
            </div>
          </v-text-field>
        </div>
        <div class="py-2">
          <p style="font-size: 10px;" class="grey--text lighten-2 font-weight-bold">当前定位</p>
          <span style="line-height: 10px">
        <v-icon class="pr-3 blue--text">mdi-menu-down</v-icon>
        <span class="font-weight-bold">{{ address['formattedAddress'] === undefined ? '加载中...' : address['formattedAddress'].slice(0, 15) + '...' }}</span>
      </span>
        </div>
      </div>

    </v-card>
    <v-card
      flat
      tile
      class="mt-4"
      v-show="result_list.length"
    >
      <div>
        <v-list>
          <v-list-item @click="changePos(item)" style="border-bottom: 1px solid black" v-for="item in result_list">
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.district && item.address ? item.district + item.address : '空' }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <v-snackbar
        v-model="snackbar"
        timeout="900"
        color="success"
      >
        更换地址成功！
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "Address",
    computed: {
      ...mapState({
        address: state => state.home_store.location,
      })
    },
    methods: {
      searchPos() {
        const that = this;
        AMap.plugin('AMap.Autocomplete', function(){
          // 实例化Autocomplete
          let autoOptions = {
            //city 限定城市，默认全国
            city: that.address['addressComponent']['city'],
          };
          let autoComplete= new AMap.Autocomplete(autoOptions);
          // 这里的keyword是搜索的内容
          autoComplete.search(that.pos, function(status, result) {
            that.showList(result);
          })
        })
      },
      showList(result) {
        this.result_list = result['tips'] ? result['tips'] : [];
      },
      changePos(item) {
        this.address['formattedAddress'] = item.district + item.address + item.name;
        this.snackbar = true;
        setTimeout(() => this.$router.push('/home'), 900);
      }
    },
    data() {
      return {
        pos: '',
        result_list: [],
        snackbar: false,
      }
    },
    watch: {
      pos() {
        // 监听输入数据pos的变化，这里前面写了个加载完成后才能编辑输入框的逻辑，也就是说在调用methods的方法时城市是已经
        // 加载完成了的，就不用再写判空逻辑了
        this.searchPos();
      }
    },
  }
</script>

<style scoped>

</style>
