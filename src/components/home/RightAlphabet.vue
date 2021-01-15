<template>
  <div class="alpha_box">
    <ul class="alpha_list">
      <li v-for="alpha in 26">
        <a :href="'#city-' + getAlpha(alpha)">{{ getAlpha(alpha) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "RightAlphabet",
    methods: {
      getAlpha(alpha) {
        return String.fromCharCode(alpha + 64)
      }
    }
  }
</script>

<style scoped>
  .alpha_box {
    position: fixed;
    right: 20px;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);
  }
  .alpha_list {
    list-style: none;
    font-size: 10px;
  }
  .alpha_list > li {
    margin-top: 3px;

  }
  .alpha_list > li > a {
    color: grey;
    text-decoration: none;
  }
</style>
