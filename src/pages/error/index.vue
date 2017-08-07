<template>
  <div class="page-error">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

  export default {
    name      : 'error',
    mounted   : function () {
    },
    data () {
      return {
        msg : 'Error 401',
      }
    },
    methods   : {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
