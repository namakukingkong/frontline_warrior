<template>
  <div class="page-home">
    <Example></Example>
    <h1>{{ msg }}</h1>
    <h1>{{ $store.getters.getMessage("getters") }}</h1>
    <h1>{{ $store.state.example }}</h1>
    <h2 @click="setMessage">Click to change from mutation</h2>
  </div>
</template>

<script>
  import Example from '@/components/example'
  export default {
    name      : 'home',
    components: {
      Example
    },
    data () {
      return {
        msg: 'I am Home Page'
      }
    },
    methods:{
      setMessage: function(){
        this.$store.commit('SET_MESSAGE', 'Mutation')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
