<template>
  <div>
    <h2>{{this.$route.params.id}}</h2>
    <lorem add="1p"></lorem>
    <BackButton />
  </div>

</template>

<script>
  import LoremIpsum from 'vue-lorem-ipsum';
  import BackButton from "@/components/BackButton"
  export default {
    name: 'Paragraph',
    components: {
      'lorem': LoremIpsum,
      BackButton
    }
  }

</script>
