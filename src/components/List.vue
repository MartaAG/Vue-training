
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
    list of numbers
    </p>
    <ol>
      <li v-for='n in 10'
          :key="n">
        <h3>{{n}}</h3>
        <lorem add="1p"></lorem>
      </li>

    </ol>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

li {
}
a {
  color: #42b983;
}
</style>
