<template>
<div>
  <ul>
<<<<<<< HEAD
    <li><a v-for="number in numbers" :key="number" :href="`#${number}`">
        {{number}}
      </a> </li>

  </ul>
  <template v-for="number in numbers">
    <h3 :key="'a' + number" :id="number">{{number}}</h3>
    <lorem add="1p" :key="'i' + number"></lorem>
  </template>
=======
    <router-link v-for="n in 10" :key="n" :to="{name: 'Text', params:{id:n}}">
        {{n}}
    </router-link>

  </ul>
>>>>>>> router-feature
</div>
</template>

<script>
export default {
  name: 'List',
<<<<<<< HEAD
  components: {
    'lorem': LoremIpsum
  },

  data: function() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
=======
>>>>>>> router-feature
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
<<<<<<< HEAD

=======
>>>>>>> router-feature
a {
  color: #42b983;
}
</style>
