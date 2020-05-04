<template>
    <div class="main-wrapper">
        <v-header />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import vHeader from '../components/layouts/v-header'

export default {
    name: 'Main-wrapper',
    components:{
        vHeader
    },
    props:{},
    data(){
        return{

        }
    },
    computed:{},
    methods:{}
}
</script>

<style lang="scss">
  .main-wrapper{
      margin: 0 auto;
  }
</style>