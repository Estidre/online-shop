<template>
    <div class="v-header">
        <router-link :to="{name: 'mainPage'}">
            <img src="../../assets/logo.png" alt="">
        </router-link>
        <div class="search-field">
            <input type="text" name="search-filed" v-model="searchValue">
            <button class="search_btn">
                <i class="material-icons" @click="search(searchValue)">search</i>
            </button>
        </div>            
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "v-header",
    data(){
        return{
            searchValue: ''
        }
    },
    methods:{
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX'
        ]),
        search(value){
            this.GET_SEARCH_VALUE_TO_VUEX(value)
            if(this.$router.path !== '/catalog'){
                this.$router.push('/catalog')
            }
        }
    }
}
</script>

<style lang="scss">
    .v-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: green;
        padding: 16px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;   
        img{
            width: 50px;
        }
        .search-field{
            padding: 16px;
            color: #ffff;
            position: relative;
            right: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .search_btn{
            margin-left: 16px;
            background: transparent;
            border: none;
        }
    }
</style>