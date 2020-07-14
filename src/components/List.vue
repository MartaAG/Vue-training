<template>
<div>
  <ul>
    <router-link v-for="n in 10" :key="n" :to="{name: 'Text', params:{id:n}}">
        {{n}}
    </router-link>

  </ul>
</div>
</template>

<script>
export default {
  name: 'List',
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
