<template>
    <div class="item">

        <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product__data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
         >
         <img :src="require('../assets/images/' + product__data.image)" alt="img">
         <div>
            <p>{{product__data.name}}</p>
            <p>Price: {{product__data.price | toFix}}</p>
            <p>{{product__data.category}}</p>
         </div>
         </v-popup>

        <img :src="require('../assets/images/' + product__data.image)" alt="img">
        <p>{{product__data.name}}</p>
        <p>Price: {{product__data.price | toFix}}</p>
        <button class='btn show-info-btn' @click="showPopupInfo">Show info</button>
        <button class='btn' @click="addToCart">Add to Cart</button>
    </div>
</template>

<script>
import vPopup from './popup/v-popup.vue'
import toFix from '../filters/toFix'

export default {
    name: 'Item',
    components:{
        vPopup
    },
    props:{
        product__data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            isInfoPopupVisible: false
        }
    },
    filters:{
        toFix
    },
    methods:{
        showPopupInfo(){
            this.isInfoPopupVisible = true
        },
        closeInfoPopup(){
            this.isInfoPopupVisible = false
        },
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