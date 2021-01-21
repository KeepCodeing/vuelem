<template>
  <v-card
    tile
    flat
    class="mt-1"
    v-if="comment_list.length !== 0"
  >
    <CommentTags />
    <v-divider />
    <template  v-for="item in comment_list">
      <v-list three-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content >
            <div class="text-body-2" >
              <v-row
                no-gutters
              >
                <v-col cols="8"><span>{{ item.name }}</span></v-col>
                <v-col cols="4" class="text-right"><span>{{ item.date }}</span></v-col>
              </v-row>
            </div>
            <div>
              <v-rating
                v-model="item.rating"
                background-color="orange lighten-3"
                half-increments
                color="orange"
                readonly
                size="3"
                dense
              />
            </div>
            <div class="subtitle-2 black--text">{{ item.comment }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
    </template>
  </v-card>
</template>

<script>
  import CommentTags from "./CommentTags";
  import {mapState} from 'vuex'
  import {GET_COMMENT_LIST} from "../../store/type";

  export default {
    name: "CommentList",
    created() {
      this.$store.dispatch(GET_COMMENT_LIST);
    },
    computed: {
      ...mapState({
        comment_list: state => state.details_store.comment_list,
      })
    },
    components: {
      CommentTags,
    }
  }
</script>

<style scoped>

</style>
