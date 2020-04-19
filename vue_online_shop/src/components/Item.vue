<template>
    <div class="item">
        <img :src="require('../assets/images/' + product__data.image)" alt="img">
        <p>{{product__data.name}}</p>
        <p>Price: {{product__data.price}}</p>
        <button class='btn' @click="addToCart">Add to Cart</button>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props:{
        product__data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
       addToCart(){
           this.$emit('addToCart',this.product__data)
       }
    },
    mounted(){
        this.$set(this.product__data, 'quantity', 1)
    }
}
</script>

<style lang="scss">
    .item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e8e0e0;
        padding: 16px;
        margin-bottom: 16px;
        img{
            width: 200px;
            height: 200px;
        }
    }
</style>