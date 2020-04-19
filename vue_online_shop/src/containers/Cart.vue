<template>
    <div class="cart">
        <router-link :to="{name: 'catalog'}">
            <div class="catalog__link_to_cart">Back to catalog</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!cart_data.length">There are not products in cart...</p>
        <cart-item
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data ="item"
            @deleteFromCart="deleteFromCart(index)"
         />     
    </div>
</template>

<script>
import CartItem from '../components/Cart-item.vue'
import {mapActions} from 'vuex'
export default {
    name: 'Cart',
    props:{
        cart_data:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components:{
        CartItem
    },
    computed:{
    },
    methods:{
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style lang="scss">
    
</style>