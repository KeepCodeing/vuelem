<template>
  <v-card
    max-width="600"
    class="mx-auto"
    v-if="details['banner'][$route.params.id] !== undefined"
  >
    <v-list two-line subheader>
      <v-list-item>
        <v-row>
          <v-col cols="3" class="text-center">
<!--            这里强行偷懒（写完玩mc w），原因是banner根据路由id请求商家数据，但是banner又是一个独立于点餐
                这些组件的，所以其直接把banner写在视图里了。这就导致banner请求到的数据只能在banner里用....
-->
            <span class="text-h4 orange--text">{{ details['banner'][$route.params.id].rating }}</span>
          </v-col>
          <v-col cols="3">
            <div class="text-body-2 text-center">商家评分</div>
            <div>
              <v-rating
                v-model="details['banner'][$route.params.id].rating"
                background-color="orange lighten-3"
                half-increments
                color="orange"
                readonly
                size="3"
                dense
              />
            </div>
          </v-col>
          <v-col cols="2" class="text-center text-body-2">
            <div>味道</div>
            <div>4.8</div>
          </v-col>
          <v-col cols="2" class="text-center text-body-2">
            <div>味道</div>
            <div>4.8</div>
          </v-col>
          <v-col cols="2" class="text-center text-body-2">
            <div>味道</div>
            <div>4.9</div>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
    <v-divider />
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "SellerRating",
    computed: {
      ...mapState({
        details: state => state.details_store.product_details,
      })
    },
  }
</script>

<style scoped>

</style>
