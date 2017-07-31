<template>
  <div class="component component--example">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'componentExample',
  data () {
    return {
      msg: 'I am example component.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
