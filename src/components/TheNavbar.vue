<template>
  <v-app-bar
      app
      color="indigo"
      dark>

      <v-tabs>
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
    name: 'TheNavbar'
  }
</script>
