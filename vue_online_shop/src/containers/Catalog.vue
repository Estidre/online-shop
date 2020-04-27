<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params:{cart_data:CART}}">
            <div class="catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <h1>Catalog</h1>
        <div class="filters">
             <v-select
            :selected="selected"
            :options="categories"
            @select="sortByCategories"
            :isExpended="IS_DESKTOP"
            />
            <div class="range-slider">
                <input 
                type="range" 
                min="0" 
                max="1000" 
                step="10"
                v-model.number="minPrice"
                @change="setRangeSlider"
                >
                <input 
                type="range" 
                min="0" 
                max="1000" 
                step="10"
                v-model.number="maxPrice"
                @change="setRangeSlider"
                >
            </div>
            <div class="range-values">
                <p>Min:{{minPrice}}</p>
                <p>Max:{{maxPrice}}</p>
            </div>
        </div>
       
        <div class="catalog-list">
            <item 
            v-for="product in filteredProducts" 
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
import vSelect from '../components/v-select.vue'
export default {
    name: 'Catalog',
    components:{
        Item,
        vSelect
    },
    data(){
        return{
            categories:[
            {name:'Все', value: 'all'},
            {name:'Мужские', value: 'm'},
            {name:'Женские', value: 'f'},
            {name:'Унисекс', value: 'n'}
            ],
            selected: 'Все',
            sortedProducts: [],
            minPrice: 0,
            maxPrice: 1000
        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'IS_DESKTOP'
        ]),
        filteredProducts(){
            if(this.sortedProducts.length){
                return this.sortedProducts
            }else{
                return this.PRODUCTS
            }
        }
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        },
        setRangeSlider(){
            if(this.minPrice > this.maxPrice){
                let tmp = this.maxPrice
                this.maxPrice = this.minPrice
                this.minPrice = tmp
            }
            this.sortByCategories()
        },
        sortByCategories(category){
            let vm = this
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = this.sortedProducts.filter(function(item){
                return item.price >= vm.minPrice && item.price <= vm.maxPrice
            })
            if(category){
            this.sortedProducts = this.sortedProducts.filter(function(item){
                vm.selected === category.name
                return item.category === category.name
            })
            }
        },
    },
    mounted(){
        this.GET_PRODUCTS()
        .then((res)=>{
            if(res.data){
                console.log('yes')
                this.sortByCategories()
            }
        })
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
    .filters{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .range-slider{
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
       svg, input[type=range]{
        position: absolute;
        top: 0;
        bottom: 0;
        }
        input[type=range]::-webkit-slider-thumb{
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
        }
    }
</style>