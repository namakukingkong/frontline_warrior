<template>
  <div class="page-home">
    <Example></Example>
    <h1>{{ msg }}</h1>
    <h1>{{ $store.getters.getMessage("getters") }}</h1>
    <h1>{{ $store.state.example }}</h1>
    <h2 @click="setMessage">Click to change from mutation</h2>
    <h1 v-if="user">User from axios</h1>
    <p>id: {{user.id}}</p>
    <p>name: {{user.name}}</p>
    <h3 style="cursor: pointer;" @click="getUser(2)">user id: 2</h3>
    <h3 style="cursor: pointer;" @click="getUser(3)">user id: 3</h3>
    <h3 style="cursor: pointer;" @click="getUser(4)">user id: 4</h3>
  </div>
</template>

<script>
  import Example from '@/components/example'
  import axios from 'axios'
  import load from '@/services'
  export default {
    name      : 'home',
    components: {
      Example
    },
    mounted: function () {
      this.getUser(1)
      console.log(this.user)
    },
    data () {
      return {
        msg: 'I am Home Page',
        user: {},
      }
    },
    methods:{
      setMessage: function(){
        this.$store.commit('SET_MESSAGE', 'Mutation')
      },
      getUser: function(id){
        load.users.getUser({id: id}).subscribe(
          function (response) {
            this.user = response
          }.bind(this),
          function (errors) {
            console.log('onError %s', errors);
          }
        );
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
