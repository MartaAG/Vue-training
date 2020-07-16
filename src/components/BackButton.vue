<template>
  <v-app>
    <v-btn dark color="deep-purple accent-2" @click="goBack">go back</v-btn>
  </v-app>
</template>

<script>
  export default {
    name: 'BackButton',
    methods: {
      goBack() {
        return this.$router.go(-1);
      }
    }
  }
</script>
