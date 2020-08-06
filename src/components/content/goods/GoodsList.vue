<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" : goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsIListtem from "./GoodsIListtem";

  export default {
    name: "GoodsList",
    components: {
      GoodsIListtem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>