<template>
    <div class="main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

export default {
    name: 'Main-wrapper',
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
      max-width: 900px;
      margin: 0 auto;
  }
</style>