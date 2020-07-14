<template>
  <div>
    <h2>{{this.$route.params.id}}</h2>
    <lorem add="1p"></lorem>
  </div>
</template>

<script>
  import LoremIpsum from 'vue-lorem-ipsum';
  export default {
    name: 'Paragraph',
    components: {
      'lorem': LoremIpsum
    }
  }

</script>
