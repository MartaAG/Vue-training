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
import { mapMutations } from 'vuex'
export default {
  name: 'TheNavbar',
  //define a method which commits changes to state
  methods: {
    ...mapMutations({
      pushToHistory: 'addToHistory'
    })
  },
  //read from local storage last saved path
  mounted() {
    if (localStorage.getItem('id')) {
        this.$router.push({
        name: "Text",
        //get the id from the local storage
        params : {id: localStorage.getItem('id')}}
      )
    }
  },

  watch: {
    $route(to, from) {
      // react to route changes...
      //if the route change, then save it to local storage
      if (to.path !== from.path) {
      //save to local storage id of path
        localStorage.setItem('id', this.$route.params.id);
      //commit to mutations a change
        this.pushToHistory(this.$route.params.id)
      }
    }
  }
}
</script>
