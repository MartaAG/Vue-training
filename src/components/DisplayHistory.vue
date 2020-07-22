<template>
  <div> you saw:
    <p v-for="showNumber in showNumbers" :key="showNumber">
      {{showNumber}}
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'DisplayHistory',
    computed: mapGetters(['showNumbers'])

  }
</script>
