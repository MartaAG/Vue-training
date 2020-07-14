<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <List/>
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
