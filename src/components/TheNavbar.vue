<template>
<v-app-bar app color="indigo" shrink-on-scroll prominent dark>

  <v-tabs background-color="deep-purple accent-4" show-arrows centered>
    <v-tab :to="{name:'Home'}">
      Home
    </v-tab>
    <v-tab v-for="n in 10" :key="n" :to="{name: 'Text', params:{id:n}}">
      {{n}}
    </v-tab>
  </v-tabs>
</v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar',

  mounted() {
    if (localStorage.getItem('paragraphId')) {
      this.$router.push(localStorage.getItem('paragraphId'))
    } else {
      //if id does not exist go to home
      this.$router.push({name: "Home"})
    }
  },

  watch: {
    $route(to, from) {
      // react to route changes...
      //if the route change and id exists, save it to localStorage
      if (to.path !== from.path && this.$route.params.id) {
        localStorage.setItem('paragraphId', this.$route.params.id);
      } else {
        localStorage.removeItem('paragraphId');
      }
    }
  }
}
</script>
