<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <List msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import List from "@/components/List.vue";

  export default {
    name: "Home",
    components: {
      List
    }
  }

</script>
