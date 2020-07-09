
<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <ul>
    <a v-for='n in 10' :key="n" :href="`#${n}`">
      <li >
        {{n}}
      </li>
    </a>
  </ul>
  <div v-for='number in numbers' :key="number.num" :id="number.num">
    <h3>{{number.num}}</h3>
    <lorem add="1p"></lorem>
  </div>
</div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
  name: 'List',
  components: {
    'lorem': LoremIpsum
  },
  props: {
    msg: String
  },
  data: function() {
    return {
    numbers: [
      {num:1},
      {num: 2},
      {num: 3},
      {num: 4},
      {num: 5},
      {num: 6},
      {num: 7},
      {num: 8},
      {num: 9},
      {num: 10}
    ]
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
