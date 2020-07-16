<template>
  <v-btn @click="goBack" large color="primary">go back</v-btn>
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
