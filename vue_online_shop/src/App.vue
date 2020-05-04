<template>
  <div id="app">
    <main-wrapper />
  </div>
</template>

<script>
import MainWrapper from './containers/Main-wrapper.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components:{
    MainWrapper
  },
  data(){
    return{}
  },
  computed:{
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESCTOP'
    ])
  },
  methods:{
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ])
  },
  mounted(){
    let vm = this;
    window.addEventListener('resize', function(){
      if(window.innerWidth > 767){
        vm.SET_DESKTOP()
      }else{
        vm.SET_MOBILE()
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
