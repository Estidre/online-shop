<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params:{cart_data:CART}}">
            <div class="catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <h1>Catalog</h1>
        <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        />
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
            sortedProducts: []
        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART'
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
        sortByCategories(category){
            this.sortedProducts = []
            let vm = this
            this.PRODUCTS.map(function(item){
                if(item.category === category.name){
                    vm.sortedProducts.push(item)
                }
            })
            this.selected = category.name
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