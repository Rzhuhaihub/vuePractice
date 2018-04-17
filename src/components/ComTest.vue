<template>
  <div class="block">
    <el-slider
      v-for="item in items" 
      :key="item"
      v-model="item.value"
      vertical
      :step="10"
      height="200px">
    </el-slider>
  </div>
</template>

<script>

export default {
  name: 'ComTest',
  data () {
    return {
         value10: 0,
         items:[{value:10},{value:10},{value:10},{value:10},{value:10},{value:10},{value:10},{value:10},{value:10},{value:10}]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.block{
       display:flex;
       flex-direction: row;
       justify-content: space-around
    }
</style>
