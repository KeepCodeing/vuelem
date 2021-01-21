<template>
  <v-card
    tile
    flat
    class="my-3"
  >
    <v-btn
      v-for="item in tags"
      class="blue lighten-4 text-body-2 mt-3 mx-2"
      tile
      depressed
      small
    >
      {{ item.title }} {{ item.count }}
    </v-btn>
  </v-card>
</template>

<script>
  export default {
    name: "CommentTags",
    data() {
      return {
        tags: [
          { title: '全部', count: '1191', },
          { title: '最新', count: '', },
          { title: '好评', count: '1132', },
          { title: '差评', count: '30', },
          { title: '有图', count: '56', },
          { title: '味道好', count: '34', },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
