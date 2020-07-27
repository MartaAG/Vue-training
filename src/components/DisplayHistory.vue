<template>
  <div> you saw:
    <span>
      {{b}}
    </span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'DisplayHistory',
    //display state
    computed: {
    ...mapGetters(['showNumbers']),
    b: function() {
      return this.showNumbers.join(' ➡️ ')
    },
  },

  }
</script>
