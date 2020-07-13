
<template>
<div>
  <ul>
    <li><a v-for="number in numbers" :key="number" :href="`#${number}`">
        {{number}}
      </a> </li>

  </ul>
  <template v-for="number in numbers">
    <h3 :key="'a' + number" :id="number">{{number}}</h3>
    <lorem add="1p" :key="'i' + number"></lorem>
  </template>
</div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';

export default {
  name: 'List',
  components: {
    'lorem': LoremIpsum
  },

  data: function() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
}

a {
  color: #42b983;
}
</style>
