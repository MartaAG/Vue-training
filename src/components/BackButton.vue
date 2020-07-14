<template>
  <button @click="goBack">go back</button>
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

<style scoped>
  button {
    cursor: pointer;
  }
</style>
