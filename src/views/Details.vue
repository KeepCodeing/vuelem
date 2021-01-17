<template>
  <div>
    <Banner :id="$route.params.id" />
    <router-view />
  </div>
</template>

<script>
  // 思路：通过banner（也就是上面的图片+选项）然后加一个路由显示下面的组件
  // 坠毁了，原因是动态路由比如/details/:id这种路径是不能嵌套路由的，也就是
  // 说在我们切换到/details/eat时，会导致id变成undefined，这样就会报错，
  // 虽然可以写很多对应的路径，但是简洁度肯定会有影响，所以可以的话用v-who比较好...
  import Banner from "../components/details/Banner";
  export default {
    name: "Details",
    components: {
      Banner,
    }
  }
</script>

<style scoped>

</style>
