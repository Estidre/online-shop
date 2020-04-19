<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params:{cart_data:CART}}">
            <div class="catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <h1>Catalog</h1>
        <div class="catalog-list">
            <item 
            v-for="product in PRODUCTS" 
            :key="product.article"
            :product__data="product"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Catalog',
    components:{
        Item
    },
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        }
    },
    mounted(){
        this.GET_PRODUCTS()
    }
}
</script>

<style lang="scss">
    .catalog{
        &-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        }
        &__link_to_cart{
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 16px;
            border: solid 1px #aeaeae;
        }
    }
</style>