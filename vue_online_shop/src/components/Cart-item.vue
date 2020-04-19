<template>
    <div class="cart-item">
        <img :src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Qty:</p>
            {{cart_item_data.quantity}}
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
export default {
    name: "Cart-item",
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{}
    },
    computed:{},
    methods:{
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang="scss">
    .cart-item{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e8e0e0;
        padding: 16px;
        margin-bottom: 16px;
        img{
            max-width: 50px;
        }
    }
</style>