<template>
  <div id="app">
    <main-wrapper />
    <v-select 
      :options="options"
      @select="optionSelect"
      :selected="selected"
    />
    <p>{{selected}}</p>
  </div>
</template>

<script>
import MainWrapper from './containers/Main-wrapper.vue'
import vSelect from './components/v-select.vue'

export default {
  name: 'App',
  components:{
    vSelect,
    MainWrapper
  },
  data(){
    return{
      options:[
        {name:'Option 1', value: 1},
        {name:'Option 2', value: 2},
        {name:'Option 3', value: 3},
        {name:'Option 4', value: 4},
        {name:'Option 5', value: 5}
      ],
      selected: 'Select'
    }
  },
  methods:{
    optionSelect(option){
      this.selected = option.name
    }
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
  margin-top: 60px;
}
</style>
