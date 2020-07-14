<template>
<div>
  <ul>
    <router-link v-for="number in numbers" :key="number" :to="{name: 'Text', params:{id:number}}">
        {{number}}
    </router-link>

  </ul>
</div>
</template>

<script>
export default {
  name: 'List',

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
