<template>
  <div> you saw:
    <span v-for="showNumber in showNumbers" :key="showNumber">
      {{showNumber}} ➡️
    </span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'DisplayHistory',
    //display state
    computed: mapGetters(['showNumbers'])

  }
</script>
