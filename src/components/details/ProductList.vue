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
                    <span style="font-size: 10px !important;" class="body-2 grey--text">{{ item.intro }}</span>
                    <v-row
                      no-gutters
                      style="font-size: 10px"
                      class="grey--text"
                    >
                      <v-col cols="12">
                        <span>月销{{ item.count }}份</span>
                        <span class="pr-1">好评率{{ item.rating * 100 }}%</span>
                      </v-col>
                      <v-col cols="6"><span class="red--text accent-2 body-1">￥{{ item.pay }}</span></v-col>
                      <v-col
                        cols="2"
                        class="text-right"
                      ><v-icon
                        @click="minus_product(item.title + kind, item.pay)"
                        v-show="cart_list[item.title + kind] !== undefined && cart_list[item.title + kind]['count'] >= 1"
                        class="blue--text"
                      >mdi-minus-circle</v-icon>
                      </v-col>
                      <v-col
                        class="text-center"
                        cols="2"
                      ><span
                        style="width:100%; line-height: 27px;"
                      >{{ cart_list[item.title + kind] === undefined ? 0 : cart_list[item.title + kind]['count']}}</span>
                      </v-col>
                      <v-col
                        @click="plus_product(item.title + kind, item.pay)"
                        cols="2"
                        class="text-right"
                      ><v-icon class="blue--text">mdi-plus-circle</v-icon>
                      </v-col>
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
    <ShopCar />
  </v-sheet>
</template>

<script>
  /*
  * 大概算是写这个页面的一些思路记录，因为写的时间太长了所以有点不知道之前做了什么的感觉
  * 1. 首先是顶部商家简介，这个东西没什么好说的，直接衣蛾带img的card加row分成几行布局就行了，
  * 下面有三个选项，之前（昨天）的思路是搞成路由切换，但发现使用了动态路由不能这样做，所以
  * 干脆写成了current_tab === path这种形式，用v-show显示隐藏，也能方便的更改样式。
  * 2. 然后是商家推荐，这个昨天一度觉得很难，后来想到card可以纵向滑动隐藏，那么横向应该也是
  * 同理，所以试了下，发现可行。做成一列展示的思路是用一个display: inline-block的div包含多个
  * 固定宽度的div，然后让它们排开把card的空间挤开。这时可以发现card默认是不会有横向的滑动的，
  * 所以要给card加上overflow-x: scroll和max-width: 100%这两个样式，这样就能实现横向展示了，
  * 另外因为边距之类各种小问题会导致纵向滑动条显示，加个overflow-y: hidden就行了。然后这个
  * 展示图片还是一个card+img，所以照搬banner的就行。
  * 3. 两列滑动和滑动定位，这个无疑是最难的（没有了解过之前），一度觉得要自己写所以想要放弃..
  * 先说下怎么做两列滑动，这个用到了前面说到的card纵向溢出滑动的知识，所以直接设置max-height就行。
  * 但是这样设置后会发现card是行级元素，还得加个row把他们写成两列并在一起。然后左右两侧的内容都
  * 是用list渲染的，其实应该也可以用别的控件渲染，左边比较简单的选项用行元素渲染就行，当然效果
  * 应该没有list渲染好。右边的商品信息就必须用list渲染了，这个和shop_list.vue里的商家信息差不多，
  * 可以使用three lines的样式渲染，左边一列是商品图片，右边两行是商品名称之类的东西，用row渲染就行。
  * 然后是关于滚动定位，记录下还记得的几个思路：
  * 首先是城市列表里学到的a标签作为书签使用，这样大概是可行的，但是效果
  * 会非常烂。
  * 然后就是了解了$vuetify之后的想法，这玩意试了很久发现都是针对整个容器进行滑动的，而想要滑动的只有
  * 商品卡片。在这个过程中发现所有Vue component都有$vuetify这个对象，而且它在任何一个Vue对象调用时
  * 都是调用的同一个实例。那么这里想到的方法就是卡片自然撑开，然后让左侧选项变成fixed之类的定位把那块
  * 被撑开的空白挡住。这样所有商品都算是在主框架下的了，也就能定位到了。然而这样做还是很烂，因为左侧
  * 选项位置固定，但是页面不固定，如果进行滑动就会挡着其它元素，所以也放弃了。
  * 最后就是走投无路翻Vuetify2.4.x文档发现的option里还有个container对象可以设定（虽然2.4.x文档很烂但
  * 这个页面除外w），见文思意，这玩意就是用来指定对那个容器进行滑动的。搞了搞之后发现能行，就去看mcyt当
  * five了w。
  * 还有商品卡片，这东西和shop_list里的商家详情几乎一样，three lines list然后改下row的布局就行。
  * 最后提下$vuetify.goTo(target, option)，这里target可以接受大致四种类型的参数，vue component,
  * Selector, ref object，tag name, 说到底就是dom对象，比较方便的方法是直接搞个ref然后获取就行。
  * 这里用选项的title作为ref的id，然后后面的商品分类就用v-for="item in titles" => v-for="product in product_list"
  * 的方式进行渲染了，定位到的是分区标题:ref="title"。不过这里有个坑就是title是中文的，这似乎导致$refs返回了一个
  * 对象，obj['0']才能获取到真正的dom元素...还有是option，它的container并没有直接对参数进行约束，比如非空
  * 非未定义之类的，如果直接传个undefined过去它也不会直接报错，而是在执行goTo的时候报错...
  * */
  import RightList from "./RightList";
  import ShopCar from "./ShopCar";
  import {mapState} from "vuex";

  export default {
    name: "ProductList",
    components: {
      RightList,
      ShopCar,
    },
    methods: {
      scrollTo(title) {
        // 这里refs不知道为什么返回的是一个对象，可能和用了中文标记有关？总之键是'0'。
        this.current_tab = title;
        this.$vuetify.goTo(this.$refs[title]['0'], this.scrollOption);
      },
      // 迫真添加商品的方法，将cart_list改造成obj[商品标题+商品分区] = []的形式，这样就能
      // 将当前分区的当前物品看成是一个不重复的商品了，也就能算出它的花费和数量什么的了
      plus_product(key, pay) {
        // vue的动态更新：简单来说就是对象的变化JS不允许检测，所以得用this.$set来动态更新
        if (!this.cart_list[key]) {
          // 将商品名+分区这个对象初始化，下面给它动态赋值...
          this.$set(this.cart_list, key, {count: 0, pay: 0});
        }
        this.$set(this.cart_list, key, {
          count: this.cart_list[key]['count'] + 1,
          pay: this.cart_list[key]['pay'] + pay,
        });
        // 更新总计和总花费
        this.$set(this.cart_list, 'total_pay', this.cart_list['total_pay'] + pay);
        this.$set(this.cart_list, 'total_count', this.cart_list['total_count'] + 1);
      },
      minus_product(key, pay) {
        // 这个特判可以不要，因为前面已经判断了商品数<=0的情况，另外这里加减函数可以写成一个，只是符号区别，但是懒得改了w..
        // if (this.cart_list[key]['count'] <= 0) return;
        this.$set(this.cart_list, key, {
          count: this.cart_list[key]['count'] - 1,
          pay: this.cart_list[key]['pay'] - pay,
        });

        // 更新总计和总花费
        this.$set(this.cart_list, 'total_pay', this.cart_list['total_pay'] - pay);
        this.$set(this.cart_list, 'total_count', this.cart_list['total_count'] - 1);
      }
    },
    created() {
      this.product_details.product_list = [];
      // this.$store.dispatch(GET_PRODUCT_DETAILS);
    },
    computed: {
      ...mapState({
        product_details: state => state.details_store.product_details,
        cart_list: state => state.details_store.cart_list,
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
        t: 0,
      }
    }
  }
</script>

<style scoped>

</style>
