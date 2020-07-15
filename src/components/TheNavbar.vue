<template>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-tabs>
    <v-tab  v-for="n in 10" :key="n">
      <router-link :to="{name: 'Text',   params:{id:n}}">
      {{n}}
      </router-link>
    </v-tab>
    </v-tabs>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'TheNavbar'
  }
</script>
