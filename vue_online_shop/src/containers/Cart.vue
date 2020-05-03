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
            @increment = "increment(index)"
            @decrement = "decrement(index)"
         />
         <div class="cart__total">
             <p class="total__name">Total:</p>
             <p>{{ cartTotal | toFix }}</p>
         </div>     
    </div>
</template>

<script>
import CartItem from '../components/Cart-item.vue'
import {mapActions} from 'vuex'
import toFix from '../filters/toFix'
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
       filters:{
        toFix
    },
    computed:{
        cartTotal(){
            return this.cart_data.reduce((res, item) => res + item.price * item.quantity, 0)
        }
    },
    methods:{
        ...mapActions([
            'DELETE_FROM_CART',
             'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        },
        increment(index){
            this.INCREMENT_CART_ITEM(index)
        },
         decrement(index){
            this.DECREMENT_CART_ITEM(index)
        }
    }
}
</script>

<style lang="scss">
    .cart{
        &__total{
            margin-top: 20px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            color: rgb(75, 185, 75);
        }
        .total__name{
            margin-right: 16px;
        }
    }
</style>