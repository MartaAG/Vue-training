<template>
  <v-app>
    <v-btn color="info" @click="goBack">go back</v-btn>
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
